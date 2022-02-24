<?php

include 'config.php';


$fName = $_POST['fName'];
$lName = $_POST['lName'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];
$email = $_POST['email'];

$checkUsers = "SELECT * FROM users WHERE email='$email'";

$result = mysqli_query($conn,$checkUsers);

$rowcount=mysqli_num_rows($result);

if($rowcount == 0){
	if($password == $confirmPassword){

		// $hashed_password = password_hash($password, PASSWORD_DEFAULT);
		$hashed_password = md5($password);

		$addUser = "INSERT INTO users (fname,lname,email,password) VALUES('$fName','$lName','$email','$hashed_password')";

		if ($conn->query($addUser) === TRUE) {
		  echo "User Registered Successfully!";
		} else {
		  echo "Registration Failed!" . $conn->error;
		}
				
	}else{
		echo "Password does not match!";
	}
}else{
	echo "User Already Exist!";
}

?>