import express from "express";
import { createServer } from "node:http";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());



const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://aneeshmishra9098:5Xy1fOT6Arva8CFD@cluster0.dxxhn1b.mongodb.net/")
    console.log("MONGO Connected DB Host")
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000");
    });
}

start();