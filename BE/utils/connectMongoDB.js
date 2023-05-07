import mongoose from "mongoose";
import asyncWrapFunc from "./asyncWrapFunc.js";

const connectMongoDB = asyncWrapFunc(async (req, res) => {
  mongoose.set({ strictQuery: true });
  await mongoose.connect(process.env.DATABASE_URI);
});

export default connectMongoDB;
