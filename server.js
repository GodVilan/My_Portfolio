// require("dotenv").config();

// import dotenv from "dotenv";
// dotenv.config();
import cors from "cors";
import { config } from "dotenv";
config();

// const todoLib = require("./backend/lib/todoLib");
import * as todoLib from "./backend/lib/todoLib.js";

// const mongoose = require("mongoose");
import mongoose from "mongoose";

// const express = require('express');
import express, {request, response} from "express";
// const { request } = require("express");

const app = express();
const port = process.env.PORT || 3010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}

app.use(cors());
app.use(express.static("frontend"));
app.use(express.json());


app.get("/", function(req, res){
	res.sendFile(process.cwd()+"/frontend/html/index.html");
});

app.listen(port, function(){
    console.log("Server running on http://localhost:"+port);
});