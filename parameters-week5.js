const express=require('express');
const app=express();
const port=3000;
//single route parameters
app.get('/user/:id',(req,res)=>{
    res.send(`<h1>Welocome to the first page</h1><p>The id of the user is ${req.params.id}`);
});
//multiple route parameters
app.get('/user/:id1/posts/:id2',(req,res)=>{
    const userid=req.params.id1;
    const postid=req.params.id2;
    res.send("The id of the user is"+userid+"The post id is "+postid);
});
//query parameters
app.get('/about',(req,res)=>{
    const name=req.query.name;
    const age=req.query.age;
    res.send("Name: " + name + ", Age: " + age);
});
app.listen(port,()=>{
    console.log("Server running successfully");
})
