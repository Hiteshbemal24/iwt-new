<?php
// Database connection
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'eployee_details';

$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$salary = $_POST['salary'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$skills = implode(', ', $_POST['skills']);
$department = $_POST['department'];   
$address = $_POST['address']; 


$sql = "INSERT INTO employees ( first_name, last_name, email, salary, age, gender, skills, department, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo "Error: " . $conn->error;
} else {
    
    $stmt->bind_param("sssdsssss", $first_name, $last_name, $email, $salary, $age, $gender, $skills, $department, $address);

    if ($stmt->execute()) {
        echo "Record added successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
