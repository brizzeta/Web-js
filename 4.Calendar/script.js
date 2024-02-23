const input = document.querySelector("input");
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