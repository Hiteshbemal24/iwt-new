<?php
@include 'main.php';

if(isset($_POST['submit'])){
    $name = mysqli_real_escape_string($conn,$_POST['name']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $pass = md5($_POST['password']);
    $confirm_pass = md5($_POST['confirm_password']);

    $select = "SELECT * FROM user_form WHERE email = '$email' && password = '$pass'";
    $query = mysqli_query($conn,$select);

    if(mysqli_num_rows($query) > 0){
        $error[] = "user already exists";
    }else{
        if($pass != $confirm_pass){
            $error[] = "password does not match";
        }else{
            $insert = "INSERT INTO user_form(name,email,password) VALUES('$name','$email','$pass')";
            $query = mysqli_query($conn,$insert);
            header('location:login.php');
            
        };
    }
};
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-container">
        <form action="" method="post">
            <h3>Register now</h3>
            <?php
            if(isset($error)){
                foreach($error as $error){
                    echo "<span class='error-msg'>" .$error."</span>";
                };
            };
            ?>
            <input type="name" name="name" required placeholder="enter your name">
            <input type="email" name="email" required placeholder="enter your email">
            <input type="password" name="password" required placeholder="enter your password">
            <input type="password" name="confirm_password" required placeholder="confirm your password">
            <input type="submit" name="submit" value="register" class="form-btn">
            <p>Already have an account?<a href="login.php">Login</a></p>
        </form>
    </div>
</body>
</html>