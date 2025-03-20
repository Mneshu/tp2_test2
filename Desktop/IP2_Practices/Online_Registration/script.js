// Function to show "Other" title field
function checkOtherTitle() {
    let title = document.getElementById("title").value;
    let otherTitleInput = document.getElementById("otherTitle");

    if (title === "Other") {
        otherTitleInput.style.display = "block";
    } else {
        otherTitleInput.style.display = "none";
    }
}

// Function to validate SA ID and determine birth day
function validateID() {
    let idNumber = document.getElementById("idNumber").value;
    let birthDayOutput = document.getElementById("birthDayOutput");

    if (idNumber.length >= 6) {
        let birthYear = idNumber.substring(0, 2);
        let birthMonth = idNumber.substring(2, 4);
        let birthDay = idNumber.substring(4, 6);
        let fullYear = birthYear >= "00" && birthYear <= "25" ? "20" + birthYear : "19" + birthYear;

        let birthDate = new Date(`${fullYear}-${birthMonth}-${birthDay}`);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayOfWeek = days[birthDate.getDay()];

        if (!isNaN(birthDate.getTime())) {
            birthDayOutput.textContent = `Born on a ${dayOfWeek}`;
        } else {
            birthDayOutput.textContent = "Invalid ID Number";
        }
    } else {
        birthDayOutput.textContent = "";
    }
}

// Function to validate password strength
function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordMessage = document.getElementById("passwordMessage");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\*\@\+\#]).{8,12}$/;

    if (password.length < 8 || password.length > 12) {
        passwordMessage.textContent = "Password must be 8-12 characters long.";
    } else if (!regex.test(password)) {
        passwordMessage.textContent = "Must include uppercase, lowercase & special (*@+#).";
    } else {
        passwordMessage.textContent = "";
    }
}

// Function to check if passwords match
function checkPasswordMatch() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordMessage = document.getElementById("confirmPasswordMessage");

    if (confirmPassword && password !== confirmPassword) {
        confirmPasswordMessage.textContent = "Passwords do not match!";
    } else {
        confirmPasswordMessage.textContent = "";
    }
}

// Form submission handler
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match! Please check and try again.");
    }
});
