import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import todoRoutes  from "./routes/todoRoutes.js"
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

//=====================================================

app.use(express.json());

//=====================================================
app.listen(process.env.PORT, () => {
  console.log("Sevrer is Running", process.env.PORT);
});

//======================================================

app.use("/api/todo", todoRoutes)
// app.use("/api/auth", AuthRoutes)

//======================================================

//Middleware For Error
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
