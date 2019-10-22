<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
'INSERT INTO PersonCertification
(personID, certificationID, expirationDate, startDate)
VALUES (?,?,?,?)'
);

//do we use person or certification ID for this

$stmt->execute([
  $_POST['personID'], // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['certificationID'],
  $_POST['expirationDate'],
  $_POST['startDate'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../personCertification/?personID='.$personID);
