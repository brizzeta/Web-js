/* const input = document.querySelector("input");
let inputDate;

Date.prototype.daysInMonth = function() {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

input.addEventListener('change', function(event) {
    let inputDate = event.target.value;
    const date = new Date(inputDate)
    const getFisrtDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

    let d = 1;

    
});


 */
function generateCalendar() {
    var dateInput = document.getElementById("trip-start").value;
    var date = new Date(dateInput);
    var year = date.getFullYear();
    var month = date.getMonth();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    var calendarHTML = "<h2>" + date.toLocaleDateString('default', { month: 'long' }) + " " + year + "</h2>";
    calendarHTML += "<table>";
    calendarHTML += "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>";

    var firstDayOfWeek = new Date(year, month, 1).getDay();
    calendarHTML += "<tr>";
    for (var i = 0; i < firstDayOfWeek; i++) {
        calendarHTML += "<td></td>";
    }

    for (var day = 1; day <= daysInMonth; day++) {
        calendarHTML += "<td>" + day + "</td>";
        if ((day + firstDayOfWeek) % 7 === 0) {
            calendarHTML += "</tr><tr>";
        }
    }

    calendarHTML += "</tr>";
    calendarHTML += "</table>";

    document.getElementById("calendar").innerHTML = calendarHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("trip-start").addEventListener("input", generateCalendar);
    generateCalendar();
});