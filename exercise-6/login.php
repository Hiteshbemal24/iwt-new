<?php
@include 'main.php';
session_start();
if(isset($_POST['submit'])){
    $name = mysqli_real_escape_string($conn,$_POST['name']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $pass = md5($_POST['password']);
    $confirm_pass = md5($_POST['confirm_password']);

    $select = "SELECT * FROM user_form WHERE email = '$email' && password = '$pass'";
    $query = mysqli_query($conn,$select);

    if(mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_array($query);
        if($row['email'] == $email && $row['password'] == $pass){
            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            header('location:index.html');
    }else{
        $error[] = "incorrect email or password";
    }
  }
};
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-container">
        <form action="" method="post">
            <h3>Login now</h3>
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
            <input type="submit" name="submit" value="login" class="form-btn">
            <p>Don't have an account?<a href="registration.php">register now</a></p>
        </form>
    </div>
</body>
</html>