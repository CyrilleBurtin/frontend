'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { deleteUser } from '@/features/user/api/user-action';
import { isoToDate } from '@/lib/utils/date';
import {UserTypes} from "@/features/user/types/UserTypes";

const UserCard = ({firstname,name,email,createdAt,id}: UserTypes) => {

  const handleClick = async (id: string) => {
        await deleteUser(id);
    };

    return (
        <Card key={email}>
            <CardHeader>
                <CardTitle>

                    {firstname} {name}
                </CardTitle>
                <CardDescription>{email}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
                  {createdAt ?
            <CardFooter>
                <CardDescription>
                    `Crée le ${isoToDate(createdAt)}`
                </CardDescription>
            </CardFooter>
                    : null
                  }
            <Button onClick={() => handleClick(id)}>Delete User</Button>
        </Card>
    );
};

export default UserCard;



