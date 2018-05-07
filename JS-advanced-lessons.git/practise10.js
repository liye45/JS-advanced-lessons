//Date 对象
//2018年5月7日
//4种创建Date 的方法
//通过字面量直接创建
var today=new Date(2018,5,7,19,16);////注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(today)
//参数为字符串类型
var now=new Date("2018-5-7");//5代表五月
console.log(now);
//参数为数字类型 ，以毫秒为单位
var date = new Date(0);    //默认初始时间为1970-01-01:00:00:00
var date1 = new Date(1000); 
console.log(date1);
//1970-01-01:00:00:01
//返回当前时间
var now=new Date();
console.log(now)
//Date静态方法和原型方法
//静态方法
console.log(new Date());//从1970年1月1日00:00:00开始计算,单位为毫秒
//Mon May 07 2018 19:31:29 GMT+0800 (中国标准时间)
var time=Date.parse("2018-5-7")//输出单位为毫秒
console.log(time)//1525622400000
console.log(Date.UTC(2018,5,7));//输出单位也为毫秒
//Date 的原型方法
//Date,prototype.getDate()  根据本地时间返回指定日期对象的月份中的第几天
//Date.prototype.getFullYear() 根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。
var d = new Date("2018-5-7");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setDate(11);//把日改为11日
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());
//日期和时间格式
console.log(new Date("2018-05-07 19:12:23.111"));
console.log(new Date("2018-05-05").getTime());//从1970年一月一日开始计算  单位为毫秒
console.log(new Date("1960-01-02").getTime());
console.log(new Date("2018-05-07") > new Date("1970-01-01"));
//true
console.log(new Date("2018-05-07") - new Date("1970-01-01"));
//1525651200000  毫秒为单位
console.log(new Date((new Date("1970-01-01").getTime())+86400000));