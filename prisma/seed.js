import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const stringQuestions = [
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

	// Insert all string questions
	for (const question of stringQuestions) {
		await prisma.question.create({
			data: question,
		});
	}

	console.log("String questions added successfully");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
