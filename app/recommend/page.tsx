import { Button } from "@/components/ui/button";

export default function RecommendPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-court-blue">
      <div className="relative p-8 rounded-lg border-4 border-court-line bg-accent-blue/10 backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-tennis-ball mb-4">추천 페이지</h1>
        <div className="flex gap-4 mb-4">
          <Button variant="default">
            ㅁㄴㅁㄴㄹㅁㄴㄹㄴㅁㄹ
          </Button>
          <Button variant="default">
            ㅁㄴㄹ
          </Button>
        </div>
        <p className="text-court-line">여기에 추천 컨텐츠를 추가하세요</p>
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-tennis-ball shadow-lg" />
      </div>
    </div>
  );
}
