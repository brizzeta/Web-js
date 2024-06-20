document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.querySelector('#calendar tbody');
    const datePicker = document.getElementById('date-picker');

    const currentDate = new Date();
    generateCalendar(currentDate);

    datePicker.addEventListener('change', (event) => {
        const selectedDate = new Date(event.target.value);
        generateCalendar(selectedDate);
    });

    function generateCalendar(date) {
        calendarContainer.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDayOfLastMonth = new Date(year, month, 0).getDate();

        const today = new Date();
        const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

        // Set background image according to season
        setSeasonBackground(month);

        let dayCounter = 1;
        let previousMonthDayCounter = lastDayOfLastMonth - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) + 1;

        let row = document.createElement('tr');

        // Fill previous month's days
        for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
            const dayCell = document.createElement('td');
            dayCell.textContent = previousMonthDayCounter++;
            dayCell.classList.add('outside-month');
            row.appendChild(dayCell);
        }

        // Fill current month's days
        for (let i = 1; i <= lastDateOfMonth; i++) {
            if (row.children.length === 7) {
                calendarContainer.appendChild(row);
                row = document.createElement('tr');
            }
            const dayCell = document.createElement('td');
            dayCell.textContent = i;
            if (isCurrentMonth && i === today.getDate()) {
                dayCell.classList.add('today');
            }
            if (i === date.getDate()) {
                dayCell.classList.add('selected-day');
            }
            row.appendChild(dayCell);
        }

        // Fill next month's days
        let nextMonthDayCounter = 1;
        while (row.children.length < 7) {
            const dayCell = document.createElement('td');
            dayCell.textContent = nextMonthDayCounter++;
            dayCell.classList.add('outside-month');
            row.appendChild(dayCell);
        }

        calendarContainer.appendChild(row);
    }

    function setSeasonBackground(month) {
        const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
        document.body.className = seasons[month];
    }
});
