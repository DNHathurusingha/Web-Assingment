<?php 
include 'config.php';

$email=$_POST['email'];
$password=$_POST['password'];

$hashed_password = md5($password);

$findUser="SELECT * FROM users WHERE email='$email'";

$result = mysqli_query($conn,$findUser);
$rowcount=mysqli_num_rows($result);

if($rowcount ==1 ){
	$row = mysqli_fetch_assoc($result);
	$pass = $row['password'];

// echo $hashed_password;
// echo "<br>";
// echo $pass;

	if($hashed_password == $pass){
		// echo "Login Successfull!";

		// echo "<center><h2>Welcome ".$row['fname']."</h2></center>";
		include 'memberArea.php';
	}else{
		echo "Login Failed!";
	}

}else{
	echo "Login Failed!";
}

?>