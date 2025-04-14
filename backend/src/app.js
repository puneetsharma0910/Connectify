import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import userRouter from "./routes/users.router.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose";
import  connectToSocket  from "./controllers/socketManager.js";
import cors from "cors";
const PORT = process.env.PORT || 3000;
const db = process.env.DB;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({ limit : "40kb", extended: true }));

app.get("/", (req, res) => {
  res.send("hi there");
});
app.use("/api/v1/users", userRouter );
//app.use("/users", userRouter );


mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

server.listen(PORT, async () => {
  console.log(`app is listening on http://localhost:${PORT}`);
 // console.log("Mongo URI:", MONGO_URI); // Log to debug
});
