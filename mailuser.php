<?php
if($_POST["message"]) {
    mail("rrmhearts@gmail.com", "McCoppin Home Inbox", $_POST["message"], "From: {$_POST["email"]}");
}
?>
