function Marker(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
}

Marker.prototype.renderText = function(text) {
    let displayedText = "";
    for (let char of text) {
        if (char !== " ") {
            if (this.inkLevel >= 1) {
                displayedText += char;
                this.inkLevel -= 1;
            } else {
                alert("Краска закончилась!");
                break;
            }
        } else {
            displayedText += char;
        }
    }
    document.getElementById('outputArea').innerText = displayedText;
};

function RefillableMarker(color, inkLevel) { 
    Marker.call(this, color, inkLevel); 
}

RefillableMarker.prototype = Object.create(Marker.prototype);
RefillableMarker.prototype.refillInk = function() { 
    this.inkLevel = 100; 
};

document.getElementById('displayButton').addEventListener('click', function() {
    const colorInputValue = document.getElementById('colorInput').value.trim();
    const colorRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$|^([a-zA-Z]+)$/;
    if (colorRegex.test(colorInputValue)) {
        document.getElementById('colorBox').style.backgroundColor = colorInputValue;
        document.getElementById('outputArea').style.color = colorInputValue;
    } else {
        alert('Цвет ведден не верно!');
    }

    const textInputValue = document.getElementById('textAreaInput').value.trim();
    if (textInputValue !== "") {
        marker.renderText(textInputValue);
    } else {
        alert("Текст не введен!");
    }
});

document.getElementById('inkLevelButton').addEventListener('click', function() {
    document.getElementById('outputArea').innerText = `Уровень заправки маркера: ${marker.inkLevel}%`;
});

document.getElementById('reloadButton').addEventListener('click', function() {
    marker.refillInk();
    document.getElementById('outputArea').innerText = 'Маркер заправлен';
});

document.getElementById('clearTextButton').addEventListener('click', function() {
    document.getElementById('outputArea').innerText = '';
});

const marker = new RefillableMarker('black', 100);
