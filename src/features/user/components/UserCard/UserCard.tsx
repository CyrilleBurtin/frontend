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
import { UserTypes } from '@/features/user/types/UserTypes';
import { isoToDate } from '@/lib/utils/date';

const UserCard = ({
  firstname,
  name,
  email,
  createdAt,
  id,
  active,
}: UserTypes) => {
  const handleClick = async (id: string, active: boolean) => {
    await deleteUser({ id, active });
  };

  return (
    <Card key={email}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {firstname} {name}
          <div
            className={`rounded-full h-2 w-2  ${active ? 'bg-emerald-500' : 'bg-red-600'}`}
          ></div>
        </CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        {createdAt ? (
          <CardFooter>
            <CardDescription>`Crée le ${isoToDate(createdAt)}`</CardDescription>
          </CardFooter>
        ) : null}
        <Button onClick={() => handleClick(id, !active)}>
          {active ? 'désactivation' : 'activation'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
