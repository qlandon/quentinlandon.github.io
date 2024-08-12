<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $subject = htmlspecialchars($_POST['Subject']);
    $message = htmlspecialchars($_POST['Message']);

    // Validation des données (facultatif, mais recommandé)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse email invalide.";
        exit;
    }

    // Adresse de destination de l'email
    $to = "votre-adresse-email@example.com";  // Remplacez par votre adresse email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Formatage du message
    $full_message = "Name: " . $name . "\n";
    $full_message .= "Email: " . $email . "\n";
    $full_message .= "Subject: " . $subject . "\n\n";
    $full_message .= "Message: \n" . $message;

    // Envoi de l'email
    if (mail($to, $subject, $full_message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Échec de l'envoi de votre message.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
