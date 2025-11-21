
const http= require('http');
const server = http.createServer((req,res)=>{

    console.log(req,'req')
    res.writeHead(200,{'Content-Type':'text/plain'})
    req.end("Hello node js from http module")
})


const Port = 3000;
server.listen(Port,()=>{
    console.log(`server is running on ${Port} `)
})