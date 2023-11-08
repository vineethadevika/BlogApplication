import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import { checkEmailExists } from "./controllers/user-controller";
import {resetPasswordController } from "./controllers/user-controller"
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.get("/api/user/check-email", checkEmailExists);
app.post("/api/user/reset-password", resetPasswordController);

mongoose
  .connect(
    "mongodb+srv://Admin:WrTF9KuE2trO5hfN@cluster0.fi4q5vr.mongodb.net/Blog?retryWrites=true&w=majority"
    
  )
  .then(() => app.listen(8000))
  .then(() =>
    console.log("Connected To Database")
  )
  .catch((err) => console.log(err));