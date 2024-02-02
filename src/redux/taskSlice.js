import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[]
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask:(state,action) =>{
        state.task.push({ task: action.payload, completed: false });
    },
  },
});

export const {addTask} = taskSlice.actions;


export const taskReducer = taskSlice.reducer;