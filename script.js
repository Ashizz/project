// Timer to Develop//
const pomodoroTab=document.getElementById("pomodoro");
const shortbreakTab=document.getElementById("shortbreak");
const longbreakTab=document.getElementById("longbreak");
const pomodoroTabContent=document.getElementById("pomodoro-content");
const shortbreakTabContent=document.getElementById("shortbreak-content");
const longbreakTabContent=document.getElementById("longbreak-content");

pomodoroTab.addEventListener("click",function() { 
    shortbreakTab.classList.remove("active");
    longbreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");
    shortbreakTabContent.classList.remove("active");
    longbreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.add("active");
});

shortbreakTab.addEventListener("click",function(){
    shortbreakTab.classList.add("active");
    longbreakTab.classList.remove("active");
    pomodoroTab.classList.remove("active");
    shortbreakTabContent.classList.add("active");
    longbreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.remove("active");
});
longbreakTab.addEventListener("click",function() { 
    shortbreakTab.classList.remove("active");
    longbreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");
    shortbreakTabContent.classList.remove("active");
    longbreakTabContent.classList.add("active");
    pomodoroTabContent.classList.remove("active");    
});
  //setInterval(function(){
    //console.log(new Date().toISOString())
    function timer(seconds){
    const now = Date.now();
    const then=now+(seconds*1000);

    const timerinterval=setInterval(function(){
        const secondsLeft=Math.round((then-Date.now())/1000);
        displayTime(secondsLeft,pomodoroTime);

        if(secondsLeft<1){
            clearInterval(timerinterval);
        }
    },1000);
};

function displayTime(seconds,element){
    const minute = Math.floor(seconds/60);
    const second=seconds % 60;

    console.log({minute,second});

    
    element.innerText =minute + ":" + second;
    
    }
    const pomodoroTime = document.getElementById("pomodoroTime");

    const pomodorobutton = document.getElementById("pomodorobutton");
    pomodorobutton.addEventListener("click",function(){
        const pomodoroTotalTime =1500;
        timer(pomodoroTotalTime);

});
