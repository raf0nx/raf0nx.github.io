<?php

if (isset($_POST['send'])) {
	$name = $_POST['name'];
	$subject = "Napisał do Ciebie ".$name.".";
	$email = $_POST['email'];
	$comments = $_POST['comments'];

	$mailTo = "w.kuprowska@wiolettakuprowska.pl";
	$headers = "From: ".$email;
	$txt = $comments.".\n\n"."Możesz napisać do ".$name." pod wskazany email: ".$email;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: ../subpages/contact-send.html");
}