<?php include("connectdb.php"); ?>

<?php
    session_start();
    $email = $_POST['email'];
    $passtem = $_POST['passtem'];
    $timestamp = $_POST['timestamp'];
    $ID = $_SESSION['ID'];

    $sql = "INSERT INTO user
            VALUE ('$ID','$email','$passtem','$timestamp')";
    $insert = mysqli_query($mysqli,$sql);

?>