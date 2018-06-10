//数组对象的解构赋值
//“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
// 对象的解构与数组有一个重要的不同。\
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
//解构也可以用于嵌套结构的对象,如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
//字符串也可以解构赋值
//函数参数的解构也可以使用默认值
// 交换变量的值:直接颠倒位置就行

var { a, b } = { a: "aaa", b: "bbb" };
console.log(a,b);
var { bar, foo } = { foo: "ccc", bar: "ddd" };
console.log(foo,bar);
var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);//匹配不到
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);
let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f,l);
let { first, last } = obj1;
console.log(first,last);
var foo = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = foo;
console.log(x); 
console.log(y); 

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
var { p: [x, { y }] } = foo;
console.log(x); 
console.log(y); 
var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); 

const [a, b, c, d, e] = 'hello';
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e);
let {toString: s1} = 123;
console.log(s1);
s1 === Number.prototype.toString
//true;

function move1({x = 0, y = 0} = {}) 
{
 return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

var [x,y] = ["a","b"];
[x, y] = [y, x];
console.log(x,y);