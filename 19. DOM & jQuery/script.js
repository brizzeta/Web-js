let gameTimer, openedCards = [], cardImages = [], gameInProgress = false;

function startGameTimer() {
    let seconds = 0;
    gameTimer = setInterval(function() {
        seconds++;
        let minutes = Math.floor(seconds / 60);
        let remainderSeconds = seconds % 60;
        $('.timer').text((minutes < 10 ? '0' : '') + minutes + ':' + (remainderSeconds < 10 ? '0' : '') + remainderSeconds);
    }, 1000);
}

function initializeGame(){
    $('.card').css('background-image', 'url(img/background.png)');
    startGameTimer();
    gameInProgress = true;
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < 2; j++) cardImages.push('img/' + i + '.png');
    }
    shuffleArray(cardImages);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function checkGameWin() {
    var allMatched = $('.card').toArray().every(function(element) {
        return $(element).hasClass('matched');
    });
    if (allMatched) {
        gameInProgress = false;
        clearInterval(gameTimer);
        $('.game-board').css('visibility', 'visible');
        $('.game-board').css('animation', 'appear .3s linear forwards');
        $('.button').val('Начать заново');
    }
}

$('.button').click(function() {
    if ($(this).val() === 'Начать') {
        initializeGame();
        $(this).val('Закончить');
    } else if ($(this).val() === 'Закончить') {
        $('.card').each(function(index) {
            clearInterval(gameTimer);
            $(this).css('background-image', 'url(' + cardImages[index] + ')');
            $(this).effect("fade", {}, 150);
            gameInProgress = false;
        });
        $(this).val('Начать заново');
    } else location.reload();
});

$('.card').on('click', function () {
    if (openedCards.length < 2 && !$(this).hasClass('matched') && gameInProgress) {
        openedCards.push($(this));
        let index = $('.card').index(this);
        $(this).css('background-image', 'url(' + cardImages[index] + ')');
        $(this).effect("fade", {}, 150);
        if (openedCards.length === 2) {
            var card1Index = $('.card').index(openedCards[0]);
            var card2Index = $('.card').index(openedCards[1]);
            if (cardImages[card1Index] !== cardImages[card2Index]) {
                setTimeout(function () {
                    openedCards.forEach(function (card) {
                        card.css('background-image', 'url(img/background.png)');
                        openedCards = [];
                    });
                }, 750);
            } else {
                openedCards.forEach(function (card) {
                    card.addClass('matched');
                    openedCards = [];
                });
            }
        }
        checkGameWin();
    }
});