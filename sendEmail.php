<?php
    $name = filter_input(INPUT_POST, 'name');
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message');

    if($name && $email && $subject && $message){
        //envia aqui o email quando já estiver online
    }
    
    echo "<script>window.location.href = 'https://vandersontiago.com/';</script>";