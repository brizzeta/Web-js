function Task1() {
    let questions = {
        '2 + 2 = 4': 'yes',
        '7 * 7 = 36': 'no',
        '2(4 + 2) = 16': 'no',
        '3 + 4 * 2 = 14': 'no',
        '3 - 8 = -5': 'yes'
    }
    let answers = []
    let res = 0;

    alert('Please, answer only "Yes" or "No".')

    for (question in questions) {
        while (true) {
            let answer = prompt(question)

            try{
                answer = answer.toLowerCase()

                if (answer == '') {
                    throw "myException";
                }
                answers.push(answer)
                break;
            }
            catch {
                alert('Please, answer only Yes or No.')
            }
        }
    }

    let i = 0;
    for (question in questions) {
        if (questions[question] == answers[i]) {
            res++;
        }
        i++;
    }

    alert(`Your result: ${res/5*100}%`)
}


function Task2() {
    let ban = "0123456789!,«#$%&'()*+-./:;<=>?@[\\]^_`{|}~."
    name_ = prompt('What is your name?')
    for (b of ban) {
        for (n of name_) {
            if (b == n) {
                alert('There is unacceptable symbols')
                break;
            }
        }
    }
}


function Task3() {
    let url;
    let parsedUrl;

    while (true) {
        url = prompt('Enter URL:');
        try {
            parsedUrl = new URL(url);
            break;
        }
        catch {
            alert('Please, try again.')
        }
        
    }
    
    const protocol = parsedUrl.protocol;
    const host = parsedUrl.host;
    const path = parsedUrl.pathname;
    const filename = path.split('/').pop();
    const queryString = parsedUrl.search;

    alert(
    `Протокол: ${protocol}
    Хост: ${host}
    Путь: ${path}
    Имя файла: ${filename}
    Строка запроса: ${queryString}`
    )
}

function Task4() {
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = 'repeat(8, 1fr)'; // 8 строк
    grid.style.gridTemplateColumns = 'repeat(8, 1fr)'; // 8 столбцов
    grid.style.height = "500px";
    grid.style.width = "500px";

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const block = document.createElement('div');

            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    block.style.backgroundColor = "red";
                }
                else {
                    block.style.backgroundColor = "yellow";
                }
            }
            else {
                if (j % 2 === 1) {
                    block.style.backgroundColor = "red";
                }
                else {
                    block.style.backgroundColor = "yellow";
                }
            }
            grid.appendChild(block);
        }
    }
    document.body.appendChild(grid);
}

function main() {
    let answer;
    while (answer != '0') {
        answer = prompt('Which task 1-4? (0 - stop)')
        switch(answer) {
            case '1':
                Task1();
                break;
            case '2':
                Task2();
                break;
            case '3':
                Task3()
                break;
            case '4':
                Task4()
                break;
            default:
                break;
        }
    }
}

main();