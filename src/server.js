const express = require('express');
const server = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require("cors")

mongoose.connect('mongodb+srv://JoaoVictor:123@cluster0-9iodt.mongodb.net/omnistack8?retryWrites=true&w=majority',{
  useNewUrlParser: true
})
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(2555);