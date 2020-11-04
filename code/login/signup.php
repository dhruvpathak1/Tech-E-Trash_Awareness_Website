<?php
if(isset($_POST["signup"]))
{
    $username=$_POST["username"];
    $email=$_POST["email"];
    $contact=$_POST["contact"];
    $age=$_POST["age"];
    $passwd=$_POST["passwd"];
    $cnfpasswd=$_POST["cnfpasswd"];

function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = '';
 $dbname = "somedatabasename";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$dbname);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
 
 $conn = OpenCon();
 if($conn === false){
    die("ERROR: Could not connect. " . $conn->connect_error);
}
else
 echo "Welcome to tech-e-trash!";

$sql1="INSERT INTO signup SET username='$username', email='$email', contact='$contact', age='$age', passwd='$passwd'";
if($cnfpasswd==$passwd){
    if($conn->query($sql1) === true){
        echo "Please login from our website.";
        
    } else{
        echo "ERROR: Could not able to execute $sql1. " . $conn->error;
    }
}
else{
    echo '<script>alert("Passwords do not match.")</script>';
}

CloseCon($conn);
}
?>
<!DOCTYPE html>
<html>
<body>
<br>
<a href="https://tech-e-trash.herokuapp.com/">Go back to tech-e-trash</a>
</body>

</html>