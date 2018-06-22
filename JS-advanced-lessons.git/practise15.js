//31 ES6新增的数据类型和结构
//ES5对象属性名为字符串，容易造成冲突  ES6引入symbol，是一个基本数据类型 会产生一个独一无二的值，所以参数相同的或者没参数的都是不一样的
//创建一个symbol类型的变量
let s=Symbol()//无参数
//1
var a = {};
a[s] = 'Hello!'
//2
var a = {
    [s]: 'Hello!'//括号中不能加引号，如果加上引号那就是一个字符串，不会读取s作为标识符所指向的值
};
//3
var a = {};
Object.defineProperty(a, s, { value: 'Hello!' });
var s1=Symbol('foo')
console.log(s1)//symbol(foo)
//有参数的symbol变量
//symbol类型变量不能用new创建

//symbol函数只能通过symbol创建，相同参数的symbol函数的返回值是不相等的
//symbol变量不能与其他值进行运算，但可转换为字符串类型
var s2=Symbol('foo')
console.log(s2===s1)//false
var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);
// 123 undefined
console.log(obj[myS2],obj["xx"]);
//456 4569

//作为属性名的symbol，访问对象属性时需要使用中括号，并且加引号
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//遍历symbol只能使用Object.getOwnPropertySymbols
//Symbol.for( )接受一个字符串作为参数，搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
// Symbol.keyFor( )方法返回一个已登记的Symbol类型值的key，字符串类型
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true
console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);//false
console.log(s2 === s3);//false
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);//true
console.log(s2 === s4);//false
//新增的数据结构
//set 结构  通过new实例化对象，类似数组，但无重复值
var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);
var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}
//去重
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);//[1,2,3,4]
//算长度
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);//5
var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2