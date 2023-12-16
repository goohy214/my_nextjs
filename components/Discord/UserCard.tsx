import React, { useEffect } from "react";
import { signOut } from "next-auth/react";

const emptyUserImg = "https://cdn.discordapp.com/embed/avatars/3.png";

export const UserCard = ({
  name,
  email,
  image,
}: {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}) => {
  if (name) {
    return (
      <div className="mb-3">
        <div className="relative flex items-center justify-between">
          <div className="cursor-pointer">
            <div className="bg-white opacity-25 h-12 w-12 mr-3 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
              <img src={image ?? emptyUserImg} />
            </div>
          </div>
          <div className="text-white leading-normal mr-3"> {name}</div>

          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <img
      src={emptyUserImg}
      className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
    />
  );
};
