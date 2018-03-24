//逆等  减少赋值时程序出错
var a=123;
if(a=456){
    console.log("不正确的")
}//结果会输出，所以不正确
var a=123;
if(456==a){
    console.log('正确')
}
var a=123;
if(123==a){
    console.log('逆等减少错误 ')
}
//算数运算符 + += 前++  后++,,前--，后--；+=
var a=12;
var b='3';
console.log(a+b)//输出123 +起到字符串连接作用 发生隐式类型转换
console.log({}+1)//"[object Object]1"
console.log(a-b);//输出9  b发生隐式类型转换转化为number类型
var a=2;
console.log(++a + ++a + ++a );//12
//关系运算符  分清 ==和===的区别
//== 是类型不同，先转化再比较  引用类型到基本类型的转换方向
//===类型不同即为false，类型相同则判同为==；
//！=相当于==的逆运算 ！==相当于===的逆运算
 var b=11;
 var c='11';
 console.log(c===b)//false 类型不同
 console.log(c==b) //true  发生隐式类型转换
 console.log(b===new String(11))//false  newString为object类型
 var c='qwe';
console.log(c==new String('qwe'))//true  发生隐式类型转换
console.log(c!=new String('qwe'))//false 看成==的逆
//  &&和||的深层理解
//布尔类型时  &&：都真则真   ||：全假则假
//非布尔类型  ：1、首先把左操作数转化成布尔类型 2、对转化后的左操作数进行逻辑判断  3、对于&&运算  ，如果转化后的左操作数为true，则直接返回原始有操作数，为false则返回原始左操作数
//如果是||运算，转化为的左操作数若为true，则直接返回左操作数，false返回右操作数
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:'li'})//{name:'li'}
//短路原则
//&&和||的实际应用
//分数等级
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");
//使用||来设置函数参数的默认值
var sum=function(a,b,c){
    b=b||4;
    c=c||5;
    return a+b+c;
}
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
//
//函数及函数参数
//函数定义的三种方式
function max(a,b){
    return a>b?a:b;
}
var max=function(a,b){
    return a>b?a:b
}
var max=new Function("a","b","return a>b?a:b")
//函数调用的四种方式
//1 直接调用
function test(){
    console.log("this is",this)
}
test()//
function test2(){
    function test3(){
        console.log(this);
    }
    test3()
}
test2();
//2作为方法调用
var obj={
    name:"li",
    age:20,
}
var sex=function(){
    console.log("女")
}
obj.sex=sex;
obj.sex();
//3通过call（）和apply（）间接调用
objA={name:"li"};
objB={name:"zhang"}
objA.foo=function(){
    console.log(this.name)
};
objA.foo();
objA.foo.call(objB);//输出zhang

//4作为构造函数调用
function person(name){

    this.name=name;
    
};
person.prototype.sayhi=function(){
    console.log("Hi,i'm"+this.name);
}
var p1=new person("liye")
p1.sayhi();

