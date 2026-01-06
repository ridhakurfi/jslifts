const express = require("express");
const router = require("./routers");
const app = express();
require('dotenv').config()

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// endpoints
app.use(router);

module.exports = app;