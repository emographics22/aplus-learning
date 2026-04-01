// login.js

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            // Save username for dashboard
            localStorage.setItem('username', username);
            window.location = "dashboard.html";
        } else {
            alert("Wrong login");
        }
    });
});
