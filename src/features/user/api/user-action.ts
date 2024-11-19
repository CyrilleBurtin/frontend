'use server';

import { UserSchemaType, userSchema } from '@/features/user/schemas/UserSchema';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getUser = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        active: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
      select: {
        id: true,
        firstname: true,
        name: true,
        email: true,
        stack: true,
        active: true,
      },
    });

    console.log(users);

    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  } finally {
    await prisma.$disconnect();
  }
};

export const registerUser = async (formData: UserSchemaType) => {
  const parsedData = userSchema.safeParse(formData);

  if (!parsedData.success) {
    return { error: parsedData.error.format() };
  }

  const user = await prisma.user.create({
    data: { ...parsedData.data },
  });

  console.log('Données validées:', parsedData.data);

  return { user };
};

export const deleteUser = async ({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) => {
  await prisma.user.update({
    where: { id },
    data: {
      active,
    },
  });
  revalidatePath('/');
};
