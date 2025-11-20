//module.export
//require



const firstModule = require("./first-module")

console.log(firstModule.add(10,25))


try{
    console.log("")
    let divison_result = firstModule.divide(0,1)
    console.log(divison_result)

}catch(error){
console.log("caught an error",error.message);
}