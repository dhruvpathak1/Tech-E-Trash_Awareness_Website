<?php               
    if(isset($_POST["signin"]))
    {
        $link=mysqli_connect("localhost","root",'',"somedatabasename");
        if(mysqli_connect_error()){
            die("Error ".mysqli_connect_error());
        }
        else{
        //check if entries are present in database
        $password=$_POST["passwd"];
        $username=$_POST["username"];       
        $sql="Select username, passwd FROM signup WHERE username='".$username."' and passwd='".$password."'";
        $result=mysqli_query($link,$sql);
        if(mysqli_query($link,$sql))
        {
            if(mysqli_num_rows($result)>0){
                
            // if(isset($_POST["remember"]))
            // {
            //     $cookie_exp=time()+3600; # expires in one hour
            //     setcookie("username",$username,$cookie_exp);
                
            // }
            
            session_start();
            $_SESSION["username"]=$username;
            header("location:welcome_db.php");
            }                
            else 
            {
                echo "<strong>Incorrect login details</strong>";
            }
        }
    }         
}
?>            