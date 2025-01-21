console.log("it works! yes it works!");
import express from "express";
//var express = require('express');
//var dotenvx = require('dotenv');
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./database/db.js";
//var connectDB = require('./database/db');



const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());

import userRoutes from "./Routes/user.js";

app.use("/api/",userRoutes);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const Userx = mongoose.model('Userx', userSchema);

app.post("/",(req, res) => {
  res.send("<h1>Wlcome Post</h1>");
  connectDB();
  console.log(req.body);

  const testUser = new Userx(req.body);
          console.log(testUser);
          
          testUser.save()
           .then((doc) => {
               console.log('User saved:', doc);
               })
          .catch((error) => {
           console.error('Error saving user:', error.message);
           });
           
});

app.get("/",(req, res) => {
  res.send("<h1>Wlcome</h1>");
  connectDB();
});

app.get("/about",(req, res) => {
  res.send("It's About Page!");
});



app.listen(port, function() {
  console.log("Server running " + port);
});