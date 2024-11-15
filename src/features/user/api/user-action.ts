'use server';

import { userSchema } from '@/features/user/schemas/UserSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUser = async () => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                firstname: true,
                name: true,
                email: true
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

export const registerUser = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const parsedData = userSchema.safeParse(data);
    console.log(parsedData)
    if (!parsedData.success) {
        return { error: parsedData.error.format() };
    }

    const user = await prisma.user.create({
        data: {...parsedData.data}
    })
    console.log('Données validées:', parsedData.data);

    return { user };
};

export const deleteUser = async (id: string) => {
    prisma.user.delete({
        where: { id },
    });
};
