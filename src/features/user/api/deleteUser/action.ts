'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function deleteUser({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) {
  try {
    await prisma.user.update({
      where: { id },
      data: {
        active,
      },
    });
    revalidatePath('/');
  } catch (error) {
    console.log(error);
    throw new Error(`error: : ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}
