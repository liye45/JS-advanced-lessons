console.log("noooooonooy".replace(/o?/g,"*"))
//VM133:1 *n*******n***y*
undefined
console.log("noooooonooy".replace(/o{5}/g,"*"))
//VM141:1 n*onooy
undefined
console.log("noooooonooy".replace(/o{1,2}/g,"*"))
//VM143:1 n***n*y
undefined
"12345678".replace(/\d{3,6}/,"x")
//"x78"
"12345678".replace(/\d{3,6}?/,"x")
//"x45678"
"12345678".replace(/\d{3,6}?/gi,"x")
//"xx78"
"12345678".replace(/\d{3,6}?/g,"x")
//"xx78"
//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//写一段代码，将对应的号码段存储到对应的数组中
for(var i=0,len=numbers.length;i<len;i++){
    if(num)

}


































try{
    var a=new Array(-5)
    
    }
    catch(e){console.log(e)}
    finally{console.log("finally")}

    try{
        throw"abc"}
        catch(e){console.log(e)}