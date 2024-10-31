import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	// Racket Data Seeding
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
			name: "Radical Pro",
			brand: "HEAD",
			weight: 315,
			stringPattern: "PATTERN_16x19",
			stiffness: 68,
			balance: 315,
			headsize: 98,
			swingweight: 321,
		},
	];

	// String Data Seeding
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
			name: "Revolve",
			brand: "WILSON",
			gauge: 17,
			shape: "Pentagonal",
			firmness: "Firm",
			durability: "High",
			color: "Green",
		},
		{
			name: "Pro's Pro",
			brand: "HEAD",
			gauge: 16,
			shape: "Round",
			firmness: "Medium",
			durability: "Medium",
			color: "White",
		},
	];

	// Delete existing records
	await prisma.racketDB.deleteMany();
	await prisma.stringDB.deleteMany();

	// Insert rackets
	for (const racket of rackets) {
		await prisma.racketDB.create({
			data: racket,
		});
	}

	// Insert strings
	for (const string of strings) {
		await prisma.stringDB.create({
			data: string,
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
