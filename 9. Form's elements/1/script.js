/* const login = document.getElementById("login").value;
const passw = document.getElementById("passw").value;
const confpassw = document.getElementById("confpassw").value;
const name = document.getElementById("name").value;
const gender = document.querySelector('input[name="gender"]:checked');
const specializ = document.querySelectorAll('input[name="specializ"]:checked');
const job = document.getElementById('job'); */

function checkFullness(inputs, spans) {
    let end = false
    for (i in [0,1,2,3]) {
        if (!inputs[i]) {
            spans[i].textContent = `Не заполнено.`
            spans[i].style.color = 'red'
            end = true
        }
    }
    if (!inputs[4]) {
        spans[4].textContent = `Не выбрано.`
        spans[4].style.color = 'red'
        end = true
    }
    if (inputs[5].length === 0) {
        spans[5].textContent = `Не выбрано.`
        spans[5].style.color = 'red'
        end = true
    }
    if (inputs[6].value === '0') {
        spans[6].textContent = `Не выбрано.`
        spans[6].style.color = 'red'
        end = true
    }

    if (end === true) return
}


function cleanSpans(spans) {
    for(i in spans) {
        spans[i].textContent = ''
    }
}

document.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const inputs = [
        document.getElementById("login").value,
        document.getElementById("passw").value,
        document.getElementById("check").value,
        document.getElementById("name").value,
        document.querySelector('input[name="gender"]:checked'),
        document.querySelectorAll('.specializ:checked'),
        document.getElementById('job'),
    ]

    const spans = document.querySelectorAll('span')
    cleanSpans(spans)
    checkFullness(inputs, spans)


    if(inputs[1].length < 3 || inputs[1].length > 10){
        spans[1].textContent = "Пароль должен состоять из 3-10 символов."
        spans[1].style.color = 'red'
        return;
    }

    if(inputs[1] !== inputs[2]){
        spans[2].textContent = "Пароли не совпадают."
        spans[2].style.color = 'red'
        return;
    }

    let specializes = [];
    for (const i of inputs[5]) {
        specializes.push(i.value);
    }
    specializes = specializes.join(', ');

    const tableWindow = window.open('','','width=500,height=500');
    const table = `
        <table>
            <tr>
                <th>Логин</th>
                <td>${inputs[0]}</td>
            </tr>
            <tr>
                <th>Полное имя</th>
                <td>${inputs[3]}</td>
            </tr>
            <tr>
                <th>Пол</th>
                <td>${inputs[4].value}</td>
            </tr>
            <tr>
                <th>Специализация</th>
                <td>${specializes}</td>
            </tr>
            <tr>
                <th>Должность</th>
                <td>${inputs[6].value}</td>
            </tr>
        </table>
    `;
    tableWindow.document.write(table);

    const link = tableWindow.document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css'; 
    tableWindow.document.head.appendChild(link);
})