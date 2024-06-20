$(".custom-button").on("click", function(){
    let length = $("#lengthInput").val();
    if (isNaN(length) || length < 1) {
        alert("Введите корректную длину строки (число не меньше 1).");
        return;
    }
    let options = $(".custom-checkbox:checked").map(function(){
        return this.value;
    }).get();
    if (options.length === 0) {
        alert("Выберите хотя бы одну опцию.");
        return;
    }
    let result = generateRandomString(length, options);
    $(".custom-output[type='text']").val(result);
});

function generateRandomString(length, options) {
    let charset = "", result = "";
    if (options.indexOf("numbers") !== -1) charset += "0123456789";
    if (options.indexOf("uppercase") !== -1) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.indexOf("lowercase") !== -1) charset += "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }
    return result;
}