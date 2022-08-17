
let divWidth= $(".navOptions").innerWidth();
$("#nav").css("left", `-${divWidth}`);
$(".fa-xmark, .open i, h2 ").click(function(){
    if($("#nav").css("left")=="0px"){
        $("#nav").animate({left:`-${divWidth}`}, 500);
    }else
    {
        $("#nav").animate({left:"0px"}, 500);
    }
});

$("#nav a[href^='#']").click(function(e){
    let linkHref= $(e.target).attr("href");
    let sectionOffset =$(linkHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset}, 1000);
})

$(document).ready(function(){
    let firstDiv =document.querySelector("#details div");
    $(firstDiv).css("display", "block");
    $(firstDiv).siblings().not("#details h3").css("display", "none");
    $("#details h3").click(function(){
        $(this).next().slideToggle(500);
        $("#details div").not($(this).next()).slideUp(500);
    })
});

let getDays = document.getElementById("days");
let getHours = document.getElementById("hours");
let getMinutes = document.getElementById("minutes");
let getSeconds = document.getElementById("seconds");

function getCounter(){
    let now = new Date();
    let eventDate= new Date(2022, 7, 25);

    let currentTime= now.getTime();
    let eventTime= eventDate.getTime();
    let timeLapse= eventTime-currentTime;   //  time ==>> milliSecond

    let second = Math.floor(timeLapse / 1000);  //  3571800
    let minute = Math.floor(second / 60);       //  59530
    let hour = Math.floor(minute / 60);         //  992
    let day = Math.floor(hour / 24) - 30;       //  11

    hour %= 24;      // number of days
    minute %= 60;    // number of minutes
    second %= 60;    // number of seconds

    hour = (hour < 11) ? "0" + hour : hour;
    minute = (minute < 11) ? "0" + minute : minute;
    second = (second < 11) ? "0" + second : second;
    
    getDays.innerHTML = `<h3> ${day} D </h3>`;
    getHours.innerHTML = `<h3>${hour} h </h3>`;
    getMinutes.innerHTML = `<h3>${minute} m </h3>`;
    getSeconds.innerHTML = `<h3>${second} s </h3>`;
    setTimeout(getCounter, 1000);
}
getCounter();
