import Link from "next/link";
import { prisma } from "@/lib/db";

async function getRackets() {
	const rackets = await prisma.racketDB.findMany({
		orderBy: {
			brand: "asc",
		},
	});
	return rackets;
}

export default async function RacketEncyclopedia() {
	const rackets = await getRackets();

	// 브랜드별로 라켓 그룹화
	const racketsByBrand = rackets.reduce((acc, racket) => {
		if (!acc[racket.brand]) {
			acc[racket.brand] = [];
		}
		acc[racket.brand].push(racket);
		return acc;
	}, {} as Record<string, typeof rackets>);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-tennis-ball mb-6">
					라켓 백과사전
				</h1>

				<div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg p-6">
					<div className="space-y-8">
						{Object.entries(racketsByBrand).map(
							([brand, brandRackets]) => (
								<div key={brand} className="space-y-4">
									<h2 className="text-2xl font-bold text-tennis-ball">
										{brand}
									</h2>
									<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
										{brandRackets.map((racket) => (
											<Link
												key={racket.id}
												href={`/racket-box/${encodeURIComponent(
													racket.name
														.toLowerCase()
														.replace(/ /g, "-")
												)}`}
												className="block p-4 bg-court-blue/50 rounded-lg border border-court-line hover:border-tennis-ball transition-colors"
											>
												<h3 className="text-tennis-ball text-xl font-bold mb-2">
													{racket.name}
												</h3>
												<div className="space-y-1 text-court-line">
													<p>
														무게: {racket.weight}g
													</p>
													<p>
														밸런스: {racket.balance}
														mm
													</p>
													<p>
														스트링 패턴:{" "}
														{racket.stringPattern.replace(
															"PATTERN_",
															""
														)}
													</p>
												</div>
											</Link>
										))}
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
