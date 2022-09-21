import express from "express";
// const express = require("express");
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose
    .connect("mongodb://127.0.0.1:27017/CryptoExchange")
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));

//user schema 
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    invitecode: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/login",(req,res)=>{
    console.log(req.body);
    const {email,password} =req.body;

    User.findOne({email:email},(err,user)=>{
        if(user){
            
           if(password === user.password){
                console.log("1");
               res.send({message:"login success",user:user})
           }else{
                console.log("5");
               res.send({message:"wrong credentials"})
           }
        }else{
            console.log("2");
            res.send({message:"not register"})
        }
    })
});

app.post("/Register",(req,res)=>{
    const {firstname, lastname, invitecode, email, password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            // console.log("1");
            res.send({message:"user already exist"})
        }else {
            // console.log("2");
            const user = new User({firstname,lastname,invitecode,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
   // res.send({message:"sucessfull"});

}) 

app.listen(6969,()=>{
    console.log("started")
})