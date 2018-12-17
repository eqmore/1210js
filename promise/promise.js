fs=require('fs');


let p=new Promise((resolve,reject)=>{
    fs.readFile('./1.txt','utf-8',function(err,data){
        if(err) reject(err);
        resolve(data);
    })
})
p.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})