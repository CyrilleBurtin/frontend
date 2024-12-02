import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserTypes } from '@/features/registration/types/userTypes';
import getUser from '@/features/user/api/getUsers/action';
import UserCard from '@/features/user/components/UserCard/UserCard';

const UserList = async () => {
  const userList = await getUser();

  return (
    <>
      {
        <div className="flex flex-wrap gap-4">
          <Card>
            <CardHeader>Hello</CardHeader>
            <CardTitle>Our users</CardTitle>
            <CardContent className="flex flex-wrap gap-4">
              {userList.length > 0 ? (
                userList.map((user: UserTypes) => (
                  <UserCard {...user} key={user.id} />
                ))
              ) : (
                <p>No candidates available.</p>
              )}
            </CardContent>
          </Card>
        </div>
      }
    </>
  );
};

export default UserList;
