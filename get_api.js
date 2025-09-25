 const express=require("express");
 const app=express();
 app.use(express.json());
 app.get("/user",(req,res)=>{
    res.status(200).json({"message":"user list"});
 });
 
 app.post("/register",(req,res)=>{
    const {name,email}=req.body;
    res.status(201).json({"id":101,"name":name,"email":email,"message":"user created"});
 });
app.listen(2000,()=>{
    console.log('Pankaj Kumar');
 });