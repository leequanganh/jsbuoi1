var haichusoEl = document.getElementById("haichuso")

function tong(){
    var hangchuc = (haichusoEl.value*1 )% 10
    var hangdv = Math.floor((haichusoEl.value*1) /10)
    var tong = hangchuc + hangdv
    var ketquatong2chuso = document.getElementById("ketquatong2chuso")
    ketquatong2chuso.innerHTML = "Tổng 2 số là :" + tong
}