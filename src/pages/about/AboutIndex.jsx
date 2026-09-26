import React, { useContext } from 'react';
import {counterContext} from "../../context/CounterContext"


const AboutIndex = () => {
 const {count, setCount, username} = useContext(counterContext)
  return (
    <div>
      <h3>UserName -- {username && username}</h3>
      <button>Increase</button>
      <h1>Count = {count} </h1>
      <button>Decrease</button>
    </div>
  );
};

export default AboutIndex;
