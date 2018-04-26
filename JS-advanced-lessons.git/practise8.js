//创建对象的三种方法
//obj1通过字面量方式创建，并创建自身属性x
//obj2通过Object静态方法创建，obj2的原型为obj1，并创建自身属性y
//obj3通过构造函数来创建，构造函数为Obj3
var obj1={x:1}
var obj2=Object.create(obj1)
obj2.y=2;

var Obj3=function(){this.z=2}
var obj3=new Obj3()//实例化一个对象 
console.log(obj1,obj2,obj3)
//{x: 1} {y: 2} Obj3?{z: 2}
obj.toString()//[object Object]

var obj1={x:1,
   m:function(){}   
}

var obj2=Object.create(obj1)

obj2.y=2;


var Obj3=function(){this.z=2}

var obj3=new Obj3()//实例化一个对象

console.log(obj1,obj2,obj3)

//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var Obj4= Object.create(obj);
Obj4.age = 23;
console.log(Obj4.num);
console.log(Obj4.str);
console.log(Obj4.show());
console.log(Obj4.age);//自有属性
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);
var Obj5 = Object.create(obj);
var Obj5 = Object.create(obj);
newObj.age = 23;
console.log(Obj5.__proto__ === obj);
console.log(Obj5.__proto__ === obj);
console.log(Obj5.__proto__.__proto__);
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();
function MyObj() {

 };
MyObj.prototype.z = 3;
var obj = new MyObj();
obj.x = 1;
obj.y = 2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
console.log("z" in obj);
console.log(obj.hasOwnProperty("z"));
obj.z = 5;
obj.hasOwnProperty("z");
console.log(obj.z);
console.log(MyObj.prototype.z);
obj.z = 8;
console.log(obj.z);
delete obj.z;
console.log(obj.z);
delete obj.z;