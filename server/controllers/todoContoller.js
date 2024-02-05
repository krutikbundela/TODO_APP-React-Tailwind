import { errorHandler } from "../utils/error.js";
import Todo from "../models/todoModel.js"

export const createTask = async (req, res , next) => {
    
    try {
      const {task} = req.body;
      console.log("createTask ~ task:", task);
    if(!task){
       return next(errorHandler(400,"Please Enter Task"));
    }

    const newTodo = new Todo({
        task,
    })

    await newTodo.save();

     res.status(200).json("Task Created");

  } catch (error) {
    next(error);
  }
};
