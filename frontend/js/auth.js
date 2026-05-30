const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

// REGISTER
if (registerForm) {
registerForm.addEventListener('submit', async function(e) {
e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const level = document.getElementById('level').value;

    const data = { name, email, password, level };

    try {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message);

    } catch (error) {
        console.log(error);
        alert("Error in registration");
    }
});

}

// LOGIN
if (loginForm) {
loginForm.addEventListener('submit', async function(e) {
e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = { email, password };

    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (res.ok) {
            alert(result.message);
            window.location.href = "dashboard.html";
        } else {
            alert(result.message);
        }

    } catch (error) {
        console.log(error);
        alert("Error in login");
    }
});

}
