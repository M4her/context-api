import React, { useContext } from "react";
import { counterContext } from "../../context/CounterContext";
import { authContext } from "../../context/AuthContext";

const AboutIndex = () => {
  const { count, setCount, username } = useContext(counterContext);
  const { userInfo, setUserInfo } = useContext(authContext);
  return (
    <div>
      <h2>Logged User Address: {userInfo.address}</h2>
      <h3>UserName -- {username && username}</h3>
      <button onClick={() => setCount((prev) => (prev += 5))}>Increase</button>
      <h1>Count = {count} </h1>
      <button onClick={() => setCount((prev) => (prev -= 5))}>Decrease</button>
    </div>
  );
};

export default AboutIndex;
