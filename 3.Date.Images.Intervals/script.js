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


Task1();