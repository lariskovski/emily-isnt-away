setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let am_pm = "AM";
    
    if (hours > 12) {
        hours = hours - 12;
        am_pm = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    time.textContent = hours + ":"+ minutes + " " + am_pm;
})