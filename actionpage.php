<html>
    <head>
        <title>Inserting to DB....</title>
        </head>
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "itnerary";

// Create connection
$connection = new mysqli($servername, $username, $password, $dbname);

//put data into variables and parse into datatype
$name = (string) $_POST['name'];
$location = (string) $_POST['location'];
$phonenum = (int) $_POST['phone_num'];
$inquiry = (string) $_POST['inquiry'];

//use prepared statement method to insert into db (prevent sql injection)
$stmt = $connection->prepare("INSERT INTO inquiry (username,location,phonenum,inquiry) VALUES (?,?,?,?)");
$stmt->bind_param('ssis', $name, $location, $phonenum, $inquiry);
$stmt->execute();
$stmt->close();

//redirect back page
header( "refresh:2;url=inquiry.php" );
?>

<body align=center>
    <img align=center width="360" height="360" src="https://giantbomb1.cbsistatic.com/uploads/scale_medium/15/153607/2555000-2339414779-Mario.png">
    <h1>Data inserted to DB successfully!</h1>
    <p>Redirecting to main page in 2 seconds...</p>
</body>
</html>