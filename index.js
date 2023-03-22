import express  from "express";
import router from "./src/routers/product";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use("/api", router);
mongoose.connect("mongodb://127.0.0.1:27017/demo");
export const viteNodeApp = app