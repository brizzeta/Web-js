const th = document.querySelectorAll('th');
const td = document.querySelectorAll('td');

function closeTd() {
    td.forEach((element) => { element.style.display = 'none' });
}

th.forEach((element, index) => { 
    element.addEventListener('click', () => {
        closeTd();
        td[index].style.display = "table-row";
        td[index].style.border = "2px solid black !important";
        td[index].style.padding = "10px !important";
    });
});
