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
import { registerUser } from '@/features/user/api/user-action';
import {
    type UserSchema,
    userSchema,
} from '@/features/user/schemas/UserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const UserRegistrationForm = () => {
    const form = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            firstname: '',
            name: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (formData: FormData) => {
        await registerUser(formData);
    };

    return (
        <Form {...form}>
            <form action={onSubmit} className="space-y-8">
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

                <Button type="submit">Submit</Button>
            </form>
        </Form>

        /* <div>
        <label>Job Applications</label>
        {formData.JobApplications.map((app, index) => (
          <input
            key={index}
            type="text"
            value={app}
            onChange={(e) => handleArrayChange("JobApplications", index, e.target.value)}
          />
        ))}
        <button type="button" onClick={() => addArrayField("JobApplications")}>
          Add Job Application
        </button>
      </div>

      <div>
        <label>Stack</label>
        {formData.stack.map((tech, index) => (
          <input
            key={index}
            type="text"
            value={tech}
            onChange={(e) => handleArrayChange("stack", index, e.target.value)}
          />
        ))}
        <button type="button" onClick={() => addArrayField("stack")}>
          Add Technology
        </button>
      </div> */
    );
};

export default UserRegistrationForm;