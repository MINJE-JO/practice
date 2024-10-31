import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.racket.deleteMany();

	await prisma.racket.createMany({
		data: [
			{
				name: "Pure Drive",
				brand: "BABOLAT",
				weight: 300,
				stringPattern: "PATTERN_16x19",
				balance: 320,
			},
			{
				name: "Pro Staff 97",
				brand: "WILSON",
				weight: 315,
				stringPattern: "PATTERN_16x19",
				balance: 315,
			},
			{
				name: "VCORE Pro 97",
				brand: "YONEX",
				weight: 310,
				stringPattern: "PATTERN_16x19",
				balance: 310,
			},
			{
				name: "Speed Pro",
				brand: "HEAD",
				weight: 305,
				stringPattern: "PATTERN_18x20",
				balance: 315,
			},
			{
				name: "Blade 98",
				brand: "WILSON",
				weight: 305,
				stringPattern: "PATTERN_16x19",
				balance: 315,
			},
		],
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
