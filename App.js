let selectProcessor = document.getElementById('processor');
var selectRam = document.getElementById('ram');
var selectSsd = document.getElementById('ssd');
var selectHdd = document.getElementById('hdd');
var selectGpu = document.getElementById('gpu');
var selectMonitor = document.getElementById('Monitor')
let NewPrice = 0;
console.log(price);

ScrollReveal().reveal('.parts', { interval: 500 });

// let NewPrice = parseInt(price) + 1500;

// document.getElementById('price').innerHTML = NewPrice;

// const ramValue = function() {
//     console.log(selectRam.value)
//     NewPrice = parseInt(price) + parseInt(selectRam.value);
//     // console.log(NewPrice);
//     document.getElementById('price').innerHTML = NewPrice;
//     return NewPrice;
// }

// selectRam.addEventListener("change", ramValue);

// const ssdValue = function() {
//     console.log(selectSsd.value)
//     x = parseInt(NewPrice) + parseInt(selectSsd.value);
//     document.getElementById('price').innerHTML = x;
//     return x;
// }

// selectSsd.addEventListener("change", ssdValue);


const totalPrice = function(){

    NewPrice = parseInt(selectProcessor.value) +  parseInt(selectRam.value) + parseInt(selectSsd.value) + parseInt(selectHdd.value) + parseInt(selectGpu.value) + parseInt(selectMonitor.value);
    console.log(NewPrice);
    document.getElementById('price').innerHTML= NewPrice;
} 

selectRam.addEventListener("change", totalPrice);
selectSsd.addEventListener("change", totalPrice);
selectHdd.addEventListener("change", totalPrice);
selectGpu.addEventListener("change", totalPrice);
selectMonitor.addEventListener("change", totalPrice);
selectProcessor.addEventListener("change", totalPrice);











