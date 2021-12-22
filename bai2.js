// //input
// var a = 1
// var b = 2
// var c = 3
// var d = 4 
// var e = 5
// //cac buoc xu ly
// var mean = (a + b + c + d + e) / 5
// // output
// console.log({mean});
var no1 = document.getElementById("1")
var no2 = document.getElementById("2")
var no3 = document.getElementById("3")
var no4 = document.getElementById("4")
var no5 = document.getElementById("5")
function tinh(){
    var ketquaEl = document.getElementById("ketqua")
    var ketqua = (no1.value*1 + no2.value*1 + no3.value*1 + no4.value*1 + no5.value*1) / 5
    ketquaEl.innerHTML = "TRUNG BÌNH CỘNG 5 SỐ LÀ " + ketqua
    
}