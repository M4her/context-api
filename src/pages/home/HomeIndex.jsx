import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";

const HomeIndex = () => {
  const count = useSelector((state) => state.counter.value);
 
  const dispatch = useDispatch();

 

  const handleDecrement = () => {
    dispatch(decrement(2));
  };

  return (
    <div>
      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <h1>Count = {count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default HomeIndex;
