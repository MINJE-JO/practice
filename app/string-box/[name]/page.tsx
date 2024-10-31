import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

async function getStringByName(name: string) {
	const string = await prisma.stringDB.findFirst({
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

	if (!string) notFound();
	return string;
}

export default async function StringDetail({
	params,
}: {
	params: { name: string };
}) {
	const string = await getStringByName(params.name);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-3xl mx-auto">
				<div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg p-8">
					<h1 className="text-4xl font-bold text-tennis-ball mb-6">
						{string.name}
					</h1>

					<div className="space-y-8">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									브랜드
								</h2>
								<p className="text-court-line">
									{string.brand}
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									게이지
								</h2>
								<p className="text-court-line">
									{string.gauge}
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									형태
								</h2>
								<p className="text-court-line">
									{string.shape}
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									강도
								</h2>
								<p className="text-court-line">
									{string.firmness}
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									내구성
								</h2>
								<p className="text-court-line">
									{string.durability}
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-semibold text-tennis-ball">
									색상
								</h2>
								<p className="text-court-line">
									{string.color}
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
						<Link href="/string-box">
							<ArrowLeft className="w-4 h-4" />
							스트링 목록으로 돌아가기
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
