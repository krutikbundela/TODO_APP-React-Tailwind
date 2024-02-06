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

     res.status(200).json({
       success: true,
       message: "Task Created",
     });

  } catch (error) {
    next(error);
  }
};

export const getAllTask = async(req,res,next) =>{
    try {
        const allTask = await Todo.find();

        res.status(200).json(allTask);
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async(req,res,next) =>{
    try {
        const id = req.params.id

        if(!id){
            return next(errorHandler(400,"Id Not Found"))
        }

         const deletedTask = await Todo.findByIdAndDelete(id);
         console.log("deleteTask ~ deletedTask:", deletedTask);

         if (!deletedTask) {
           return next(errorHandler(404, "Task not found"));
         }

         res.status(200).json({
           success: true,
           message: "Task deleted successfully",
         });
         
    } catch (error) {
        next(error);
    }
};