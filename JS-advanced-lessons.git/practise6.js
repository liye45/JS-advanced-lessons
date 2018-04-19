//JS对象  4月18号
var a={
    name:'ye',
    age:18,
    print:function(){
        console.log(this.name+this.age+'岁了')
    }
}
console.log(a.name);
console.log(a.age);
a.print();
//查看对象类型  
//对象分为内置对象（object,boolean,string,number,function,array,date,regexp,error,math,json） ，宿主对象，自定义对象
console.log(Object instanceof Function);//t
console.log(Object instanceof Object);//t
console.log(Boolean instanceof Function);//t
console.log(Boolean instanceof Object);//t
console.log(String instanceof Function);//t
console.log(String instanceof Object);//t
console.log(Number instanceof Function);//t
console.log(Number instanceof Object);//t
console.log(Function instanceof Function);//t
console.log(Function instanceof Object);//t
console.log(Array instanceof Function);//t
console.log(Array instanceof Object);//t
console.log(Date instanceof Function);//t
console.log(Date instanceof Object);//f
console.log(Math instanceof Function);//t
console.log(Math instanceof Object);//t
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t
console.log(typeof Array);//funxtion
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object
//js对象属性
//数据属性 字符串的键到值的映射（包括基本类型数据，对象，函数）
//访问器属性  访问属性的方法  访问和设置时不加括号
//内置属性  不能直接访问
var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);


var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);
//创建对象
//通过对象字面量直接创建对象
//通过object的create静态方法创建对象
//通过构造函数创建对象
var obj1={x:1}
var obj2=Object.create(obj1)
obj2.y=2;
var Obj3=function(){this.z=2}
var obj3=new Obj3()//实例化一个对象 
console.log(obj1,obj2,obj3)
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();
//添加，访问，修改 属性
var obj = {};
obj.x = 2;
console.log(obj.x);
obj.x = 5;
console.log(obj["x"]);
delete obj.x;
console.log(obj.x);
