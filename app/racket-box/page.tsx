import { prisma } from "@/lib/db";
import { RacketBoxClient } from "./RacketBoxClient";

async function getRackets() {
	const rackets = await prisma.racketDB.findMany({
		orderBy: {
			brand: "asc",
		},
	});
	return rackets;
}
export default async function RacketBox() {
	const rackets = await getRackets();

	return <RacketBoxClient rackets={rackets} />;
}
