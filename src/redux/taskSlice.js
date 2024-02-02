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
    deleteTask:(state,action) =>{
        //Filter Logic
        // const newTask = state.task.filter(
        //   (task, index) => index !== action.payload
        // );
        // state.task = newTask

        //Splice Logic
        state.task.splice(action.payload, 1);
    },
    taskDone:(state, action)=>{
         const indexToUpdate = action.payload;
         state.task[indexToUpdate].completed = true;
    }
  },
});

export const { addTask, deleteTask , taskDone } = taskSlice.actions;


export const taskReducer = taskSlice.reducer;