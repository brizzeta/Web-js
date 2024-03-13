const ques_num_text = document.getElementById('ques_num')
const ques_text = document.getElementById('ques_text')
const input =  document.querySelectorAll(".input")
const answ = document.querySelectorAll("label")
const butt = document.getElementById('submit')
const time_text = document.getElementById('time')

let time = 10
let ques_num = 1
const correct = [3, 3, 1, 0, 2]
let score = 0

const ques = [
    ['Какая функция используется для определения длины строки в JavaScript?', [
        'lengthOf()',
        'sizeOf()',
        'strLength()',
        'length()'
    ]],
    ['Какой оператор используется для строгого сравнения значений и их типов в JavaScript?', [
        '==',
        '===',
        '=',
        '!='
    ]],
    ['Какой метод преобразует строку в число в JavaScript?', [
        'parseInt()',
        'toString()',
        'toFloat()',
        'Number()'
    ]],
    ['Какая структура данных используется для хранения уникальных значений в JavaScript?', [
        'Массив (Array)',
        'Объект (Object)',
        'Множество (Set)',
        'Словарь (Dictionary)'
    ]]
]

function checkAnsw() {
    if (input[correct[ques_num-1]].checked) {
        score += 1
        console.log('+1')
    }
}

function changeQues() {
    if (ques_num < 5) {
        time = 10
        number = ques_num+1
        ques_num_text.textContent = number.toString()
        ques_text.textContent = ques[ques_num-1][0]

        for (i in answ) {
            answ[i].textContent = ques[ques_num-1][1][i]
        }
        checkAnsw()
        ques_num += 1
    }
    else {
        checkAnsw()
        alert(`Your score: ${score}/5`)
        butt.removeEventListener('click', changeQues)
        clearInterval(time_interval)
    }
}

const time_interval = setInterval(() => {
    if (time == 0) {
        changeQues()
    }
    else {
        time -= 1
    }
    time_text.textContent = time.toString()
}, 1000)


butt.addEventListener('click', changeQues)

