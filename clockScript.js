"use strict"


const light = document.getElementById("light");
// const dark = document.getElementById("dark");
const numbers = document.querySelectorAll(".number");

const hour_hand = document.querySelector(".hour");
const minute_hand = document.querySelector(".minute");
const seconds_hand = document.querySelector(".second");

const Digital_clock = document.querySelector(".Digital-clock");

let time = document.querySelector(".time");
let date = document.querySelector(".date");



// Analogue clock
setInterval(function settingClock(){
    
    const present_date = new Date();
    const hour = present_date.getHours();
    const minute = present_date.getMinutes();
    const second = present_date.getSeconds();
    const calc_hour = hour*30;
    const calc_minute = minute*6;
    const calc_second = second*6;
    // console.log(second);
    // console.log(minute);
    seconds_hand.style.transform = "rotate(" + calc_second + "deg)";
    minute_hand.style.transform = "rotate(" + calc_minute + "deg)";
   hour_hand.style.transform = "rotate(" + (calc_hour + (calc_minute / 12)) + "deg)";
},1000);




//  for Digital clock
function setTime(){

    let meridiem  = document.querySelector(".meridiem");

    const present_date = new Date();
    const hour = present_date.getHours();
    const minute = present_date.getMinutes();
    // console.log(day_value);
    time.textContent = `${fixValues(hour)}:${fixValues(minute)}${(hour>=12?(meridiem='pm'):(meridiem='am'))}`
    date.textContent = present_date.toDateString();
}

function fixValues(value){
    if(value < 10){
        return "0" + value;//if 1->01,9 -> 09...
    }else{
       return value;
    }
}

setInterval((setTime), 1000);


// Fixing the light and dark mode

light.addEventListener('click',()=>{
    document.body.classList.toggle("display-color");
})