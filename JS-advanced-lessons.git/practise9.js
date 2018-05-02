function person(name,age){
    this.name=name;
    this.age=age;
} 
person.prototype.showname=function(){
    console.log(this.name);
}
function student(name,age,id){
    person.call(this,name,age);
    this.id=id;
}
student.prototype._proto_=person.prototype;
var s1=new student("zhang",19,111111);
var s2=new student("li",20,222222);

function student(name,age,id)
{
    Person.call(this,name,age);
    this.id = id;
}
student.prototype.showname=function(){
    console.log(this.name)
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var x1=new student("ye",17,88888)

var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){
    console.log("This is a static method ");
};
BaseClass.f1();
var instance1 = new BaseClass();
instance1.f2();
var BaseClass = new Function();
var Class2 = BaseClass;
BaseClass.f1 = function(){
    console.log(" BaseClass ' s static method");
};
Class2.f2 = function(){
    console.log(" Class2 ' s static method");
};
BaseClass.f1();
BaseClass.f2();
Class2.f1();
Class2.f2();
console.log(BaseClass === Class2);
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor);
console.log(Father.prototype.constructor); 
Father.prototype.constructor = Father;    
console.log(Father.prototype.constructor); 
