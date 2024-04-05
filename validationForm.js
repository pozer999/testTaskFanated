const form = document.getElementById("registrationForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const date = document.getElementById("date");
const submitButton = document.getElementById("submitButton");

// let errorFirst = document.getElementById('errorFirst');
//     let errors = {
//         'Имя должно содержать только символы и быть не менее 2 символов в длину': false
// };

firstName.onblur = function () {
    if (!/^[a-zA-Z]+$/.test(firstName.value) || firstName.value.length < 2) {
        firstName.classList.add("invalid");
        errorFirst.innerHTML = "Имя должно содержать только символы и быть не менее 2 символов в длину!";
    }
};

firstName.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        errorFirst.innerHTML = "";
    }
};
lastName.onblur = function () {
    if (!/^[a-zA-Z]+$/.test(lastName.value) || lastName.value.length < 2) {
        lastName.classList.add("invalid");
        errorLast.innerHTML = "Фамилия должна содержать только символы и быть не менее 2 символов в длину!";
    }
};

lastName.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        errorLast.innerHTML = "";
    }
};

email.onblur = function () {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add("invalid");
        errorEmail.innerHTML = "Неверный формат email!";
    }
};

email.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        errorEmail.innerHTML = "";
    }
};

password.onblur = function () {
    if (!(password.value.length >= 8 && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password.value))) {
        password.classList.add("invalid");
        errorPassword.innerHTML = "Пароль должен содержать не менее 8 символов, хотя бы одну цифру, заглавную и строчную буквы и символ!";
    }
};

password.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        errorPassword.innerHTML = "";
    }
};

confirmPassword.onblur = function () {
    if (!(password.value === confirmPassword.value)) {
        confirmPassword.classList.add("invalid");
        errorConfirm.innerHTML = "Пароли не совпадают!";
    }
};

confirmPassword.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        errorConfirm.innerHTML = "";
    }
};

date.onblur = function () {
    if (!(new Date().getFullYear() - new Date(date.value).getFullYear() >= 18)) {
        date.classList.add("invalid");
        errorDate.innerHTML = "Вам должно быть не менее 18 лет!";
    }
};

date.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        errorDate.innerHTML = "";
    }
};

form.addEventListener("input", () => {
    if (
        /^[a-zA-Z]+$/.test(firstName.value) &&
        /^[a-zA-Z]+$/.test(lastName.value) &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
        password.value.length >= 8 &&
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password.value) &&
        password.value === confirmPassword.value &&
        new Date().getFullYear() - new Date(date.value).getFullYear() >= 18
    ) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Форма отправлена успешно!");
});
