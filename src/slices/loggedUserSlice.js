import { createSlice } from "@reduxjs/toolkit";

const data = {
    name: "Maher",
    age:20,
    address: "Gazipur"
}

localStorage.setItem("loggedUser", JSON.stringify(data))

const user = localStorage.getItem("loggedUser")


const initialState = { value: JSON.parse(user) };

export const loggedUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, ) => {
      state.value
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserInfo } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
