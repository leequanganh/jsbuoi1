// //input
// var price = 100000
// var days = 30;
// //cac buoc xu li
// var pay = price * days
// //output
// console.log({pay})
var days = document.getElementById("songay")
function tinhtien(){
    var tienluong = days.value*100000
    var pEl = document.querySelector(".input-group p")
    console.log(tienluong);
    pEl.innerHTML= "Tiền lương :" + tienluong +"vnd"


}





