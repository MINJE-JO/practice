import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function RacketScoresPage() {
	const rackets = await prisma.racketDB.findMany({
		orderBy: { brand: "asc" },
	});

	const racketsWithScores = rackets.map((racket) => {
		// 파워 계산 과정
		const powerBase =
			racket.weight * 0.4 +
			racket.stiffness * 0.4 +
			racket.headsize * 0.2;
		const powerBonus = racket.stringPattern === "PATTERN_18x20" ? 3 : 0;
		const rawPower = Math.round(powerBase + powerBonus);
		const normalizedPower = Math.round(
			((rawPower - 100) / (200 - 100)) * 100
		);

		// 스핀 계산 과정
		const weightBonus =
			racket.weight >= 300 && racket.weight <= 310
				? 100
				: racket.weight < 300
				? 100 - (300 - racket.weight) * 3
				: 100 - (racket.weight - 310) * 3;
		const patternScore =
			racket.stringPattern === "PATTERN_16x19" ? 100 : 60;
		const headsizeBonus = (racket.headsize - 95) * 2;
		const rawSpin = Math.round(
			weightBonus + patternScore * 0.6 + headsizeBonus
		);
		const normalizedSpin = Math.round(((rawSpin - 80) / (180 - 80)) * 100);

		// 안정성 계산 과정
		const stabilityWeight = racket.weight * 0.4;
		const stabilityBalance = racket.balance * 0.3;
		const stabilityHeadsize = (98 - racket.headsize) * 0.1;
		const stabilityPattern =
			racket.stringPattern === "PATTERN_18x20" ? 20 : 0;
		const stabilityStiffness = (70 - racket.stiffness) * 0.2;

		const rawStability = Math.round(
			stabilityWeight +
				stabilityBalance +
				stabilityHeadsize +
				stabilityPattern +
				stabilityStiffness
		);
		const normalizedStability = Math.round(
			((rawStability - 120) / (250 - 120)) * 100
		);

		return {
			...racket,
			calculations: {
				power: {
					weightComponent: Math.round(racket.weight * 0.4),
					stiffnessComponent: Math.round(racket.stiffness * 0.4),
					headsizeComponent: Math.round(racket.headsize * 0.2),
					patternBonus: powerBonus,
					rawScore: rawPower,
					normalized: normalizedPower,
				},
				spin: {
					weightBonus,
					patternScore,
					headsizeBonus,
					rawScore: rawSpin,
					normalized: normalizedSpin,
				},
				stability: {
					weightComponent: Math.round(stabilityWeight),
					balanceComponent: Math.round(stabilityBalance),
					headsizeComponent: Math.round(stabilityHeadsize),
					patternBonus: stabilityPattern,
					stiffnessComponent: Math.round(stabilityStiffness),
					rawScore: rawStability,
					normalized: normalizedStability,
				},
			},
		};
	});

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6">라켓 점수 계산 결과</h1>
			<div className="grid grid-cols-1 gap-4">
				{racketsWithScores.map((racket) => (
					<Card key={racket.id} className="border-2">
						<CardHeader>
							<CardTitle className="text-xl">
								{racket.brand} {racket.name}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								{/* 기본 스펙 */}
								<div className="grid grid-cols-2 md:grid-cols-5 gap-2">
									<span>무게: {racket.weight}g</span>
									<span>밸런스: {racket.balance}mm</span>
									<span>헤드사이즈: {racket.headsize}</span>
									<span>강성: {racket.stiffness}</span>
									<span>
										패턴:{" "}
										{racket.stringPattern.replace(
											"PATTERN_",
											""
										)}
									</span>
								</div>

								{/* 파워 계산 과정 */}
								<div className="space-y-2">
									<h3 className="font-semibold">
										파워 점수 계산 과정
									</h3>
									<div className="pl-4 space-y-1 text-sm">
										<p>
											무게 기여도:{" "}
											{
												racket.calculations.power
													.weightComponent
											}{" "}
											(무게 × 0.4)
										</p>
										<p>
											강성 기여도:{" "}
											{
												racket.calculations.power
													.stiffnessComponent
											}{" "}
											(강성 × 0.4)
										</p>
										<p>
											헤드사이즈 기여도:{" "}
											{
												racket.calculations.power
													.headsizeComponent
											}{" "}
											(헤드사이즈 × 0.2)
										</p>
										<p>
											패턴 보너스:{" "}
											{
												racket.calculations.power
													.patternBonus
											}
										</p>
										<p className="font-medium">
											원점수:{" "}
											{racket.calculations.power.rawScore}
										</p>
										<p className="font-medium">
											최종점수:{" "}
											{
												racket.calculations.power
													.normalized
											}
											/100
										</p>
									</div>
								</div>

								{/* 스핀 계산 과정 */}
								<div className="space-y-2">
									<h3 className="font-semibold">
										스핀 점수 계산 과정
									</h3>
									<div className="pl-4 space-y-1 text-sm">
										<p>
											무게 보너스:{" "}
											{
												racket.calculations.spin
													.weightBonus
											}
										</p>
										<p>
											패턴 점수:{" "}
											{
												racket.calculations.spin
													.patternScore
											}
										</p>
										<p>
											헤드사이즈 보너스:{" "}
											{
												racket.calculations.spin
													.headsizeBonus
											}
										</p>
										<p className="font-medium">
											원점수:{" "}
											{racket.calculations.spin.rawScore}
										</p>
										<p className="font-medium">
											최종점수:{" "}
											{
												racket.calculations.spin
													.normalized
											}
											/100
										</p>
									</div>
								</div>

								{/* 안정성 계산 과정 */}
								<div className="space-y-2">
									<h3 className="font-semibold">
										컨트롤 점수 계산 과정
									</h3>
									<div className="pl-4 space-y-1 text-sm">
										<p>
											무게 기여도:{" "}
											{
												racket.calculations.stability
													.weightComponent
											}{" "}
											(무게 × 0.4)
										</p>
										<p>
											밸런스 기여도:{" "}
											{
												racket.calculations.stability
													.balanceComponent
											}{" "}
											(밸런스 × 0.3)
										</p>
										<p>
											헤드사이즈 기여도:{" "}
											{
												racket.calculations.stability
													.headsizeComponent
											}{" "}
											((98-헤드사이즈) × 0.1)
										</p>
										<p>
											패턴 보너스:{" "}
											{
												racket.calculations.stability
													.patternBonus
											}
										</p>
										<p>
											강성 기여도:{" "}
											{
												racket.calculations.stability
													.stiffnessComponent
											}{" "}
											((70-강성) × 0.2)
										</p>
										<p className="font-medium">
											원점수:{" "}
											{
												racket.calculations.stability
													.rawScore
											}
										</p>
										<p className="font-medium">
											최종점수:{" "}
											{
												racket.calculations.stability
													.normalized
											}
											/100
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
