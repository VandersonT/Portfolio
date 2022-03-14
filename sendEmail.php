<?php
    $name = filter_input(INPUT_POST, 'name');
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message');

    if($name && $email && $subject && $message){

        $to = 'vandersontpaulo@gmail.com';
        $subject = $subject;
        $body = $message;
        $header = "From: suporte@vandersontiago.com"."\r\n".
                  "Reply-To: ".$email."\r\n".
                  "X-Mailer: PHP/".phpversion();
    
        mail($to, $subject, $body, $header);      
    }
    
    echo "<script>window.location.href = 'https://vandersontiago.com/';</script>";