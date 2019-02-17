<?php
$name = stripslashes($argv[1]);
$email = stripslashes($argv[2]);
$subject = stripslashes($argv[3]);
$message = stripslashes($argv[4]);

echo "Hello {$name}";

# $myfile = fopen("{$dir}/testfile.txt", "w") or die("Unable to open file!");
# fwrite($myfile, "{$name} {$email});
# fclose($myfile);

mail("rrmhearts@gmail.com", $subject, "{$message}\n -{$name}", "From: {$email}");
?>
