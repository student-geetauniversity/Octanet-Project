document.addEventListener("DOMContentLoaded", function() {
    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // You can add your signup logic here
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            // Redirect to dashboard or display message based on signup logic
        });
    }
});
