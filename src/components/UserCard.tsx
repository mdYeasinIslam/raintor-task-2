import Image from "next/image";
import React from "react";

type UserProps = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
    university: string;
    company: { title: string };
  };
};

const UserCard = ({ user }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <div className="flex gap-4">
        {user?.image && (
          <Image
            src={`${user?.image}`}
            alt={`${user?.firstName} ${user?.lastName}`}
            width={500}
            height={500}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="font-bold text-lg">
            {user.firstName} {user.lastName}
          </h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.university}</p>
          <p className="text-sm text-gray-500">{user.company.title}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
