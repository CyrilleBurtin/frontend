import { getUser } from '@/features/user/api/user-action';
import UserCard from '@/features/user/components/UserCard/UserCard';
import {UserTypes} from "@/features/user/types/UserTypes";


const UserList = async () => {
    const userList = await getUser();
    console.log(userList);

    return (
        <>
            {
                <div className="flex flex-wrap gap-4">
                    {userList.length > 0 ? (
                        userList.map(({...user}: UserTypes) => (
                            <UserCard {...user} key={user.id} />
                        ))
                    ) : (
                        <p>No candidates available.</p>
                    )}
                </div>
            }
        </>
    );
};

export default UserList;
