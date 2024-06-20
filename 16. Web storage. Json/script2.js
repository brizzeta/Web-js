const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    const greetingElement = document.querySelector('h3');
    greetingElement.textContent = `Hello, ${userData.email}!`;

    const nameInput = document.querySelector('input[placeholder="Name"]');
    const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
    const birthYearInput = document.querySelector('input[placeholder="yyyy"]');
    const genderSelect = document.getElementById('genderSelect');
    const phoneInput = document.querySelector('input[placeholder="+0000000000"]');
    const skypeInput = document.querySelector('input[placeholder="Skype"]');

    const saveButton = document.querySelector('.submit-button2');
    saveButton.addEventListener('click', function () {
        const nameValue = nameInput.value.trim();
        if(nameValue === ''){
            document.getElementById("firstNameWarning").innerHTML = "Field is empty!";
            document.getElementById("firstNameWarning").style.visibility = "visible";
            return;
        } else if(nameValue.length > 20){
            document.getElementById("firstNameWarning").innerHTML = "Name is too long!";
            document.getElementById("firstNameWarning").style.visibility = "visible";
            return;
        } else if(!/^[a-zA-Z]+$/.test(nameValue)){
            document.getElementById("firstNameWarning").innerHTML = "Name should not contain numbers!";
            document.getElementById("firstNameWarning").style.visibility = "visible";
            return;
        }
        document.getElementById("firstNameWarning").style.visibility = "hidden";

        const lastNameValue = lastNameInput.value.trim();
        if(lastNameValue === ''){
            document.getElementById("lastNameWarning").innerHTML = "Field is empty!";
            document.getElementById("lastNameWarning").style.visibility = "visible";
            return;
        } else if(lastNameValue.length > 30){
            document.getElementById("lastNameWarning").innerHTML = "Last name is too long!";
            document.getElementById("lastNameWarning").style.visibility = "visible";
            return;
        } else if(!/^[a-zA-Z]+$/.test(lastNameValue)){
            document.getElementById("lastNameWarning").innerHTML = "Last name should not contain numbers!";
            document.getElementById("lastNameWarning").style.visibility = "visible";
            return;
        }
        document.getElementById("lastNameWarning").style.visibility = "hidden";

        const birthYearValue = birthYearInput.value.trim();
        const currentYear = new Date().getFullYear();
        if(birthYearValue === ''){
            document.getElementById("birthYearWarning").innerHTML = "Field is empty!";
            document.getElementById("birthYearWarning").style.visibility = "visible";
            return;
        } else if(parseInt(birthYearValue) < 1890){
            document.getElementById("birthYearWarning").innerHTML = "That's a long time to live!";
            document.getElementById("birthYearWarning").style.visibility = "visible";
            return;
        } else if(parseInt(birthYearValue) > currentYear){
            document.getElementById("birthYearWarning").innerHTML = "Can't be born in the future!";
            document.getElementById("birthYearWarning").style.visibility = "visible";
            return;
        } else if(!/^\d{4}$/.test(birthYearValue)){
            document.getElementById("birthYearWarning").innerHTML = "Should be 4 digits!";
            document.getElementById("birthYearWarning").style.visibility = "visible";
            return;
        }
        document.getElementById("birthYearWarning").style.visibility = "hidden";

        const phoneValue = phoneInput.value.trim();
        if (phoneValue !== '' && (!/^\+?\d{10,12}$/.test(phoneValue))) {
            document.getElementById("phoneNumberWarning").innerHTML = "Invalid phone format!";
            document.getElementById("phoneNumberWarning").style.visibility = "visible";
            return;
        }
        document.getElementById("phoneNumberWarning").style.visibility = "hidden";

        const detailedUserData = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            birthYear: birthYearInput.value,
            gender: genderSelect.value,
            phone: phoneInput.value,
            skype: skypeInput.value
        };
        console.log("Data saved!");
        localStorage.setItem('detailedUserData', JSON.stringify(detailedUserData));
    });

    const exitButton = document.getElementById('exitLink');
    exitButton.addEventListener('click', function () {
        localStorage.removeItem('userData');
        window.location.href = 'index.html';
    });
} else window.location.href = 'index.html';