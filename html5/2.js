let a=require('./1.js');
console.log(a);
let http=require('http');
let fs=require('fs');
http.createServer(function(req,res){
    let url=req.url;
    if(url==='/'){
        console.log(url);
        url='./index.html';
    }

    fs.readFile(url,'utf-8',function(err,data){
        if(err) res.write('404');
        else{
        res.write(data);
        res.end();
        }
        
    });
    //res.end(); 异步的 write after end
    
}).listen(3000);