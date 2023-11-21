import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const SALT_ROUND: number = Number(process.env.SALT_ROUND);

const prisma = new PrismaClient();

const admins = [
	{
		admin_id: "grpadmin",
		password: bcrypt.hashSync("100110", SALT_ROUND),
	},
];

async function main() {
	await prisma.tbl_admin.createMany({
		data: admins,
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
