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


fs.appendFileSync(filePath,'\n this is a new line added to that file ')
console.log("new file content added");