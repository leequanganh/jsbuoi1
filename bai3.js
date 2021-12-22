
var usdEl = document.getElementById("usd")
function doitien() {
   var usdValue = usdEl.value
   var ketqua = usdValue*1*23500
   var ketquaUsd = document.getElementById("ketquausd")
   ketquaUsd.innerHTML = "Kết quả là :" + ketqua
}