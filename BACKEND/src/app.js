import express from "express";
import { createServer } from "http";

import { Server } from "socket.io";
import mongoose from "mongoose";

import cors from "cors";
const app = express();
const server = createServer(app);
const io = new Server(server)

app.set("port", (process.env.PORT || 8000))

app.get("/home", (req, res) => {
    return res.json({ "hello": "World" })
});

const start = async () => {

    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000");
    });
}

start();