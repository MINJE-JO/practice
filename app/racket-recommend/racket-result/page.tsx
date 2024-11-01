import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { calculateRacketScores } from "@/lib/racket-calculator";

export default async function RacketResultPage({
	searchParams,
}: {
	searchParams: { session?: string };
}) {
	const sessionId = searchParams.session;

	if (!sessionId) {
		redirect("/racket-recommend");
	}

	// 해당 세션의 모든 답변 가져오기
	const userAnswers = await prisma.userAnswer.findMany({
		where: {
			sessionId: sessionId,
		},
		include: {
			Question: true,
			AnswerOption: true,
		},
		orderBy: {
			Question: {
				questionNumber: "asc",
			},
		},
	});

	// 사용자 응답에 기반하여 라켓 추천 로직 구현
	const recommendedRacket = await prisma.racketDB.findFirst({
		where: {
			// 여기에 사용자 응답에 기반한 필터 조건 추가
		},
	});

	const racketScores = recommendedRacket
		? calculateRacketScores(recommendedRacket)
		: null;

	return (
		<div className="container mx-auto py-8 max-w-2xl">
			<Card className="border-4 border-court-line">
				<CardHeader>
					<CardTitle className="text-2xl">당신의 응답 결과</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<p className="text-sm text-gray-500">
							세션 ID: {sessionId}
						</p>
						{userAnswers.map((answer) => (
							<div key={answer.id} className="border-b pb-4">
								<p className="font-medium">
									{answer.Question.questionText}
								</p>
								<p className="text-court-line">
									선택: {answer.AnswerOption.option}
								</p>
							</div>
						))}
						{racketScores && (
							<div className="mt-6 space-y-2">
								<h3 className="font-semibold">
									라켓 특성 점수
								</h3>
								<p>파워: {racketScores.power}</p>
								<p>스핀: {racketScores.spin}</p>
								<p>컨트롤: {racketScores.control}</p>
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
