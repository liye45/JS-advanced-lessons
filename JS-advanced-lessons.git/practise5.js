//4月11号
//JS中的立即执行表达式
//常见的立即执行表达式
(function min( x,y){
    console.log("the min is",x<y?x:y);
}(4,3));

(function (x,y){ 
    console.log("the max is",x>y?x:y);
})(1,3);
//立即执行表达式要在最后加分号
(function() {
    console.log("111");
})();
//变量污染问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();

//变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}