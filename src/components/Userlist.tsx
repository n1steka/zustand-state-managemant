// UserList.tsx
import useStore from "@/state/state";
import Image from "next/image";
import React, { useEffect } from "react";
interface User {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  avatar: string;
}

const UserList: React.FC = () => {
  const { users, fetchUsers } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers();
    };
    fetchData(); // Fetch users when the component mounts
  }, [fetchUsers]);

  return (
    <div>
      <div className="flex flex-wrap  justify-center ">
        {users.map((user: User) => (
          <div
            className="p-5 m-4  w-auto h-auto rounded-md shadow-lg  "
            key={user.id}
          >
            <div className="flex">
              <div className="">
                <div className="m-2">name : {user.last_name}</div>
                <div className="m-2">email : {user.email}</div>
              </div>
              <div>
                <img className="w-[200px] h-[150px]" src={user.avatar} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
