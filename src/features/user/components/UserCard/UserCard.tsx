'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserTypes } from '@/features/registration/types/userTypes';
import deleteUser from '@/features/user/api/deleteUser/action';
import { isoToDate } from '@/lib/utils/date/date';

const UserCard = ({
  firstname,
  name,
  email,
  createdAt,
  id,
  active,
  stack = [],
}: UserTypes) => {
  const handleClick = async (id: string, active: boolean) => {
    await deleteUser({ id, active });
  };

  return (
    <div className="flex flex-col grow w-72">
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
          {stack.map((framework) => (
            <Badge variant="outline" key={framework}>
              {framework}
            </Badge>
          ))}
        </CardContent>
        <CardContent>
          {createdAt ? (
            <CardFooter>
              <CardDescription>
                `Crée le ${isoToDate(createdAt)}`
              </CardDescription>
            </CardFooter>
          ) : null}
          <Button onClick={() => handleClick(id, !active)}>
            {active ? 'désactivation' : 'activation'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
