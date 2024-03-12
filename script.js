function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailOrMobile = document.getElementById("emailOrMobile").value;
    var password = document.getElementById("password").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (firstName == "" || lastName == "" || emailOrMobile == "" || password == "" || day == "" || month == "" || year == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!validateName(firstName) || !validateName(lastName)) {
        alert("First name and last name cannot contain numbers or special characters");
        return false;
    }

    if (!validateEmailOrMobile(emailOrMobile)) {
        alert("Invalid email or mobile number");
        return false;
    }

    if (!validateDate(day, month, year)) {
        alert("Invalid date. Please enter a valid date.");
        return false;
    }

    return true;
}

function validateName(name) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(name);
}

function validateEmailOrMobile(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^[0-9]{10}$/;
    return emailRegex.test(input) || mobileRegex.test(input);
}

function validateDate(day, month, year) {
    if (!day || !month || !year) {
        return false;
    }

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    if (month < 1 || month > 12) {
        return false;
    }

    if (day < 1 || day > 31) {
        return false;
    }

    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            if (day > 29) {
                return false;
            }
        } else {
            if (day > 28) {
                return false;
            }
        }
    }

    if ([4, 6, 9, 11].includes(month) && day > 30) {
        return false;
    }

    var currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
        return false;
    }

    return true;
}

function populateDays() {
    var daySelect = document.getElementById("day");
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
}

function populateMonths() {
    var monthSelect = document.getElementById("month");
    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.value = i + 1;
        option.text = months[i];
        monthSelect.appendChild(option);
    }
}

function populateYears() {
    var yearSelect = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= currentYear - 100; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
}
populateDays();
populateMonths();
populateYears();
