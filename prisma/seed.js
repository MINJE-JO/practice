import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	// Clear existing data
	await prisma.userAnswer.deleteMany();
	await prisma.answerOption.deleteMany();
	await prisma.question.deleteMany();
	await prisma.racketDB.deleteMany();
	await prisma.stringDB.deleteMany();

	// Racket Data
	const rackets = [
		{
			name: "Pro Staff 97 v14",
			brand: "WILSON",
			weight: 315,
			stringPattern: "PATTERN_16x19",
			stiffness: 66,
			balance: 310,
			headsize: 97,
			swingweight: 321,
		},
		{
			name: "Pure Drive",
			brand: "BABOLAT",
			weight: 300,
			stringPattern: "PATTERN_16x19",
			stiffness: 71,
			balance: 320,
			headsize: 100,
			swingweight: 317,
		},
		{
			name: "Speed Pro",
			brand: "HEAD",
			weight: 310,
			stringPattern: "PATTERN_18x20",
			stiffness: 68,
			balance: 315,
			headsize: 98,
			swingweight: 318,
		},
		{
			name: "EZONE 98",
			brand: "YONEX",
			weight: 305,
			stringPattern: "PATTERN_16x19",
			stiffness: 64,
			balance: 315,
			headsize: 98,
			swingweight: 316,
		},
		{
			name: "Blade 98 v8",
			brand: "WILSON",
			weight: 305,
			stringPattern: "PATTERN_16x19",
			stiffness: 62,
			balance: 315,
			headsize: 98,
			swingweight: 318,
		},
		{
			name: "Pure Aero",
			brand: "BABOLAT",
			weight: 300,
			stringPattern: "PATTERN_16x19",
			stiffness: 69,
			balance: 320,
			headsize: 100,
			swingweight: 324,
		},
		{
			name: "Prestige Pro",
			brand: "HEAD",
			weight: 320,
			stringPattern: "PATTERN_16x19",
			stiffness: 65,
			balance: 305,
			headsize: 98,
			swingweight: 325,
		},
		{
			name: "VCORE Pro 97",
			brand: "YONEX",
			weight: 310,
			stringPattern: "PATTERN_16x19",
			stiffness: 64,
			balance: 315,
			headsize: 97,
			swingweight: 320,
		},
		{
			name: "Clash 100 v2",
			brand: "WILSON",
			weight: 295,
			stringPattern: "PATTERN_16x19",
			stiffness: 55,
			balance: 312,
			headsize: 100,
			swingweight: 312,
		},
		{
			name: "Pure Strike",
			brand: "BABOLAT",
			weight: 305,
			stringPattern: "PATTERN_16x19",
			stiffness: 66,
			balance: 315,
			headsize: 98,
			swingweight: 319,
		},
		{
			name: "Radical Pro",
			brand: "HEAD",
			weight: 315,
			stringPattern: "PATTERN_16x19",
			stiffness: 68,
			balance: 315,
			headsize: 98,
			swingweight: 321,
		},
		{
			name: "VCORE 98",
			brand: "YONEX",
			weight: 305,
			stringPattern: "PATTERN_16x19",
			stiffness: 64,
			balance: 315,
			headsize: 98,
			swingweight: 317,
		},
		{
			name: "Ultra Pro v4",
			brand: "WILSON",
			weight: 305,
			stringPattern: "PATTERN_16x19",
			stiffness: 65,
			balance: 315,
			headsize: 97,
			swingweight: 316,
		},
		{
			name: "Pure Control",
			brand: "BABOLAT",
			weight: 315,
			stringPattern: "PATTERN_18x20",
			stiffness: 63,
			balance: 310,
			headsize: 98,
			swingweight: 322,
		},
		{
			name: "Extreme Pro",
			brand: "HEAD",
			weight: 310,
			stringPattern: "PATTERN_16x19",
			stiffness: 68,
			balance: 320,
			headsize: 100,
			swingweight: 323,
		},
	];

	// String Data
	const strings = [
		{
			name: "NXT",
			brand: "WILSON",
			gauge: 16,
			shape: "Round",
			firmness: "Medium",
			durability: "Medium",
			color: "Natural",
		},
		{
			name: "RPM Blast",
			brand: "BABOLAT",
			gauge: 17,
			shape: "Octagonal",
			firmness: "Firm",
			durability: "High",
			color: "Black",
		},
		{
			name: "Hawk",
			brand: "HEAD",
			gauge: 17,
			shape: "Pentagonal",
			firmness: "Firm",
			durability: "High",
			color: "Grey",
		},
		{
			name: "Poly Tour Pro",
			brand: "YONEX",
			gauge: 16,
			shape: "Round",
			firmness: "Medium",
			durability: "High",
			color: "Blue",
		},
		{
			name: "Luxilon ALU Power",
			brand: "WILSON",
			gauge: 16,
			shape: "Octagonal",
			firmness: "Firm",
			durability: "High",
			color: "Silver",
		},
		{
			name: "VS Touch",
			brand: "BABOLAT",
			gauge: 16,
			shape: "Round",
			firmness: "Soft",
			durability: "Low",
			color: "Natural",
		},
		{
			name: "Lynx",
			brand: "HEAD",
			gauge: 16,
			shape: "Round",
			firmness: "Medium",
			durability: "Medium",
			color: "Bronze",
		},
		{
			name: "Poly Tour Strike",
			brand: "YONEX",
			gauge: 17,
			shape: "Round",
			firmness: "Firm",
			durability: "High",
			color: "Black",
		},
		{
			name: "Champions Choice",
			brand: "WILSON",
			gauge: 16,
			shape: "Round",
			firmness: "Medium",
			durability: "Medium",
			color: "Natural",
		},
		{
			name: "Pro Hurricane",
			brand: "BABOLAT",
			gauge: 17,
			shape: "Round",
			firmness: "Firm",
			durability: "High",
			color: "Yellow",
		},
		{
			name: "Velocity MLT",
			brand: "HEAD",
			gauge: 16,
			shape: "Round",
			firmness: "Medium",
			durability: "Medium",
			color: "White",
		},
		{
			name: "Poly Tour Air",
			brand: "YONEX",
			gauge: 16,
			shape: "Round",
			firmness: "Soft",
			durability: "Medium",
			color: "Clear",
		},
		{
			name: "Revolve",
			brand: "WILSON",
			gauge: 17,
			shape: "Pentagonal",
			firmness: "Firm",
			durability: "High",
			color: "Green",
		},
		{
			name: "Xcel",
			brand: "BABOLAT",
			gauge: 16,
			shape: "Round",
			firmness: "Soft",
			durability: "Low",
			color: "Natural",
		},
		{
			name: "Sonic Pro",
			brand: "HEAD",
			gauge: 17,
			shape: "Round",
			firmness: "Medium",
			durability: "High",
			color: "Black",
		},
	];

	// Questions Data
	const questions = [
		// RACKET Questions
		{
			category: "RACKET",
			questionNumber: 2,
			questionText: "당신은 파워를 추구하는가 안정성을 추구하는가?",
			answerOptions: {
				create: [{ option: "파워 추구" }, { option: "안정성 추구" }],
			},
		},
		{
			category: "RACKET",
			questionNumber: 3,
			questionText: "복식과 단식 중 어떤 것을 더 많이 하나요?",
			answerOptions: {
				create: [{ option: "복식" }, { option: "단식" }],
			},
		},
		{
			category: "RACKET",
			questionNumber: 4,
			questionText: "플랫성과 스핀성 포핸드 중 어떤 스타일인가요?",
			answerOptions: {
				create: [{ option: "플랫성" }, { option: "스핀성" }],
			},
		},
		{
			category: "RACKET",
			questionNumber: 6,
			questionText: "더 자신있는 플레이는 무엇인가요?",
			answerOptions: {
				create: [{ option: "발리" }, { option: "스트로크형" }],
			},
		},
		{
			category: "RACKET",
			questionNumber: 5,
			questionText: "서브에 자신이 있나요?",
			answerOptions: {
				create: [{ option: "예" }, { option: "아니오" }],
			},
		},
		{
			category: "RACKET",
			questionNumber: 1,
			questionText: "테니스 경력이 어느 정도 되시나요?",
			answerOptions: {
				create: [{ option: "3년 미만" }, { option: "3년 이상" }],
			},
		},
		// STRING Questions
		{
			category: "STRING",
			questionNumber: 1,
			questionText: "스트링의 내구성이 얼마나 중요한가요?",
			answerOptions: {
				create: [
					{ option: "매우 중요하다" },
					{ option: "중요하지 않다" },
				],
			},
		},
		{
			category: "STRING",
			questionNumber: 2,
			questionText: "스트링 텐션을 주로 어떻게 관리하시나요?",
			answerOptions: {
				create: [
					{ option: "높은 텐션 선호" },
					{ option: "낮은 텐션 선호" },
				],
			},
		},
		{
			category: "STRING",
			questionNumber: 3,
			questionText: "스핀을 많이 사용하는 플레이어인가요?",
			answerOptions: {
				create: [{ option: "예" }, { option: "아니오" }],
			},
		},
		{
			category: "STRING",
			questionNumber: 4,
			questionText: "스트링 교체 주기는 어떻게 되시나요?",
			answerOptions: {
				create: [{ option: "자주 교체" }, { option: "오래 사용" }],
			},
		},
		{
			category: "STRING",
			questionNumber: 5,
			questionText: "스트링에서 가장 중요하게 생각하는 특성은?",
			answerOptions: {
				create: [{ option: "파워" }, { option: "컨트롤" }],
			},
		},
	];

	// Insert data
	for (const racket of rackets) {
		await prisma.racketDB.create({
			data: racket,
		});
	}

	for (const string of strings) {
		await prisma.stringDB.create({
			data: string,
		});
	}

	for (const question of questions) {
		await prisma.question.create({
			data: question,
		});
	}

	console.log("Seeding completed successfully");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
