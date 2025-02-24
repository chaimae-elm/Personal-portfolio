document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire si des erreurs existent

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

    // Validation du nom d'utilisateur
    if (username.value.length < 3) {
        showError(username, "Le nom d'utilisateur doit contenir au moins 3 caractères.");
        isValid = false;
    } else {
        hideError(username);
    }

    // Validation de l'email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Veuillez entrer une adresse email valide.");
        isValid = false;
    } else {
        hideError(email);
    }

    // Validation du mot de passe
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password.value)) {
        showError(password, "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
        isValid = false;
    } else {
        hideError(password);
    }

    // Vérification de la confirmation du mot de passe
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Les mots de passe ne correspondent pas.");
        isValid = false;
    } else {
        hideError(confirmPassword);
    }

    // Si tout est valide, afficher un message de succès
    if (isValid) {
        alert("Compte créé avec succès !");
        document.getElementById("signupForm").reset();
    }
});

// Fonction pour afficher un message d'erreur
function showError(input, message) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
}

// Fonction pour cacher le message d'erreur
function hideError(input) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = "";
}
