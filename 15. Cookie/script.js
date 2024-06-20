function checkFormValidity(form) {
    let password1 = form.elements['text_password1'].value;
    let password2 = form.elements['text_password2'].value;
    if (password1.length < 6 || !/\d/.test(password1) || !/[a-zA-Z]/.test(password1) || password1 !== password2) {
        alert("Пароль должен содержать не менее 6 символов, включать буквы и цифры, а также совпадать с повторенным паролем.");
        return false;
    }
    let fullName = form.elements['fullname'].value;
    if (!fullName.trim()) {
        alert("Введите полное имя (ФИО).");
        return false;
    }
    let email = form.elements['e_mail'].value;
    if (!email.includes('@')) {
        alert("Введите корректный адрес электронной почты.");
        return false;
    }
    return true;
}

function saveFormToCookie() {
    let form = document.forms.frm1;
    let formData = {};
    if (!checkFormValidity(form)) return;
    for (let i = 0; i < form.elements.length; i++) {
        let field = form.elements[i];
        if (field.type === 'checkbox') {
            formData[field.name] = field.checked ? '1' : '0';
        } else {
            formData[field.name] = encodeURIComponent(field.value);
        }
    }
    document.cookie = "formData=" + JSON.stringify(formData) + ";path=/;";
}

function fillFormFromCookie() {
    let form = document.forms.frm1;
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith("formData=")) {
            let formData = JSON.parse(decodeURIComponent(cookie.substring("formData=".length)));
            for (let fieldName in formData) {
                if (formData.hasOwnProperty(fieldName)) {
                    let field = form.elements[fieldName];
                    if (field) {
                        if (field.type === 'checkbox') {
                            field.checked = formData[fieldName] === '1';
                        } else {
                            field.value = decodeURIComponent(formData[fieldName]);
                        }
                    }
                }
            }
            break; 
        }
    }
}
fillFormFromCookie();
let submitButton = document.querySelector('input[type="button"]');
if (submitButton) {
    submitButton.addEventListener('click', saveFormToCookie);
}