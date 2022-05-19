function time(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();


    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;
    let time_now = hours + ":" + minutes + ":" + seconds;

document.getElementById("zegar").innerText=time_now;
document.getElementById("zegar").innerContent=time_now;

setTimeout(time);

}

time();

