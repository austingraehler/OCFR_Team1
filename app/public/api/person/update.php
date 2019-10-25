<?php

//DB connection
$db = DbConnection::getConnection();

if (isset($_POST['personID']) && $_POST['personID']!='') {
  $stmt = $db->prepare(
    'UPDATE memberApp set personID = ?, firstName = ?, lastName = ?, address = ?,
    email = ?, phoneNumber = ?, dob = ?, startDate = ?, gender = ?, position = ?,
    radioNumber = ?, stationNumber = ?, isActive = ?
    where personID = ?'
  );
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
    $_POST['isActive']
  ]);
}
 else {
   $stmt = $db ->prepare(
     'INSERT INTO memberApp
     (firstName, lastName, address, phoneNumber, dob, startDate, gender, position, radioNumber, stationNumber, isActive)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
   );

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
     $_POST['isActive']
   ]);

 }
