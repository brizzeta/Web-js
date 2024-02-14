function Task1() {
    function updateClock() {
        const now = new Date();
        const hour = now.getHours() % 12; // Для 12-часового формата
        const minute = now.getMinutes();
        const second = now.getSeconds();
    
        const hourHand = document.querySelector('.hour-clock1');
        const minHand = document.querySelector('.min-clock1');
        const secHand = document.querySelector('.sec-clock1');
    
        const hourAngle = (hour * 30) + (0.5 * minute); // 12 часов = 360 градусов, 1 час = 30 градусов
        const minAngle = (minute * 6) + (0.1 * second); // 60 минут = 360 градусов, 1 минута = 6 градусов
        const secAngle = second * 6;                    // 60 секунд = 360 градусов, 1 секунда = 6 градусов
    
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
        minHand.style.transform = `rotate(${minAngle}deg)`;
        secHand.style.transform = `rotate(${secAngle}deg)`;
    }
    
    // Вызываем функцию обновления часов каждую секунду
    setInterval(updateClock, 1000);
    
    // Вызываем функцию обновления часов сразу при загрузке страницы
    updateClock();
}


function Task2(){
    const hour = document.getElementsByClassName("hour-clock2");
    const min = document.getElementsByClassName("min-clock2");
    const sec = document.getElementsByClassName("sec-clock2");

    const imgs = new Array("img/0.gif", "img/1.gif", "img/2.gif", "img/3.gif", "img/4.gif", "img/5.gif", "img/6.gif", "img/7.gif", "img/8.gif", "img/9.gif")

    const time_start = new Date();
    let hour_start = time_start.getHours();
    let min_start = time_start.getMinutes(); 
    let sec_start = time_start.getSeconds();

    function ChangeImg(time_now) {
        time_str = time_now.toString().slice('');

        if (time_str.length == 1) {
            time_str = ['0', time_str[0]]
        }

        let time_int = [parseInt(time_str[0]), parseInt(time_str[1])]
        return [imgs[time_int[0]], imgs[time_int[1]]]
    }

    function ChangeTime(){
        let time_now = new Date();
        let hour_now = time_now.getHours();
        let min_now = time_now.getMinutes(); 
        let sec_now = time_now.getSeconds();

        if (sec_now - sec_start >= 1 || sec_now - sec_start >= -59) {
            sec_start = sec_now
            sec[0].src = ChangeImg(sec_now)[0]
            sec[1].src = ChangeImg(sec_now)[1]
        }
        
        if (min_now - min_start >= 1 || min_now - min_start >= -59) {
            min_start = min_now
            min[0].src = ChangeImg(min_now)[0]
            min[1].src = ChangeImg(min_now)[1]
        }

        if (hour_now - hour_start >= 1 || hour_now - hour_start >= -23) {
            hour_start = hour_now
            hour[0].src = ChangeImg(hour_now)[0]
            hour[1].src = ChangeImg(hour_now)[1]
        }
    }
    setInterval(ChangeTime, 1000);
    ChangeTime();
}

Task1();
Task2();