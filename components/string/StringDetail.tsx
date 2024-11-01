import { StringDB } from "@prisma/client";

interface StringDetailProps {
	string: StringDB;
}

export function StringDetail({ string }: StringDetailProps) {
	return (
		<div className="p-6 space-y-6">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold text-tennis-ball">
					{string.name}
				</h2>
				<p className="text-lg text-court-line">{string.brand}</p>
			</div>

			<div className="grid grid-cols-2 gap-6">
				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						게이지
					</h3>
					<p className="text-court-line">{string.gauge}</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						형태
					</h3>
					<p className="text-court-line">{string.shape}</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						강도
					</h3>
					<p className="text-court-line">{string.firmness}</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						내구성
					</h3>
					<p className="text-court-line">{string.durability}</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-tennis-ball">
						색상
					</h3>
					<p className="text-court-line">{string.color}</p>
				</div>
			</div>
		</div>
	);
}
