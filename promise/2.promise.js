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
    if(self.status==='pending'){
        self.onResolvedCallbacks.push(onFulfilled);
        self.onRejectedCallbacks.push(onRejected);
    }
    if(self.status === 'resolved'){
        onFulfilled(self.value);
        
    }
    if(self.status === 'rejected'){
        onRejected(self.reason);
        
    }
}

module.exports = Promise;