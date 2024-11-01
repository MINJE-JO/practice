import { RacketDB } from "@prisma/client";

interface RacketDetailProps {
	racket: RacketDB;
}

export function RacketDetail({ racket }: RacketDetailProps) {
	return (
		<div className="p-6 space-y-6">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold text-tennis-ball">
					{racket.name}
				</h2>
				<p className="text-lg text-court-line">{racket.brand}</p>
			</div>

			<div className="grid grid-cols-2 gap-6">
				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						무게
					</h3>
					<p className="text-court-line">{racket.weight}g</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						밸런스
					</h3>
					<p className="text-court-line">{racket.balance}mm</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						스트링 패턴
					</h3>
					<p className="text-court-line">
						{racket.stringPattern.replace("PATTERN_", "")}
					</p>
				</div>
			</div>
		</div>
	);
}
