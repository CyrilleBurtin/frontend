import { z } from 'zod';

const messages = {
    toShort: 'Username must be at least 2 characters.',
    toLong: 'Username must be max 20 characters.',
};

export const userSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: messages.toShort })
        .max(20, { message: messages.toLong }),
    name: z
        .string()
        .min(2, { message: messages.toShort })
        .max(20, { message: messages.toLong }),
    email: z.string().email(),
    password: z
        .string()
        .min(12)
        .regex(new RegExp('.*[A-Z].*'))
        .regex(new RegExp('.*[a-z].*'))
        .regex(new RegExp('.*[0-9].*'))
        .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*')),
});

export type UserSchema = z.infer<typeof userSchema>;
