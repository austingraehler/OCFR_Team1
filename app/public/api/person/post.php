<?php
use Ramsey\Uuid\Uuid;
$personID = Uuid::uuid4()->tostring();
// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
'INSERT INTO Person
  (personID, firstName, lastName, address, email, phoneNumber, dob, startDate, gender, position, radioNumber, stationNumber, isActive)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
);


//$personID = Uuid::uuid4()->toString();

$stmt->execute([
  $personID, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['address'],
  $_POST['email'],
  $_POST['phoneNumber'],
  $_POST['dob'],
  $_POST['startDate'],
  $_POST['gender'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../person/?personID='.$personID);
