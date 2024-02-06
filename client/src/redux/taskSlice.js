import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import Axios

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await axios.get("http://localhost:4390/api/todo/getall");
  console.log("fetchTodos ~ response:", response);
  return response.data;
});

const initialState = {
  isLoading: false,
  task: [],
  isError: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;

      console.log("pending");
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.task = action.payload;
      console.log("oay");

      return state;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push({ task: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      //Filter Logic
      // const newTask = state.task.filter(
      //   (task, index) => index !== action.payload
      // );
      // state.task = newTask

      //Splice Logic
      state.task.splice(action.payload, 1);
    },
    taskDone: (state, action) => {
      const indexToUpdate = action.payload;
      state.task[indexToUpdate].completed = true;
    },
    editTask: (state, action) => {
      const { indexToUpdate, updatedTask } = action.payload;
      state.task[indexToUpdate].task = updatedTask;
    },
  },
});

export const { addTask, deleteTask, taskDone, editTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
