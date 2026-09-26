import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";
const AboutIndex = () => {
  const count = useSelector((state) => state.counter.value);
  const loggedUser = useSelector((s) => s.loggedUser.value);
  const dispatch = useDispatch();

  console.log(loggedUser);

  return (
    <div>
      <h1>Info from loggedUserSlice</h1>
      <h2> Name : {loggedUser.name}</h2>
       <h2> Age : {loggedUser.age}</h2>
        <h2> Address : {loggedUser.address}</h2>

      <br></br>

      <br></br>

      <button onClick={() => dispatch(increment(5))}>Increase</button>
      <h1>Count = {count} </h1>
      <button onClick={() => dispatch(decrement(5))}>Decrease</button>
    </div>
  );
};

export default AboutIndex;
