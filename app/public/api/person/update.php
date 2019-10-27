<?php

//DB connection
$db = DbConnection::getConnection();

// if (isset($_POST['personID']) && $_POST['personID']!='') {
  $stmt = $db->prepare(
    'UPDATE Person set firstName = ?, lastName = ?, address = ?,
    email = ?, phoneNumber = ?, dob = ?, startDate = ?, gender = ?, position = ?,
    radioNumber = ?, stationNumber = ?, isActive = ?
    where personID = ?'
  );

  $personID = $_POST['personID'];

  $stmt->execute([
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
    $_POST['personID']
  ]);

// $mid = $db->lastInsertId();

  header('HTTP/1.1 303 See Other');
  header('Location: ../person/?personID='.$personID);
 // else {
 //   $stmt = $db ->prepare(
 //     'INSERT INTO memberApp
 //     (firstName, lastName, address, phoneNumber, dob, startDate, gender, position, radioNumber, stationNumber, isActive)
 //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
 //   );
 //
 //   $stmt->execute([
 //     $_POST['firstName'],
 //     $_POST['lastName'],
 //     $_POST['address'],
 //     $_POST['email'],
 //     $_POST['phoneNumber'],
 //     $_POST['dob'],
 //     $_POST['startDate'],
 //     $_POST['gender'],
 //     $_POST['position'],
 //     $_POST['radioNumber'],
 //     $_POST['stationNumber'],
 //     $_POST['isActive']
 //   ]);
 //
 // }
