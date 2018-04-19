//三种方法定义对象
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

for(var k in obj){
 console.log(k,obj[k])

}

//VM252:9 {x: 1, m: ?} {y: 2} Obj3?{z: 2}

//js对象属性及其设置
//不可枚举
var obj={
   x:1,
   y:2
}

Object.defineProperty(obj,'x',{enumerable:false});

for(var k in obj){
console.log(k,obj[k])
}

var obj={
   x:1,
   y:2
}

Object.defineProperty(obj,'x',{writable:false});

for(var k in obj)
{
console.log(k,obj[k])
}

//VM290:7 x 1
//VM290:7 y 2
 
var person={name:'jack'}
Object.defineProperty(person,'name',{writable:false,configurable:false,enumerable:true,value:'mike'})
console.log(person.name)
person.name='lucy';
console.log(person.name)
delete person.name

console.log(person.name)
//mike
// mike
//mike
//configurable一旦设置  其他属性无法设置删除

var person={name:'jack'}
Object.defineProperty(person,'name',{writable:true,configurable:false,enumerable:true,value:'mike'})
console.log(person.name)
person.name='lucy';
console.log(person.name)
delete person.name

console.log(person.name)

//mike
// lucy
// lucy
//添加属性（两种：1直接添加  2通过defineProperty添加）
var obj={
x:1,
y:2
}

obj.z=3;

Object.defineProperty(obj,'w',{value:456,configurable:true});

for(var k in obj){console.log(k,obj[k])}

//x 1
//y 2
// z 3
//无法通过赋值改变属性值  因为writeable为false
obj.w=789

789

console.log(obj.w)

// 456
//js访问器属性
var obj1={
   _name:"Daisy"
};

Object.defineProperty(obj1,"name",{
   get:function (){//只定义了get 特性，因此只能读不能写
  
    return this._name;
   }
});
console.log(obj1.name);//"Daisy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Daisy"






var obj={x:1};
Object.defineProperty(obj,'y',{value:2,writable:false})
var r=Object.getOwnPropertyDescriptor(obj,'x')
var t=Object.getOwnPropertyDescriptor(obj,'y')
console.log(r,t)

//{value: 1, writable: true, enumerable: true, configurable: true}
//{value: 2, writable: false, enumerable: false, configurable: false}

//对象属性特性

var obj4=Object.create({x:1})

obj4.y=5
Object.keys(obj4）

//["y"]

Object.defineProperty(obj2,'z',{value:3});
Object.getOwnPropertyDescriptor(obj2,'z')

{value: 3, writable: false, enumerable: tfalse, configurable: false}

Object.keys(obj2)

["y"]
//object.keys()没有找到不可枚举的属性的键值
Object.getOwnPropertyNames(obj2)
["y", "z"]
//Object.getOwnPropertyNames可访问到可枚举的和不可枚举的所有属性键值
//in 检测原型链上所有的属性
'x' in obj2
// 
true

'y' in obj2

//true

'z' in obj2
//
true
////hasOwnProperty，判断自身对象有没有此属性
obj2.hasOwnProperty('x')
//
false

obj2.hasOwnProperty('y')
//
true

obj2.hasOwnProperty('z')
//
true