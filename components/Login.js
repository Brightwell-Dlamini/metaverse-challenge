import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import profile from "../public/profilePic.jpg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative ">
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4 ">
        {/* logo image */}
        <Image
          src={profile}
          height={200}
          width={200}
          className="transition duration-200 ease-out hover:rotate-45 object-cover rounded-full"
          alt="profileLogo"
        />

        {/* login button */}
        <button
          className="bg-yellow-500 p-5 font-bold animate-pulse rounded-lg"
          onClick={authenticate}
        >
          Login to Mr Gerv Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        {/* background image */}{" "}
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
      </div>
    </div>
  );
}

export default Login;
