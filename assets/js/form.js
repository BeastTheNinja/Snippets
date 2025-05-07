document.getElementById('firstname').addEventListener('input', validateFirstName);
document.getElementById('lastname').addEventListener('input', validateLastName);
document.getElementById('address').addEventListener('input', validateAddress);
document.getElementById('zipcode').addEventListener('input', validateZipcode);
document.getElementById('email').addEventListener('input', validateEmail);

function validateFirstName() {
    const firstName = document.getElementById('firstname').value;
    if (firstName.length < 2) {
        // alert('Fornavn skal være mindst 2 karakterer');
    }
}

function validateLastName() {
    const lastName = document.getElementById('lastname').value;
    if (lastName.length < 2) {
        // alert('Efternavn skal være mindst 2 karakterer');
    }
}

function validateAddress() {
    const address = document.getElementById('address').value;
    if (address.length < 5) {
        // alert('Adresse skal være mindst 5 karakterer');
    }
}

function validateZipcode() {
    const zipcode = document.getElementById('zipcode').value;
    if (!/^\d+$/.test(zipcode)) {
        // alert('Postnummer skal kun indeholde tal');
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
        // alert('Indtast en gyldig emailadresse');
    }
}

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop formularet fra at blive sendt, før validering
    validateForm();
});

function validateForm() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const address = document.getElementById('address').value;
    const zipcode = document.getElementById('zipcode').value;
    const email = document.getElementById('email').value;

    if (firstName.length >= 2 && lastName.length >= 2 && address.length >= 5 && /^\d+$/.test(zipcode) && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Formularen er valideret korrekt');
        // Eventuelt sende formularen eller noget andet
    } else {
        alert('Udfyld venligst alle felter korrekt');
    }
}