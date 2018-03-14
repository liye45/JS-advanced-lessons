//number NaN
var a=123;
var b=new Number(123);
console.log(a===b);//false  
console.log(a==b);
var b='123.345lilili';
console.log(typeof b);
console.log(parseInt(b));
console.log(parseFloat(b));
console.log(parseInt===parseFloat);//false
console.log(parseInt===window.parseFloat);//false
var c=123.45;
console.log(Math.ceil(c));//124
console.log(Math.floor(c));//123
console.log(Math.round(c));//123
d=5e2;
console.log(d);//5e2
console.log(typeof Math);//object

var a=Number('123456lili');
console.log(a);//NaN
isNaN(a);
console.log(typeof NaN);//number
var b=3/0;
console.log(b);//Infinity 正无穷
var c=-3/0;
console.log(c);//-Infinity  
isFinite(b);
var e=1/Infinity;
console.log(e);//0
//string 类型的基本操作
var a='abc_def_ghi_jkl_mn';
console.log(a.split('_',2));//分割，那一个字符串分割后放在数组中，2是指去两个元素
a.concat('_opq');//拼接
console.log(a.slice(2,5));//从第二位取到第五位
console.log(a.bold());
console.log(a.link());
console.log(a.fontcolor("bule"));
//布尔，类型的转换
if(new Boolean(false)){console.log('执行')}//其他类型转换成布尔类型的都为true；
//包装对象  基本数据类型对象对应着一个临时的对象类型，把基本数据类型包装成数据类型，就可以访问属性
var str='abcdef';
str.length=1;
console.log(str,str.length);//(abcdef,6)基本数据类型不变
var arr=[1,2,3,4,5,6];
arr.length=1;
console.log(arr,arr.length)//[1],1  引用数据类型会改变



