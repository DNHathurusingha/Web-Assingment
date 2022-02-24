<?php

$servername = "localhost";
$username = "root";
$dbname = "thuruliya";

$conn = mysqli_connect($servername,$username,'',$dbname);

if($conn){
	// echo "Connected!";
}else{
	echo "Connection Failed!";
}
?>