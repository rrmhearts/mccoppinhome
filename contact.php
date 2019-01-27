<?php
	exec("php mailuser.php > /dev/null 2>&1 &");
	header("Refresh: 3; url=index.html");
?>
<html>
	<head>
		<div class="jumbotron text-xs-center">
  			<h1 class="display-3">Thank You!</h1>
  			<p class="lead"><strong>Please check your email</strong> for further communications with Ryan.</p>
		</div>	
	</head>
</html>
