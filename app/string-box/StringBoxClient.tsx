"use client";

import { useState, useCallback } from "react";
import { StringDB } from "@prisma/client";
import { StringList } from "@/components/string/StringList";
import { StringDetail } from "@/components/string/StringDetail";

interface StringBoxClientProps {
	strings: StringDB[];
}

export function StringBoxClient({ strings }: StringBoxClientProps) {
	const [selectedString, setSelectedString] = useState<string | undefined>();

	const currentString = strings.find(
		(string) => string.name === selectedString
	);

	const handleSelectString = useCallback((stringName: string) => {
		setSelectedString(stringName);
	}, []);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-tennis-ball mb-6">
					스트링 백과사전
				</h1>

				<div className="grid grid-cols-[350px_1fr] gap-8">
					<StringList
						strings={strings}
						selectedString={selectedString}
						onSelect={handleSelectString}
					/>

					<div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg">
						{currentString ? (
							<StringDetail string={currentString} />
						) : (
							<div className="flex items-center justify-center h-full text-court-line">
								스트링을 선택해주세요
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
