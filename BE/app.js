import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import connectMongoDB from "./utils/connectMongoDB.js";
import authRoute from "./routes/authRoute.js";
import inventoryRoute from "./routes/inventoryRoute.js";
import orderRoute from "./routes/orderRoute.js";
import handleError from "./middleware/handleError.js";

const app = express();
const PORT = 5000;

connectMongoDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoute);
app.use("/inventory", inventoryRoute);
app.use("/order", orderRoute);

app.use(handleError);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
