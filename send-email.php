<?php
    // UNUSED
    $header = "From: karol.kiersnowski@outlook.com \nContent-Type:".
       ' text/plain;charset="UTF-8"'.
       "\nContent-Transfer-Encoding: 8bit";
    $to = "karol.kiersnowski@outlook.com";
    $subject = $_POST["messageSubject"];
    $message = $_POST["messageContent"] . "\n\nFrom: " . $_POST["yourEmail"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="img/favicon-96x96.png"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/webfonts.css"/>
    <link rel="stylesheet" href="css/inputs.css"/>
    <link rel="stylesheet" href="css/mini-classes.css"/>
    <link rel="stylesheet" href="css/all.css"><!--Font Awesome v.5.12.0-->
    <script defer src="js/lang.js"></script>
    <script defer src="js/init.js"></script>

    <title>Karol Kiersnowski | Portfolio - Send e-mail</title>
    <meta name="author" content="Karol Kiersnowski"/>
</head>
<body>
    <div class="text-center">
        <section style="
            position: absolute;
            top: calc(50vh - 200px);
            width: 100%;
            height: 350px;">
            <h2>
            <?php
                if (mail($to, $subject, $message, $header))
                    echo '<i class="fa fa-check-circle fa-4x" style="color: green;"></i><br><span class="txtOffer">E-mail został wysłany</span>';
                else
                    echo '<i class="fa fa-times-circle fa-4x" style="color: red;"></i><br><span class="txtOffer">E-mail nie został wysłany</span>';
            ?>
            </h2>
            <button type="button" class="button" onclick="history.back()">
                <i class="fa fa-arrow-left"></i>
                <span class="txtBack">Powrót</span>
            </button>
        </section>
    </div>
<div id="prv-billboard"></div>
</body>
</html>