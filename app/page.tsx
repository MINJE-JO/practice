import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">hello</h1>
      <Button asChild>
        <Link href="/recommend">
          추천 페이지로 이동
        </Link>
      </Button>
    </div>
  );
}
