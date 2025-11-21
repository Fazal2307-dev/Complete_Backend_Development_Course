const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{"content-Type":"text/plain"})
        res.end("Home Page")
    }else if(url ==='/projects'){
        res.writeHead(200,{"content-Type":"text/plain"})
        res.end("Project Page")
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("This page is not found")
    }

})


const Port =3000;

server.listen(Port,()=>{
    console.log(`server is started at Port:${Port}`)
})