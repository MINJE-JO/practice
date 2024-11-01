import { StringDB } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StringListProps {
	strings: StringDB[];
	selectedString?: string;
	onSelect: (stringName: string) => void;
}

export function StringList({
	strings,
	selectedString,
	onSelect,
}: StringListProps) {
	return (
		<ScrollArea className="h-[calc(100vh-8rem)] rounded-md border border-court-line">
			<div className="p-4 space-y-2">
				{strings.map((string) => (
					<Button
						key={string.id}
						variant="ghost"
						className={cn(
							"w-full justify-start text-left font-normal",
							selectedString === string.name &&
								"bg-accent-blue/20 text-tennis-ball"
						)}
						onClick={() => onSelect(string.name)}
					>
						<div>
							<div className="text-sm font-semibold">
								{string.name}
							</div>
							<div className="text-xs text-muted-foreground">
								{string.brand}
							</div>
						</div>
					</Button>
				))}
			</div>
		</ScrollArea>
	);
}
