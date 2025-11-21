const { log } = require('console');
const fs = require('fs')

const path = require('path');

const dataFolder = path.join(__dirname,"data")

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}
const filePath = path.join(dataFolder,'example.txt');
//sync way to creating file 
fs.writeFileSync(filePath,"Hello from node js")
console.log("file created successfully!")

const readContentFromFile = fs.readFileSync(filePath,'utf8');
console.log("file Content:",readContentFromFile)

//to added new line in existing file
fs.appendFileSync(filePath,'\n this is a new line added to that file ')
console.log("new file content added");

//async way to creating the file

const asyncFilePath = path.join(dataFolder,'async-example.txt')
fs.writeFile(asyncFilePath,"hello async node js",(err)=>{
    if(err) throw err;
    console.log('Async file is created successfully')
    fs.readFile(asyncFilePath,'utf8',(err,data)=>{
        if(err) throw err;
        console.log('Asyncs file content:',data)
    })
    fs.appendFile(asyncFilePath,'\n this is new line in asyncfile',(err)=>{
        if(err) throw err;
        console.log("New line added in the file")
        fs.readFile(asyncFilePath,'utf8',(err,updateddata)=>{
            if(err) throw err;
            console.log("updated content read",updateddata)
        })
    })
})

