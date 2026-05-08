// Stored credentials in a JavaScript object
const users = {
    username: 'Cruz',
    password: '1010',
};

// Get form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    
    // Validate credentials
    if (enteredUsername === users.username && enteredPassword === users.password) {
        // Success - redirect to page
        window.location.href = 'page.html';
    } else {
        // Error
        messageDiv.textContent = '✗ Invalid username or password!';
        messageDiv.className = 'message error';
        passwordInput.value = '';
    }
});
