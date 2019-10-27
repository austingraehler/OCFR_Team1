<?php

// Step 0: Validate data
use Ramsey\Uuid\Uuid;
//$certificationID = Uuid::uuid4()->tostring();
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
'DELETE FROM PersonCertification
  WHERE personID = ? && certificationID = ?'
);

$stmt->execute([
  $_POST['personID'],
  $_POST['certificationID']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../personCertification/');

// There Needs to be changes to this page
// What is the ID that is going to be referenced
// to delete?
