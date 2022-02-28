import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import profile from "../public/profilePic.jpg";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div>
        <div className="relative h-24 w-24 mx-auto hidden md:inline-grid">
          <Image
            src={profile}
            layout="fill"
            objectFit="cover"
            className="rounded-full absolute"
          />
        </div>
        <div>
          {/* avatar */}{" "}
          <div className="h-48 w-48 relative lg:mx-auto  border-8 rounded-full border-pink-500">
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
