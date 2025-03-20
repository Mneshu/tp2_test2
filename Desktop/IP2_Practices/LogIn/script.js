document.getElementsById("show-signup").addEventListener("click", function(){
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("signup-box").classList.remove("hidden");
})

document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("signup-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
});

// Handle Login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
   let email=document.getElementById("login-email").value;
   let password=document.getElementById("login-password").value;

   if (email=== "user@example.com" && password==="password123")
   {
    alert("Succefully Logged In");
   }else{
    alert("Invalid Credentials");
    
   }
});

// Handle Signup
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.xpreventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    if (!email.includes("@") || email.length < 5) {
        alert("Enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Signup Successful!");
});



