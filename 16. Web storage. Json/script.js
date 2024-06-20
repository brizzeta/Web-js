const submitButton = document.getElementById('submitButton');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const repeatPasswordInput = document.querySelectorAll('input[type="password"]')[1];

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById("emailWarning").innerHTML = 'Email should contain @ and .!';
        document.getElementById("emailWarning").style.visibility = "visible";
        return;
    }
    document.getElementById("emailWarning").style.visibility = "hidden";

    if(passwordInput.value.length < 6){
        document.getElementById("passwordWarning").innerHTML = 'Password should be more than 6 characters!';
        document.getElementById("passwordWarning").style.visibility = "visible";
        return;
    } else if(!/[a-z]/.test(passwordInput.value)){
        document.getElementById("passwordWarning").innerHTML = 'Password should contain lowercase letters!';
        document.getElementById("passwordWarning").style.visibility = "visible";
        return;
    } else if(!/[A-Z]/.test(passwordInput.value)){
        document.getElementById("passwordWarning").innerHTML = 'Password should contain uppercase letter!';
        document.getElementById("passwordWarning").style.visibility = "visible";
        return;
    } else if(!/\d/.test(passwordInput.value)){
        document.getElementById("passwordWarning").innerHTML = 'Password should contain numbers!';
        document.getElementById("passwordWarning").style.visibility = "visible";
        return;
    }
    document.getElementById("passwordWarning").style.visibility = "hidden";

    if (passwordInput.value !== repeatPasswordInput.value) {
        document.getElementById("repeatPasswordWarning").innerHTML = 'Passwords do not match!';
        document.getElementById("repeatPasswordWarning").style.visibility = "visible";
        return;
    }
    document.getElementById("repeatPasswordWarning").style.visibility = "hidden";

    const userData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'index2.html';
});

const storedUserDataString = localStorage.getItem('userData');
if (storedUserDataString) {
    try {
        const storedUserData = JSON.parse(storedUserDataString);
        if (storedUserData) window.location.href = 'index2.html';
    } catch (error) { console.error('Error parsing data from Local Storage: ', error); }
}