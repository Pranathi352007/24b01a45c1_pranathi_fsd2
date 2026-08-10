const express=require('express');
const home=express();
const port=3000;
home.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the class</h1><p>You are in first page</p>`);
});
home.get('/about',(req,res)=>{
    res.send("This is the second page");
});
home.get('/end',(req,res)=>{
    res.send("This is the end page");
})
home.listen(port,()=>{
    console.log("Server is running successfully");
})
