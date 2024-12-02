'use server';

import { userSchema } from '@/features/user/schemas/userSchema';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function registerUser(_: unknown, formData: FormData) {
  const validatedFields = userSchema.safeParse({
    name: formData.get('name')?.toString(),
    firstname: formData.get('firstname')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    stack: formData.getAll('stack'),
  });

  if (!validatedFields.success) {
    throw new Error('Invalid form data');
  }

  try {
    const userData = await prisma.user.create({
      data: validatedFields.data,
    });
    revalidatePath('/');
    return { userData };
  } catch (error) {
    console.error(error);
    throw new Error(`Error: ${error instanceof Error ? error.message : error}`);
  } finally {
    await prisma.$disconnect();
  }
}
