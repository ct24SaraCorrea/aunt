// Asegúrate de incluir firebase-app.js, firebase-auth.js y firebase-config.js antes de este archivo

// Simulación de usuarios registrados (solo para demo)
const users = JSON.parse(localStorage.getItem('users') || '{}');

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            message.style.color = '#4caf50';
            message.textContent = '¡Bienvenido! Redirigiendo...';
            setTimeout(() => {
                window.location.href = 'bienvenida.html';
            }, 1000);
        })
        .catch((error) => {
            message.style.color = '#e57373';
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                message.textContent = 'Usuario o contraseña incorrectos.';
            } else {
                message.textContent = error.message;
            }
        });
    return false;
}

function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const message = document.getElementById('register-message');

    if (password !== confirm) {
        message.style.color = '#e57373';
        message.textContent = 'Las contraseñas no coinciden.';
        return false;
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            message.style.color = '#4caf50';
            message.textContent = '¡Registro exitoso! Redirigiendo...';
            setTimeout(() => {
                window.location.href = 'bienvenida.html';
            }, 1000);
        })
        .catch((error) => {
            message.style.color = '#e57373';
            if (error.code === 'auth/email-already-in-use') {
                message.textContent = 'El usuario ya existe.';
            } else if (error.code === 'auth/invalid-email') {
                message.textContent = 'Correo electrónico inválido.';
            } else if (error.code === 'auth/weak-password') {
                message.textContent = 'La contraseña es muy débil.';
            } else {
                message.textContent = error.message;
            }
        });
    return false;
} 