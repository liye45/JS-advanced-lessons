var a=['abc',123,{}]
console.log(typeof a);
console.log(a instanceof Array);
console.log(typeof true);
console.log(typeof undefined);
var b=function (){
    var x=123;
}
console.log(b instanceof Function);
console.log(b instanceof Object);
var c={
name:'li',
age:12}
console.log(typeof c);
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof Math);
console.log(typeof JSON);

var a=123;//存放在栈取
var b=a;//存放在栈取，将a的属性赋值给b
b=345;//b改变，a不改变
console.log(a,b)
var c={
	oa:'li',
	ob:12
}
var d=c;
d={
oa :'zhang',
ob:13
};
console.log(c,d);
console.log(c===d);//此时改变了d整个对象，在堆区创建一个新的内存存放d,所以c d 不一样；

var c={
	oa:'li',
	ob:12
}
var d=c;
d.oa='zhang'
console.log(c,d);
console.log(c===d);//此时改变的市对区中对象的属性，c d 还是指向堆区中的同一空间，所以c===d;
var e={x1:2,y1:3};//存放在堆区
var f={x2:2,y2:3};//存放在堆区
console.log(e.x1===f.x2);//===值和类型全相等时为true，x1和x2值相同，类型相等
console.log(e.y1==f.y2);
console.log(e===f);//e 和f是两个不同的对象，指向堆区的不同空间，所以结果是false;
var s=123;
function fool(x){
x=345;
}
fool(s);
console.log(s)//``123  新开辟了空间
undefined
var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);
console.log(a.y);//结果 345  还是指向同一片内存，只是修改了属性
