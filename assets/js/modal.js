// This code handles the modal for the contact form. It opens when the "Kontakt" link is clicked, and closes when the close button or outside of the modal is clicked. It also validates the form before submission.    
const kontaktLink = document.querySelector('a[href="#contact"]');
const kontaktModal = document.getElementById("kontaktModal");
const closeBtn = kontaktModal.querySelector(".close");
const kontaktForm = document.getElementById("kontaktForm");

kontaktLink.addEventListener("click", function (e) {
    e.preventDefault();
    kontaktModal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    kontaktModal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === kontaktModal) {
        kontaktModal.style.display = "none";
    }
});

kontaktForm.addEventListener("submit", function (e) {
    if (!kontaktForm.checkValidity()) {
        e.preventDefault(); // HTML5 validering vil vise fejl
    } else {
        alert("Tak for din henvendelse!");
        kontaktModal.style.display = "none";
        kontaktForm.reset();
        e.preventDefault(); // Fjern dette hvis du vil sende data videre til backend
    }
});