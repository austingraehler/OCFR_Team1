<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

//do we use person or certification ID
// Step 2: Create & run the query
if (isset($_GET['personID'])) {
  $stmt = $db->prepare(
    'SELECT * FROM PersonCertification
    WHERE personID = ?'
  );
  $stmt->execute([$_GET['personID']]);
} else {
  $stmt = $db->prepare('SELECT * FROM PersonCertification');
  $stmt->execute();
}

$personcertifications = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($personcertifications, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
