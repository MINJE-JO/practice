import { prisma } from "@/lib/db";
import { StringBoxClient } from "./StringBoxClient";

async function getStrings() {
	const strings = await prisma.stringDB.findMany({
		orderBy: {
			brand: "asc",
		},
	});
	return strings;
}

export default async function StringBox() {
	const strings = await getStrings();

	return <StringBoxClient strings={strings} />;
}
