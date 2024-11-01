import { RacketDB } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RacketListProps {
	rackets: RacketDB[];
	selectedRacket?: string;
	onSelect: (racketName: string) => void;
}

export function RacketList({
	rackets,
	selectedRacket,
	onSelect,
}: RacketListProps) {
	return (
		<ScrollArea className="h-[calc(100vh-8rem)] rounded-md border border-court-line">
			<div className="p-4 space-y-2">
				{rackets.map((racket) => (
					<Button
						key={racket.id}
						variant="ghost"
						className={cn(
							"w-full justify-start text-left font-normal",
							selectedRacket === racket.name &&
								"bg-accent-blue/20 text-tennis-ball"
						)}
						onClick={() => onSelect(racket.name)}
					>
						<div>
							<div className="text-sm font-semibold">
								{racket.name}
							</div>
							<div className="text-xs text-muted-foreground">
								{racket.brand}
							</div>
						</div>
					</Button>
				))}
			</div>
		</ScrollArea>
	);
}
