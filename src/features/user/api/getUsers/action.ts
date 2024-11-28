'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userInfoFilter = {
  id: true,
  firstname: true,
  name: true,
  email: true,
  stack: true,
  active: true,
};

export default async function getUser() {
  try {
    return await prisma.user.findMany({
      where: {
        active: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
      select: userInfoFilter,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  } finally {
    await prisma.$disconnect();
  }
}
