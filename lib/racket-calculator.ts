import { RacketDB } from "@prisma/client";

interface RacketScores {
	power: number;
	spin: number;
	control: number;
}

// 각 특성의 최소/최대값 (실제 데이터 기반으로 조정 필요)
const SCORE_RANGES = {
	power: { min: 100, max: 200 },
	spin: { min: 80, max: 180 },
	control: { min: 120, max: 250 },
};

// 점수 정규화 함수 (min-max 정규화)
function normalizeScore(score: number, min: number, max: number): number {
	return Math.round(((score - min) / (max - min)) * 100);
}

export function calculateRacketScores(racket: RacketDB): RacketScores {
	const rawPower = calculatePower(racket);
	const rawSpin = calculateSpin(racket);
	const rawControl = calculateControl(racket);

	return {
		power: normalizeScore(
			rawPower,
			SCORE_RANGES.power.min,
			SCORE_RANGES.power.max
		),
		spin: normalizeScore(
			rawSpin,
			SCORE_RANGES.spin.min,
			SCORE_RANGES.spin.max
		),
		control: normalizeScore(
			rawControl,
			SCORE_RANGES.control.min,
			SCORE_RANGES.control.max
		),
	};
}

function calculatePower(racket: RacketDB): number {
	// 수정된 가중치와 계산
	const baseScore =
		racket.weight * 0.4 + racket.stiffness * 0.4 + racket.headsize * 0.2;

	// 수정된 패턴 보너스
	const patternBonus = racket.stringPattern === "PATTERN_18x20" ? 3 : 0;

	return Math.round(baseScore + patternBonus);
}

function calculateSpin(racket: RacketDB): number {
	// 수정된 무게 보너스 계산
	const weightBonus =
		racket.weight >= 300 && racket.weight <= 310
			? 100
			: racket.weight < 300
			? 100 - (300 - racket.weight) * 3
			: 100 - (racket.weight - 310) * 3;

	// 수정된 패턴 점수와 헤드사이즈 보너스
	const patternScore = racket.stringPattern === "PATTERN_16x19" ? 100 : 60;
	const headsizeBonus = (racket.headsize - 95) * 2;

	return Math.round(weightBonus + patternScore * 0.6 + headsizeBonus);
}

function calculateControl(racket: RacketDB): number {
	// 수정된 컨트롤 계산
	return Math.round(
		racket.weight * 0.4 +
			racket.balance * 0.3 +
			(98 - racket.headsize) * 0.1 +
			(racket.stringPattern === "PATTERN_18x20" ? 20 : 0) +
			(70 - racket.stiffness) * 0.2
	);
}
