const express = require('express')
const app = express();


//root route
app.get('/',(req,res)=>{
    res.send("Welcome to our home page");
})

app.get('/products',(req,res)=>{
    const products = [
        {
            id:1,
            label:'Products 1'
        },
        {
            id:2,
            label:'Products 2'
        },
        {
            id:3,
            label:'Products 3'
        },
    ]
    res.json(products)
})

//get a single products
// for dynamic routing you need to add these :
app.get('/products/:productId',(req,res)=>{
    console.log("req.params",req.params)
    const productId = parseInt(req.params.productId)
    const products = [
        {
            id:1,
            label:'Products 1'
        },
        {
            id:2,
            label:'Products 2'
        },
        {
            id:3,
            label:'Products 3'
        },
    ];
    const  getSingleProducts = products.find((product)=> product.id === productId);
    if(getSingleProducts){
        res.json(getSingleProducts);
    }else{
        res.status(404).send("product is not found! try with different id")
    }
})

const Port = 3000;
app.listen(Port,()=>console.log(`Server i snow runing at port ${3000}`))