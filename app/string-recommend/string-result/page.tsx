import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

async function getAnswersWithQuestions(sessionId: string) {
	const answers = await prisma.userAnswer.findMany({
		where: {
			sessionId,
		},
		include: {
			Question: {
				include: {
					answerOptions: true,
				},
			},
			AnswerOption: true,
		},
		orderBy: {
			Question: {
				questionNumber: "asc",
			},
		},
	});

	if (!answers.length) notFound();
	return answers;
}

export default async function StringResultPage({
	searchParams,
}: {
	searchParams: { session: string };
}) {
	const answers = await getAnswersWithQuestions(searchParams.session);

	return (
		<div className="container mx-auto py-8 max-w-3xl">
			<div className="flex items-center gap-4 mb-8">
				<Button variant="ghost" asChild>
					<Link href="/" className="flex items-center gap-2">
						<ArrowLeft size={20} />
						처음으로
					</Link>
				</Button>
				<h1 className="text-4xl font-bold text-tennis-ball">
					스트링 추천 결과
				</h1>
			</div>

			<div className="grid gap-6">
				{answers.map((answer) => (
					<Card
						key={answer.id}
						className="border-2 border-court-line"
					>
						<CardHeader>
							<CardTitle className="text-xl">
								Q{answer.Question.questionNumber}.{" "}
								{answer.Question.questionText}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-2 gap-4">
								{answer.Question.answerOptions.map((option) => (
									<Button
										key={option.id}
										variant={
											option.id === answer.answerOptionId
												? "default"
												: "outline"
										}
										className="h-12"
										disabled
									>
										{option.option}
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
