import Link from "next/link";
import { prisma } from "@/lib/db";

async function getStrings() {
	const strings = await prisma.stringDB.findMany({
		orderBy: {
			brand: "asc",
		},
	});
	return strings;
}

export default async function StringEncyclopedia() {
	const strings = await getStrings();

	// 브랜드별로 스트링 그룹화
	const stringsByBrand = strings.reduce((acc, string) => {
		if (!acc[string.brand]) {
			acc[string.brand] = [];
		}
		acc[string.brand].push(string);
		return acc;
	}, {} as Record<string, typeof strings>);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-tennis-ball mb-6">
					스트링 백과사전
				</h1>

				<div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg p-6">
					<div className="space-y-8">
						{Object.entries(stringsByBrand).map(
							([brand, brandStrings]) => (
								<div key={brand} className="space-y-4">
									<h2 className="text-2xl font-bold text-tennis-ball">
										{brand}
									</h2>
									<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
										{brandStrings.map((string) => (
											<Link
												key={string.id}
												href={`/string-box/${encodeURIComponent(
													string.name
														.toLowerCase()
														.replace(/ /g, "-")
												)}`}
												className="block p-4 bg-court-blue/50 rounded-lg border border-court-line hover:border-tennis-ball transition-colors"
											>
												<h3 className="text-tennis-ball text-xl font-bold mb-2">
													{string.name}
												</h3>
												<div className="space-y-1 text-court-line">
													<p>
														게이지: {string.gauge}
													</p>
													<p>형태: {string.shape}</p>
													<p>
														강도: {string.firmness}
													</p>
													<p>
														내구성:{" "}
														{string.durability}
													</p>
													<p>색상: {string.color}</p>
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
