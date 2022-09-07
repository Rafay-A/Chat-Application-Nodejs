const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "index")));
app.use(cors());

dotenv.config();
connectDB();

//routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log("Server up");
});

let io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

require('./socket')(io);
