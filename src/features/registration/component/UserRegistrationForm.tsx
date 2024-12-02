'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { STACK } from '@/constants/stack';
import { registerUser } from '@/features/registration/api/registerNewUser/action';
import {
  type UserSchemaType,
  userSchema,
} from '@/features/user/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useActionState } from 'react';
import { useForm } from 'react-hook-form';

const initialState = {
  firstname: '',
  name: '',
  email: '',
  password: '',
  stack: [],
};

const UserRegistrationForm = () => {
  const form = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: initialState,
    mode: 'onChange',
  });

  const [data, action, isPending] = useActionState(registerUser, null);

  console.log({ data });
  return (
    <Form {...form}>
      <form action={action} className="space-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="firsname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ma stack</FormLabel>
              <FormControl>
                <ToggleGroup
                  type="multiple"
                  value={field.value}
                  onValueChange={(value) => {
                    console.log({ value });
                    field.onChange(value);
                  }}
                  onBlur={field.onBlur}
                  className="flex flex-wrap"
                >
                  {STACK.map((stack) => (
                    <ToggleGroupItem
                      className="flex grow w-24 border"
                      key={stack}
                      value={stack}
                    >
                      {stack}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Inscription
        </Button>
      </form>
    </Form>
  );
};

export default UserRegistrationForm;
