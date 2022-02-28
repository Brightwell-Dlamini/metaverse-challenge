import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75 "
      onClick={() => logoutOnPress && logout()}
      layout="fill"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("userame")
      }.svg`}
    />
  );
}

export default Avatar;
