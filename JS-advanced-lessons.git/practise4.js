//JS函数对象练习   3月26号
//函数对象
//函数对象对应的类型是Function，如果变量是函数（函数对象）时，typeof此对象，返回function，而非object 
console.log(typeof new Function())//function
console.log(typeof new new Function())//object
var a=new Array//创建了一个5个元素的数组
var b=new Array("5")//创建了一个元素为5的数组
var a=function(){
    console.log(123);
}
console.log(a instanceof Object)//true
console.log(a instanceof Function)//true
console.log(typeof Array);//function
console.log(Array instanceof Object);//true
//一个对象如果是function类型  也就是object类型
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
//math 和tson 是特殊的
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object
console.log(Math instanceof Function)//false
console.log(JSON instanceof Function)//false
//函数对象的属性及方法
//函数对象又length arguments caller callee prototype 等属性
//length 属性是指形参的数量
function li(a,b,c)
{
    console.log(a+b+c);
}
console.log(li.length)//3
//arguments 属性是指实参集合,相当于一个集合
var foo=function(a,b){
    console.log(arguments);
    console.log(arguments.length);
}
foo(1,2);//Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
foo(1,2,3)//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 11: 22: 3callee: ƒ (a,b)length: 3Symbol(Symbol.iterator): ƒ values()__proto__: Object
//caller属性是指获取调用当前函数的函数 
function ye(){
    if(ye.caller==null){console.log("顶部")}
    else{
        console.log("function")
        console.log(ye.caller.toString())
    }   

}
console.log("没有调用的情况下ye.caller为：",ye.caller);//没有调用的情况下ye.caller为： null
ye();//顶部

var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();//null
obj.foo2();//ƒ abc(){this.foo1();}
//callee返回正被执行的 Function 对象 即指定的 Function 对象的正文即指定的 Function 对象的正文 
//属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
// prototype属性 获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
function po(name,age){
    this.name=name;
    this.age=age;
}
po.prototype.sex="nan"
po.prototype.sayhi=function(){
    console.log("woshi",this.name)
}
var li=new po("li",19)//woshi li
li.sayhi();//nan

//apply 属性调用一个普通函数或对象的方法，用另一个对象替换当前对象 apply的第二个参数是Array 类型
function swim(m,n){console.log("i'm:"+this.name+"i can swim",m,n)}
var me={name:"li"};
var bird={name:"polly",
fly:function(m,n){console.log("i'm"+this.name+"i can fly")}
};
bird.fly.apply(me,[7,8])
//高阶函数
//函数作为参数被传递最常见的形式：回调函数函数作为返回值输出
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);
foo(1,1,f3,f2);
foo(1,1,f1,f2);