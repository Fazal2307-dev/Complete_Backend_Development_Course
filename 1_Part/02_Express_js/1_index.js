

const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send("Hello world");
})


const Port = 3000;
app.listen(Port,()=>{
    console.log(`Port is runing on ${Port}`)
})