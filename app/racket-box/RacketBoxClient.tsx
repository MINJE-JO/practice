"use client";

import { useState, useCallback } from "react";
import { RacketDB } from "@prisma/client";
import { RacketList } from "@/components/racket/RacketList";
import { RacketDetail } from "@/components/racket/RacketDetail";

interface RacketBoxClientProps {
	rackets: RacketDB[];
}

export function RacketBoxClient({ rackets }: RacketBoxClientProps) {
	const [selectedRacket, setSelectedRacket] = useState<string | undefined>();

	const currentRacket = rackets.find(
		(racket) => racket.name === selectedRacket
	);

	const handleSelectRacket = useCallback((racketName: string) => {
		setSelectedRacket(racketName);
	}, []);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-tennis-ball mb-6">
					라켓 백과사전
				</h1>

				<div className="grid grid-cols-[350px_1fr] gap-8">
					<RacketList
						rackets={rackets}
						selectedRacket={selectedRacket}
						onSelect={handleSelectRacket}
					/>

					<div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg">
						{currentRacket ? (
							<RacketDetail racket={currentRacket} />
						) : (
							<div className="flex items-center justify-center h-full text-court-line">
								라켓을 선택해주세요
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
