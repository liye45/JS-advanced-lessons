/*window.onload=function(){
    console.log("window onload");
    var div1=document.getElementById("div1")
    div1.onclick=function(){
        console.log("div1 onclick")
    }
}*/
/*window.onload = function (e) {

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var evenHandler=function e(){
        console.log
    }

div1.onclick
}
function div2click(e){
    console.log("sss")
} 
console.log(e);
console.log(e.__proto__);
console.log(e.__proto__.__proto__);
console.log(e.__proto__.__proto__.__proto__);
console.log(e.__proto__.__proto__.__proto__.__proto__);


/*window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    div2.onclick = function () {
        console.log("div2 click");
    }
     div2.onmouseover = function () {
     console.log("div2 mouseover");
     }
}
function div1click() {
    console.log("div1 click");

}
*/



/*window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };

    div2.onclick = eventHandler;
    //div2.onclick = null;
}
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    div1.addEventListener("click",function(){
        console.log("xx");
    });
    div2.addEventListener("click",eventHandler);
    div2.addEventListener("click",eventHandler,false);
    div2.removeEventListener("click",eventHandler);
    //div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
   // div2.dispatchEvent(new Event("MyEvent"));*/














