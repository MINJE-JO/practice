import Link from "next/link";
import { Button } from "@/components/ui/button";
import "@/lib/db";
export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-4">
			<h1 className="text-4xl font-bold">추천받기</h1>
			<div className="flex gap-4">
				<Button variant="outline" asChild>
					<Link href="/racket-recommend">라켓 추천 받기</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link href="/string-recommend">스트링 추천 받기</Link>
				</Button>
			</div>
		</div>
	);
}
