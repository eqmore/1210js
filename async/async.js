/* function fn1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){console.log('fn1');
        resolve();
    },1000);
        
        
    })
    
}
function fn2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){console.log('fn2');
        resolve();
    },2000);
        
    })
    
}

async function fnasync(){
    console.time('cost');
    await fn1();
    await fn2();
    console.timeEnd('cost');
}

fnasync(); */


function fn1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){console.log('fn1');
        resolve();
    },1000);
        
        
    })
    
}
function fn2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){console.log('fn2');
        resolve();
    },2000);
        
    })
    
}

async function fnasync(){
    console.time('cost');
    await fn1();
    await fn2();
    console.timeEnd('cost');
}

fnasync();//异步，内部同步
console.log(1);//先输出