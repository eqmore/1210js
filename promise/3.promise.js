let Promise=require('./4.promise.js');
let p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('1');
    },1000)
    
});
let p2 = p.then(function(data){
    return new Promise(function(resolve,reject){
        resolve('aa'+data);
    })
})
p2.then(function(data){
    console.log(data);
})


/* function fn2(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(50);
        },4000);
    });
}

console.log(fn2());

async function fn(){
    let y = await fn2() + 2;
    console.log(y);
}
fn(); */


