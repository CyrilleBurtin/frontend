'use server';

import { userSchema } from '@/features/user/schemas/userSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function editUser(formData: FormData) {
  const validatedFields = userSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: validatedFields.error.format() };
  }
  try {
    const user = await prisma.user.create({
      data: { ...validatedFields.data },
    });

    console.log('Données validées:', validatedFields.data);

    return { user };
  } catch (error) {
    console.log(error);
    throw new Error(`error: : ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}
