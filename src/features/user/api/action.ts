import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async () => {
  try {
    const users = prisma.user.findMany();
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  } finally {
    await prisma.$disconnect();
  }
};
