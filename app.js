// TODAY
let today = new Date();
let msToday = today.getTime();

// EID DAY 1
let eidDay1 = new Date("July 10,2022");
let msEidDay1 = eidDay1.getTime();
let diff1 = msEidDay1 - msToday;
let deidDay1 = Math.floor(diff1 / (1000 * 60 * 60 * 24))+ "d";
let heidDay1 = Math.floor(diff1 / (1000 * 60 * 60))+ "h";
let meidDay1 = Math.floor(diff1 / (1000 * 60))+ "m";
let seidDay1 = Math.floor(diff1 / (1000))+ "s";

(deidDay1 === 0+ "d")? deidDay1 = "": deidDay1;
(heidDay1 === 0+ "h")? heidDay1 = "": heidDay1;
(meidDay1 === 0+ "m")? meidDay1 = "": meidDay1;
(seidDay1 === 0+ "s")? seidDay1 = "": seidDay1;
if(msEidDay1 > msToday){
    document.getElementById("eid1").innerHTML = `<h2>EID DAY 1</h2>
    <h3>Remaining Time</h3>
    <h4>${deidDay1} <br> ${heidDay1} <br> ${meidDay1} <br> ${seidDay1}</h4>`
}
else{
    document.getElementById("eid1").innerHTML = `<h2>HAPPY <br> EID-UL-ADHA <br> DAY 1 is here <br> ٱلْحَمْدُ لِلّٰهِ</h2>`
}


// EID DAY 2
let eidDay2 = new Date("July 11,2022");
let msEidDay2 = eidDay2.getTime();
let diff2 = msEidDay2 - msToday;
let deidDay2 = Math.floor(diff2 / (1000 * 60 * 60 * 24))+ "d";
let heidDay2 = Math.floor(diff2 / (1000 * 60 * 60))+ "h";
let meidDay2 = Math.floor(diff2 / (1000 * 60))+ "m";
let seidDay2 = Math.floor(diff2 / (1000))+ "s";
(deidDay2 === 0+ "d")? deidDay2 = "": deidDay2;
(heidDay2 === 0+ "h")? heidDay2 = "": heidDay2;
(meidDay2 === 0+ "m")? meidDay2 = "": meidDay2;
(seidDay2 === 0+ "s")? seidDay2 = "": seidDay2;
if(msEidDay2 > msToday){
    document.getElementById("eid2").innerHTML = `<h2>EID DAY 2</h2>
    <h3>Remaining Time</h3>
    <h4>${deidDay2} <br> ${heidDay2} <br> ${meidDay2} <br> ${seidDay2}</h4>`
}
else{
    document.getElementById("eid2").innerHTML = `<h2>HAPPY <br> EID-UL-ADHA <br> DAY 2 is here <br> ٱلْحَمْدُ لِلّٰهِ</h2>`
} 



// EID DAY 3
let eidDay3 = new Date("July 12,2022");
let msEidDay3 = eidDay3.getTime();
let diff3 = msEidDay3 - msToday;
let deidDay3 = Math.floor(diff3 / (1000 * 60 * 60 * 24))+ "d";
let heidDay3 = Math.floor(diff3 / (1000 * 60 * 60))+ "h";
let meidDay3 = Math.floor(diff3 / (1000 * 60))+ "m";
let seidDay3 = Math.floor(diff3 / (1000))+ "s";
(deidDay3 === 0+ "d")? deidDay3 = "": deidDay3;
(heidDay3 === 0+ "h")? heidDay3 = "": heidDay3;
(meidDay3 === 0+ "m")? meidDay3 = "": meidDay3;
(seidDay3 === 0+ "s")? seidDay3 = "": seidDay3;
if(msEidDay3 > msToday){
    document.getElementById("eid3").innerHTML = `<h2>EID DAY 3</h2>
    <h3>Remaining Time</h3>
    <h4>${deidDay3} <br> ${heidDay3} <br> ${meidDay3} <br> ${seidDay3}</h4>`
}
else{
    document.getElementById("eid3").innerHTML = `<h2>HAPPY <br> EID-UL-ADHA <br> DAY 3 is here <br> ٱلْحَمْدُ لِلّٰهِ</h2>`
}




/// TIMER 
// The data/time we want to countdown to
var countDownDate = new Date("Jul 12, 2022 18:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s "

// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);