<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
'INSERT INTO Certification
  (certificationID, agency, certificationName, standardExpiry)
  VALUES (?,?,?,?)'
);

$stmt->execute([
  $certificationID, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['agency'],
  $_POST['certificationName'],
  $_POST['standardExpiry'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?certificationID='.certificationID);
