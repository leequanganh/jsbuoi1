var chieudai = document.getElementById("chieudai")
var chieurong = document.getElementById("chieurong")
var ketquahcn = document.getElementById("ketquahcn")
function hcn(){
    var ketquacv = (chieudai.value*1 + chieurong.value*1 )*2
    var ketquadt = (chieudai.value*1) * (chieurong.value*1)
    console.log(ketquacv);
    console.log(ketquadt);
    ketquahcn.innerHTML= "Chu vi là:" + ketquacv +  " Diện tích là:" + ketquadt
}
