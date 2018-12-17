function Promise(executor){
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onResolvedCallbacks=[];
    self.onRejectedCallbacks=[];
    function resolve(value){
        if(self.status==='pending'){
            self.value=value;
            self.status='resolved';
            self.onResolvedCallbacks.forEach(e=>e(self.value));
        }
    }
    function reject(reason){
        if(self.status==='pending'){
            self.reason=reason;
            self.status='rejected';
            self.onRejectedCallbacks.forEach(e=>e(self.reason));
        }
    }
    try{
        executor(resolve,reject)
    }catch(e){
        reject(e);
    }
}
Promise.prototype.then = function (onFulfilled,onRejected){
    let self = this;
    let promise2;
    if(self.status==='pending'){
        return promise2=new Promise(function(resolve,reject){
            self.onResolvedCallbacks.push(
                function(){
                    let x= onFulfilled(self.value);
                    if(x instanceof Promise){
                        x.then(resolve,reject);
                    }else{
                        resolve(x);
                    }
                }
            );
            self.onRejectedCallbacks.push(
                function(){
                    let x= onRejected(self.reason);
                    if(x instanceof Promise){
                        x.then(resolve,reject);
                    }else{
                        resolve(x);
                    }
                }
            );
        })
    }
    if(self.status === 'resolved'){
        return promise2=new Promise(function(resolve,reject){
            let x= onFulfilled(self.value);
            if(x instanceof Promise){
                x.then(resolve,reject);
            }else{
                resolve(x);
            }
        })
        
    }
    if(self.status === 'rejected'){
        return promise2=new Promise(function(resolve,reject){
            let x= onRejected(self.value);
            if(x instanceof Promise){
                x.then(resolve,reject);
            }else{
                resolve(x);
            }
        })
        
    }
}

module.exports = Promise;