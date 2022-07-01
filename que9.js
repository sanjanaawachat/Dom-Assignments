//que9
9.//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function time(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm ="PM";
    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
    }//24 hrs format into 12 hrs format
    
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm;
    }
    
    var oneseconds = 1000;
    setInterval(time,oneseconds)
    time();