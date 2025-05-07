
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        alert('Registrering succesfuld for ' + username);
        window.location.href = "index.html"; // Skift til den ønskede side
    } else {
        alert('Udfyld alle felter');
    }
}