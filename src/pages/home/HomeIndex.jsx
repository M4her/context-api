import React, { useContext } from 'react';
import {counterContext} from "../../context//CounterContext"
import { authContext } from '../../context/AuthContext'

const HomeIndex = () => {

  const {count, setCount} = useContext(counterContext)
  const {userInfo, setUserInfo} = useContext(authContext)



  const handleIncrement = ()=>{
    setCount((prev)=> prev+=3)
  }
  const handleDecrement = ()=>{
    setCount((prev)=>prev-=3)
  }

  return (
    <div>
      <h2>Logged User Name:{userInfo.name}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <h1>Count = {count}</h1>
      <button onClick={handleDecrement}>Decrement</button>

      
    </div>
  );
};

export default HomeIndex;
