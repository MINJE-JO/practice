import { prisma } from "@/lib/db";
import { calculateRacketScores } from "@/lib/racket-calculator";

export default async function RacketScoresTablePage() {
	const rackets = await prisma.racketDB.findMany({
		orderBy: { brand: "asc" },
	});

	const racketsWithScores = rackets.map((racket) => ({
		...racket,
		scores: calculateRacketScores(racket),
	}));

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6">라켓 점수 테이블</h1>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white border border-gray-300">
					<thead>
						<tr className="bg-gray-100">
							<th className="sticky left-0 bg-gray-100 px-4 py-2 border-b">
								브랜드
							</th>
							<th className="sticky left-[120px] bg-gray-100 px-4 py-2 border-b">
								라켓명
							</th>
							<th className="px-4 py-2 border-b text-center">
								무게(g)
							</th>
							<th className="px-4 py-2 border-b text-center">
								밸런스(mm)
							</th>
							<th className="px-4 py-2 border-b text-center">
								헤드사이즈
							</th>
							<th className="px-4 py-2 border-b text-center">
								강성
							</th>
							<th className="px-4 py-2 border-b text-center">
								스트링패턴
							</th>
							<th className="px-4 py-2 border-b text-center bg-red-50">
								파워
							</th>
							<th className="px-4 py-2 border-b text-center bg-green-50">
								스핀
							</th>
							<th className="px-4 py-2 border-b text-center bg-blue-50">
								컨트롤
							</th>
						</tr>
					</thead>
					<tbody>
						{racketsWithScores.map((racket) => (
							<tr key={racket.id} className="hover:bg-gray-50">
								<td className="sticky left-0 bg-white px-4 py-2 border-b">
									{racket.brand}
								</td>
								<td className="sticky left-[120px] bg-white px-4 py-2 border-b">
									{racket.name}
								</td>
								<td className="px-4 py-2 border-b text-center">
									{racket.weight}
								</td>
								<td className="px-4 py-2 border-b text-center">
									{racket.balance}
								</td>
								<td className="px-4 py-2 border-b text-center">
									{racket.headsize}
								</td>
								<td className="px-4 py-2 border-b text-center">
									{racket.stiffness}
								</td>
								<td className="px-4 py-2 border-b text-center">
									{racket.stringPattern.replace(
										"PATTERN_",
										""
									)}
								</td>
								<td className="px-4 py-2 border-b text-center">
									<div className="flex items-center justify-center">
										<div
											className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center font-semibold"
											title={`파워 점수: ${racket.scores.power}`}
										>
											{racket.scores.power}
										</div>
									</div>
								</td>
								<td className="px-4 py-2 border-b text-center">
									<div className="flex items-center justify-center">
										<div
											className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center font-semibold"
											title={`스핀 점수: ${racket.scores.spin}`}
										>
											{racket.scores.spin}
										</div>
									</div>
								</td>
								<td className="px-4 py-2 border-b text-center">
									<div className="flex items-center justify-center">
										<div
											className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold"
											title={`컨트롤 점수: ${racket.scores.control}`}
										>
											{racket.scores.control}
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
