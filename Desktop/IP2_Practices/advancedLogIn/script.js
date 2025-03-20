document.addEventListener("DOMContentLoaded", function () {

    // Signup
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("signup-name").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (localStorage.getItem(email)) {
                alert("Email already registered!");
                return;
            }

            const user = {
                name,
                email,
                password,
                lastLogin: new Date().toLocaleString()
            };

            localStorage.setItem(email, JSON.stringify(user));
            alert("Signup successful! Please login.");
            window.location.href = "index.html";
        });
    }

    // Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            const user = JSON.parse(localStorage.getItem(email));
            if (!user || user.password !== password) {
                alert("Invalid email or password.");
                return;
            }

            user.lastLogin = new Date().toLocaleString();
            localStorage.setItem(email, JSON.stringify(user));

            sessionStorage.setItem("loggedInUser", email);
            window.location.href = "profile.html";
        });
    }

    // Profile Page
    const userEmail = sessionStorage.getItem("loggedInUser");
    if (userEmail) {
        const user = JSON.parse(localStorage.getItem(userEmail));
        if (user) {
            document.getElementById("user-name").textContent = user.name;
            document.getElementById("user-email").textContent = user.email;
            document.getElementById("last-login").textContent = user.lastLogin;

            // Update Profile
            document.getElementById("update-form").addEventListener("submit", function (event) {
                event.preventDefault();
                const newName = document.getElementById("update-name").value;
                const newPassword = document.getElementById("update-password").value;

                if (newName) user.name = newName;
                if (newPassword) user.password = newPassword;

                localStorage.setItem(userEmail, JSON.stringify(user));
                alert("Profile updated!");
                location.reload();
            });

            // Logout
            document.getElementById("logout").addEventListener("click", function () {
                sessionStorage.removeItem("loggedInUser");
                window.location.href = "index.html";
            });
        }
    } else if (window.location.pathname.includes("profile.html")) {
        window.location.href = "index.html";
    }
});
