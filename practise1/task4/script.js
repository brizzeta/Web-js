const people = [
    { firstname: 'Mark', lastname: 'Zuckerberg', age: 34, company: 'Facebook' },
    { firstname: 'Larry', lastname: 'Page', age: 45, company: 'Google' },
    { firstname: 'Timothy', lastname: 'Cook', age: 57, company: 'Apple' },
    { firstname: 'Bill', lastname: 'Gates', age: 62, company: 'Microsoft' }
];

function sortByParam(param) {
    return [...people].sort((a, b) => 
        typeof a[param] === 'string' ? 
        a[param].localeCompare(b[param]) : a[param] - b[param]);
}

const sorter = [sortByParam('firstname'), sortByParam('lastname'), sortByParam('age'), sortByParam('company')]
const th = document.querySelectorAll('th')

for (let i = 0; i < th.length; i++) {
    th[i].addEventListener('click', () => {
        const table = document.querySelector("table");

        for (let j = table.rows.length - 1; j > 0; j--) {
            table.deleteRow(j);
        }
    
        for (let k = 0; k < 4; k++) {
            const row = table.insertRow(-1); 
            for (let j = 0; j < 4; j++) {
                const cell = row.insertCell(j); 
                cell.innerHTML = sorter[i][k][Object.keys(sorter[i][k])[j]];
            }
        }
    })
}

const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
});
  
th[0].dispatchEvent(event);