// register.js

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const key = document.getElementById('key').value;

    fetch('/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password, key })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            alert("Registered successfully!");
            window.location = "login.html";
        } else {
            alert(data.message);
        }
    });
});
