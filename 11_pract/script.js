const formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    printData: function () {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d*$/;
    return phoneRegex.test(phone);
}

function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const comment = document.getElementById("comment").value.trim();

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("commentError").textContent = "";

    let isValid = true;

    // Validation checks
    if (!name) {
        document.getElementById("nameError").textContent = "Имя не должно быть пустым.";
        isValid = false;
    }
    if (!email || !validateEmail(email)) {
        document.getElementById("emailError").textContent = "Введите корректный e-mail.";
        isValid = false;
    }
    if (phone && !validatePhone(phone)) {
        document.getElementById("phoneError").textContent = "Телефон должен содержать только цифры.";
        isValid = false;
    }
    if (!comment) {
        document.getElementById("commentError").textContent = "Комментарий не должен быть пустым.";
        isValid = false;
    }

    if (isValid) {
        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date;
        formData.comment = comment;

        formData.printData();
    }
}
