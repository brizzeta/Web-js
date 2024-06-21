$(document).ready(function() {
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    // Загрузка вопросов из JSON файла
    $.getJSON('questions.json', function(data) {
        questions = data;
        showQuestion(currentQuestionIndex);
    });

    function showQuestion(index) {
        const question = questions[index];
        let questionHtml = `<div class="question active"><p>${question.question}</p>`;
        $.each(question.choices, function(i, choice) {
            questionHtml += `<label><input type="radio" name="question" value="${choice}"> ${choice}</label>`;
        });
        questionHtml += `<button id="submit-answer">Submit Answer</button></div>`;
        $('#question-container').html(questionHtml);
    }

    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            $('.question').removeClass('active');
            setTimeout(() => {
                showQuestion(currentQuestionIndex);
            }, 500);
        } else {
            showResult();
        }
    }

    function showResult() {
        let userName = prompt("Please enter your name:");
        $('#question-container').html(`<div id="result-message">Congratulations, ${userName}! You scored ${score} out of ${questions.length}.</div>`);
    }

    $('#question-container').on('click', '#submit-answer', function() {
        const selectedAnswer = $('input[name="question"]:checked').val();
        if (selectedAnswer) {
            if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                score++;
            }
            $('#submit-answer').hide();
            $('#next-question').show().click(function() {
                $('#next-question').hide();
                showNextQuestion();
            });
        } else {
            alert("Please select an answer before submitting.");
        }
    });
});
