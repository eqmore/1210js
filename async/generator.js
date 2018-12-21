// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
  }
  
  // 下面是中序（inorder）遍历函数。
  // 由于返回的是一个遍历器，所以要用generator函数。
  // 函数体内采用递归算法，所以左树和右树要用yield*遍历
  function* inorder(t) {
    if (t) {
      yield* inorder(t.left);
      yield t.label;
      yield* inorder(t.right);
    }
  }
  
  // 下面生成二叉树
  function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
  }
  let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
  /* 
  new Tree left=new Tree left=new tree (left=null label ='a' right=null)
                        label='b'
                        right=new tree(left=null label='c' right=null)
            label='d'
            right=new Tree left=new tree(left=null label=e right =null)
                            label=f
                            right=new tree(left=null label=g right=null)
            
  */
  // 遍历二叉树
 /*  var result = [];
  for (let node of inorder(tree)) {
    result.push(node);
  }
  
  console.log(result); */

  var clock = function* () {
    while (true) {
      console.log('Tick!');
      yield 'tick';
      console.log('Tock!');
      yield 'tock';
    }
  };

 /*  let c=clock();
  c.next();
  c.next();
  c.next();
  c.next(); */

  var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
  var r1 = yield readFileThunk('../ajax.md');
  //console.log(r1.toString());
  var r2 = yield readFileThunk('../linux.md');
  //console.log(r2.toString());
};

  var g = gen();

var r1 = g.next();
console.log(r1.value);
r1.value(function (err, data) {
  if (err) throw err;
  var r2 = g.next(data);
  r2.value(function (err, data) {
    if (err) throw err;
    g.next(data);
  });
});

// 仔细查看上面的代码，可以发现 Generator 函数的执行过程，其实是将同一个回调函数，反复传入next方法的value属性。这使得我们可以用递归来自动完成这个过程。
