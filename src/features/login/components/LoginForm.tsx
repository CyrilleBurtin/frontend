'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  type LoginSchemaType,
  loginSchema,
} from '@/features/login/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const loginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (formData: LoginSchemaType) => {
    await userLogin(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name={email}
          control={form.control}
          render={({ field }) => {
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeHolder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>;
          }}
        />
      </form>
    </Form>
  );
};

export default loginForm;
