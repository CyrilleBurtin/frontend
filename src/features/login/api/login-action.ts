'use server';

import {
  type LoginSchemaType,
  loginSchema,
} from '@/features/login/schemas/loginSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userLogin = async (formData: LoginSchemaType) => {
  const parsedData = loginSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  const { email, password } = parsedData.data;

  const logged = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });

  console.log(logged);
};

export default userLogin;
