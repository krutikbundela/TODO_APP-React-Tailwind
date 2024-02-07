import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import Axios

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await axios.get("http://localhost:4390/api/todo/getall");
  return response.data;
});

export const createTodo = createAsyncThunk("createTask", async (task) =>{
  const response = await axios.post("http://localhost:4390/api/todo/create",{
    task
  });
  return response.data
});
export const deleteTodo = createAsyncThunk("deleteTodo", async (id) =>{
  console.log(id);
  const response = await axios.delete("http://localhost:4390/api/todo/delete",{
    data:  {id},
  });
  return response.data
});

export const completeTodo = createAsyncThunk("completeTodo", async (id) =>{
  console.log(id);
  const response = await axios.post("http://localhost:4390/api/todo/complete",{id});
  return response.data
});

export const editTodo = createAsyncThunk("editTodo", async (data) =>{
  const response = await axios.post("http://localhost:4390/api/todo/edit",data);
  return response.data
});

const initialState = {
  isLoading: false,
  task: [],
  data:null,
  isError: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.task = action.payload;

      return state;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
    //====================================================
    builder.addCase(createTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      // fetchTodos();
      // state.task = action.payload;

      return state;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });

    //====================================================
    
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      fetchTodos();
      // state.task = action.payload;

      return state;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
    
    //====================================================
    
    builder.addCase(completeTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(completeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      fetchTodos();
      // state.task = action.payload;

      return state;
    });
    builder.addCase(completeTodo.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
    //====================================================
    
    builder.addCase(editTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      fetchTodos();
      // state.task = action.payload;

      return state;
    });
    builder.addCase(editTodo.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
  },
  reducers: {
    // addTask: (state, action) => {
    //   state.task.push({ task: action.payload, completed: false });
    // },
    // deleteTask: (state, action) => {
    //   //Filter Logic
    //   // const newTask = state.task.filter(
    //   //   (task, index) => index !== action.payload
    //   // );
    //   // state.task = newTask

    //   //Splice Logic
    //   state.task.splice(action.payload, 1);
    // },
    // taskDone: (state, action) => {
    //   const indexToUpdate = action.payload;
    //   state.task[indexToUpdate].completed = true;
    // },
    // editTask: (state, action) => {
    //   const { indexToUpdate, updatedTask } = action.payload;
    //   state.task[indexToUpdate].task = updatedTask;
    // },
  },
});

export const { addTask, deleteTask, taskDone, editTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
