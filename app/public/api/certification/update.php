<?php

//DB connection
$db = DbConnection::getConnection();

// if (isset($_POST['certificationID']) && $_POST['certificationID']!='') {
  $stmt = $db->prepare(
    'UPDATE Certification set certificationID = ?, agency = ?, certificationName = ?, standardExpiry = ?
    where certificationID = ?'
  );
  $stmt->execute([
    $_POST['agency'],
    $_POST['certificationName'],
    $_POST['standardExpiry']
  ]);
// }
//  else {
//    $stmt = $db ->prepare(
//      'INSERT INTO certificationApp
//      (agency, certificationName, standardExpiry)
//      VALUES (?, ?, ?)'
//    );
//
//    $stmt->execute([
//      $_POST['agency'],
//      $_POST['certificationName'],
//      $_POST['standardExpiry']
//    ]);
//
//  }
