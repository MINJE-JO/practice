import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

async function getRacketByName(name: string) {
	const racket = await prisma.racketDB.findFirst({
		where: {
			name: {
				equals: name
					.split("-")
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(" "),
				mode: "insensitive",
			},
		},
	});

	if (!racket) notFound();
	return racket;
}

export default async function RacketDetail({
	params,
}: {
	params: { name: string };
}) {
	const racket = await getRacketByName(params.name);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-3xl mx-auto">
				<div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg p-8">
					<h1 className="text-4xl font-bold text-tennis-ball mb-6">
						{racket.name}
					</h1>

					<div className="space-y-8">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									브랜드
								</h2>
								<p className="text-court-line">
									{racket.brand}
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									무게
								</h2>
								<p className="text-court-line">
									{racket.weight}g
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									밸런스
								</h2>
								<p className="text-court-line">
									{racket.balance}mm
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									스트링 패턴
								</h2>
								<p className="text-court-line">
									{racket.stringPattern.replace(
										"PATTERN_",
										""
									)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<Button
						variant="ghost"
						className="flex items-center gap-2 text-tennis-ball hover:text-tennis-ball/80"
						asChild
					>
						<Link href="/racket-box">
							<ArrowLeft className="w-4 h-4" />
							라켓 목록으로 돌아가기
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
