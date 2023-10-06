<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = trim($_POST["mensaje"]);

    // Verifica que los datos no estén vacíos y que el correo electrónico sea válido
    if (empty($nombre) OR empty($mensaje) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://rappidtech.com?error");
        exit;
    }

    // Dirección de correo electrónico a la que deseas que se envíe el formulario
    $recipient = "nosotros@rappidtech.com";

    // Asunto del correo electrónico
    $subject = "Nuevo mensaje de $nombre";

    // Contenido del correo electrónico
    $email_content = "Nombre: $nombre\n";
    $email_content .= "Correo Electrónico: $email\n\n";
    $email_content .= "Mensaje:\n$mensaje\n";

    // Encabezados de correo electrónico
    $email_headers = "From: $nombre <$email>";

    // Enviar el correo electrónico
    if (mail($recipient, $subject, $email_content, $email_headers)) {

        // Correo de respuesta automática
        $subject_automatico = "Gracias por contactarnos - The Rappid Team";
        $content_automatico = "Estimado/a $nombre,

Gracias por ponerse en contacto con nosotros. Su mensaje ha sido recibido con éxito.

Nos tomamos cada consulta con seriedad y estaremos revisando su mensaje cuidadosamente para brindarle la respuesta más adecuada. Por favor, espere una respuesta de nuestro equipo en las próximas 24-48 horas.

Agradecemos su paciencia y confianza en nosotros. 

Saludos cordiales,

The Rappid Team";

        $headers_automatico = "From: The Rappid Team <nosotros@rappidtech.com>";

        mail($email, $subject_automatico, $content_automatico, $headers_automatico);

        header("Location: http://rappidtech.com?success");
    } else {
        header("Location: http://rappidtech.com?error");
    }
} else {
    header("Location: http://rappidtech.com");
}
