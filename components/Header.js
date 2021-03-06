import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import profile from "../public/profilePic.jpg";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 shadow-sm border-b-2 border-pink-700 bg-black">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src={profile}
            layout="fill"
            objectFit="cover"
            className="rounded-full "
          />
        </div>
        <div className="text-left lg:text-center col-span-4">
          {/* avatar */}{" "}
          <div className="relative h-48 w-48  lg:mx-auto  border-8 rounded-full border-pink-500">
            <Avatar logoutOnPress />
          </div>
          {/* welcome message */}
          <h1 className="text-3xl">Welcome to Gerv Metaverse</h1>
          {/* username */}
          <h2 className="text-5xl font-bold truncate">
            {user.get("username")}
          </h2>
          {/* change username and pic */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
