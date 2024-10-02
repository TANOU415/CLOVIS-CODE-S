// Fonction pour envoyer le formulaire de contact
function envoyerFormulaire() {
    // Récupérer les valeurs des champs du formulaire
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validation des champs (vous pouvez ajouter plus de validations si nécessaire)
    if (nom.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return; // Arrêter la fonction si un champ est vide
    }

    // Construction de l'objet FormData pour envoyer les données au serveur
    var formData = new FormData();
    formData.append("nom", nom);
    formData.append("email", email);
    formData.append("message", message);

    // Envoi des données au serveur via une requête HTTP POST
    fetch("votre-script-de-traitement.php", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Une erreur s'est produite lors de l'envoi du formulaire.");
        }
        return response.text();
    })
    .then(data => {
        alert("Le formulaire a été envoyé avec succès !");
        // Réinitialiser le formulaire après l'envoi
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(error => {
        alert(error.message);
    });
}

// Écouter l'événement "submit" du formulaire et appeler la fonction envoyerFormulaire
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    envoyerFormulaire(); // Appeler la fonction d'envoi du formulaire
});