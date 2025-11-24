
const express = require('express')
const app = express();
const Port = 3000;


//middleware
app.use(express.json())

let books = [
    {
        id:'1',
        title:'Book 1'
    },
     {
        id:'',
        title:'Book 2'
    },
     {
        id:'3',
        title:'Book 3'
    },
     {
        id:'4',
        title:'Book 4'
    },
]

app.get('/',(req,res)=>{
res.json({
    message:"Welcome to our bookstore api"
});
})

app.get('/get',(req,res)=>{
    res.json(books)
})
app.listen(Port,()=>{
    console.log(`sever is running on ${Port}`)
})