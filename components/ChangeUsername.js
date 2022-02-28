import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userErroe, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter your new username :(current ${user.get("username")})`
    );
    if (!username) return;
    setUserData({ username });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button className="hover:text-pink-700" onClick={setUsername}>
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
