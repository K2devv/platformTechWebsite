
var navLinks = document.getElementById("navLinks")
        
        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        function toggleLoginPage() {
            var loginContainer = document.getElementById("login-container");
            loginContainer.innerHTML = ""; // Clear previous content
            if (loginContainer.style.display === "none" || loginContainer.style.display === "") {
                loginContainer.style.display = "block";
                loginContainer.innerHTML = '<object type="text/html" data="login.html" width="100%" height="100%"></object>';
            } else {
                loginContainer.style.display = "none";
            }
        }

        // Function to handle login form submission
function handleLogin() {
    // Get input values
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Here you should perform client-side validation if needed

    // Here you would typically make an AJAX request to your server to handle authentication
    // For the sake of simplicity, let's assume authentication is successful
    // In a real application, you would verify credentials on the server

    // Redirect to index.html after successful login
    window.location.href = "index.html";
}

// Function to handle signup form submission
function handleSignup() {
    // Get input values
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    // Here you should perform client-side validation if needed

    // Here you would typically make an AJAX request to your server to handle signup
    // For simplicity, let's assume signup is successful
    // In a real application, you would create a new user in your database

    // Redirect to index.html after successful signup
    window.location.href = "index.html";
}
