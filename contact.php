<?php
echo <<<_END
<html>
	<head>
		<title>Email Sent</title>
	</head>
	<body>
		Thanks!
	</body>
</html>
_END;

if($_POST["message"]) {
    mail("rrmhearts@gmail.com", "Form to email message", $_POST["message"], "From: {$_POST["email"]}");
}
?>
