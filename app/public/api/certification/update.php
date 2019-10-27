<?php

//DB connection
$db = DbConnection::getConnection();

// if (isset($_POST['certificationID']) && $_POST['certificationID']!='') {
  $stmt = $db->prepare(
    'UPDATE Certification set agency = ?, certificationName = ?, standardExpiry = ?
    where certificationID = ?'
  );

  $certificationID = $_POST['certificationID'];

  $stmt->execute([
    $_POST['agency'],
    $_POST['certificationName'],
    $_POST['standardExpiry'],
    $_POST['certificationID']
  ]);

// $cid = $db->lastInsertId();

  header('HTTP/1.1 303 See Other');
  header('Location: ../certification/?certificationID='.$certificationID);
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
