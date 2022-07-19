const exp = require("constants");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const route = express.Router();
const PuppeterService = require("./puppeter");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (url) => {
    new PuppeterService().launchWeb(url);
    console.log("website : ", url);
  });
});

io.on("connection", async (client) => {
  console.log("a user connected");
  client.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
