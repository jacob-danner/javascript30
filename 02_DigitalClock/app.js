const hour_display = document.getElementById('hour')
const min_display = document.getElementById('minute')
const sec_display = document.getElementById('second')

function displayTime() {
    const time = new Date()
    let [hour, minute, second] = [time.getHours(), time.getMinutes(), time.getSeconds()]
    if(second <= 10) second = `0${second}`
    hour_display.innerHTML = `${hour}:`
    min_display.innerHTML = `${minute}:`;
    sec_display.innerHTML = second;
}

setInterval(displayTime, 1000)

