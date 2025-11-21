const fs = require('fs')






function person(name,callbackfn){
console.log(`hello ${name}`)
callbackfn()
}


function address(){
    console.log('India')
}

person('md fazal',address)

fs.readFile("input.txt",'utf8',(err,data)=>{
    if(err){
        console.log('Error reading file ',err)
        return ;
    }
    console.log(data)
})