import { PrismaClient } from "@prisma/client";

declare global {
	// eslint-disable-next-line no-var
	var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	if (!global.cachedPrisma) {
		global.cachedPrisma = new PrismaClient();
	}
	prisma = global.cachedPrisma;
}

export const db = prisma;

const disconnect = async () => {
  await prisma.$disconnect();
};

// Handle disconnection when the Node.js process is about to exit
process.on('exit', async () => {
  await disconnect();
});

// Handle disconnection when receiving a termination signal (e.g., SIGINT, SIGTERM)
process.on('SIGINT', async () => {
  await disconnect();
  process.exit(0);
});
