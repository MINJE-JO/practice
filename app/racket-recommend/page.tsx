import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";

// Server component to fetch questions
async function getRacketQuestions() {
	const questions = await prisma.question.findMany({
		where: {
			category: "RACKET",
		},
		include: {
			answerOptions: true,
		},
		orderBy: {
			questionNumber: "asc",
		},
	});
	return questions;
}

export default async function RacketRecommendPage({
	searchParams,
}: {
	searchParams: { step?: string; sessionId?: string };
}) {
	const questions = await getRacketQuestions();
	const currentStep = parseInt(searchParams.step || "1");
	const currentQuestion = questions.find(
		(q) => q.questionNumber === currentStep
	);

	if (!currentQuestion) {
		redirect("/racket-recommend/racket-result");
	}

	const progress = (currentStep / questions.length) * 100;

	async function saveAnswer(formData: FormData) {
		"use server";

		const questionId = Number(formData.get("questionId"));
		const selectedOptionId = Number(formData.get("answerOptionId"));
		const sessionId =
			searchParams.sessionId || Math.random().toString(36).substring(7);

		if (isNaN(questionId) || isNaN(selectedOptionId)) {
			throw new Error("Invalid input values");
		}

		await prisma.userAnswer.create({
			data: {
				sessionId,
				questionId,
				answerOptionId: selectedOptionId,
			},
		});

		if (currentStep >= questions.length) {
			redirect(`/racket-recommend/racket-result?session=${sessionId}`);
		} else {
			redirect(
				`/racket-recommend?step=${
					currentStep + 1
				}&sessionId=${sessionId}`
			);
		}
	}

	return (
		<div className="container mx-auto py-8 max-w-2xl">
			<div className="mb-8">
				<Progress value={progress} className="mb-2" />
				<p className="text-sm text-court-line text-right">
					{currentStep} / {questions.length}
				</p>
			</div>

			<Card className="border-4 border-court-line">
				<CardHeader>
					<CardTitle className="text-2xl">
						{currentQuestion.questionText}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form action={saveAnswer} className="space-y-4">
						<input
							type="hidden"
							name="questionId"
							value={currentQuestion.id}
						/>
						<input
							type="hidden"
							name="sessionId"
							value={searchParams.sessionId || ""}
						/>
						<div className="grid grid-cols-1 gap-4">
							{currentQuestion.answerOptions.map((option) => (
								<Button
									key={option.id}
									type="submit"
									name="answerOptionId"
									value={option.id}
									variant="outline"
									className="h-16 text-lg"
								>
									{option.option}
								</Button>
							))}
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
