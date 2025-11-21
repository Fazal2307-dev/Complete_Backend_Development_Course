


// function delayFn(time){
//     return new Promise((resolve)=>setTimeout(resolve,time))
// }

// console.log("Promise lecture start");
// delayFn(2000).then(()=>console.log('after 2 second promise resolve'))
// console.log("end");



function divideFn(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2 === 0){
            reject('can not perform division by 0')
        }else{
            resolve(num1/num2)
        }
    })
}
divideFn(12,0)
.then((result)=>console.log(result,"result"))
.catch((error)=>console.log(error,"Error in your code"))