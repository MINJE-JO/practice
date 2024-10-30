import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Todo 테이블의 모든 레코드를 조회
	const todos = await prisma.todo.findMany({
		take: 10,
	});
	console.log("Fetched Todos:", todos);

	// 테스트를 위한 새로운 Todo 생성
	const newTodo = await prisma.todo.create({
		data: {
			title: "Test Todo Item",
		},
	});
	console.log("Created new Todo:", newTodo);

	// 다시 모든 Todo 조회하여 생성된 항목 확인
	const updatedTodos = await prisma.todo.findMany({
		take: 10,
	});
	console.log("Updated Todos:", updatedTodos);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error("Error:", e);
		await prisma.$disconnect();
		process.exit(1);
	});

export default prisma;
