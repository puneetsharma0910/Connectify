import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

import mongoose from "mongoose";
import cors from "cors";
import { connect } from "node:http2";
const PORT = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);
app.get("/", (req, res) => {
  res.send("hi there");
});
app.set("port", process.env.PORT || PORT);
server.listen(app.set("port"), async() => {
  const connection =   await mongoose.connect("mongodb+srv://puneets09:QlwRi7XmoqjZg9Ni@cluster0.0zmmtoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  comsole.log("MongoDB connected successfully")
  console.log(`app is listening on http://localhost:${PORT}`);
});
