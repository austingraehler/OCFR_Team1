<?php

//DB connection
$db = DbConnection::getConnection();


//idk if this OR stmt works, but I think we need to address the fact both personID & certID can start process?
//(isset(($_POST['personID']) && $_POST['personID']!='') || ($_POST['certificationID']) && $_POST['certificationID']!='') )
if (isset($_POST['personID']) && $_POST['personID']!='' ) {
  $stmt = $db->prepare(
    'UPDATE memberCertApp set personID = ?, certificationID = ?, expirationDate = ?, startDate = ?
    where personID = ?'
  );
  $stmt->execute([
    $_POST['expirationDate'],
    $_POST['startDate']
  ]);
}
 else {
   $stmt = $db ->prepare(
     'INSERT INTO memberCertApp
     (expirationDate, startDate)
     VALUES (?, ?)'
   );

   $stmt->execute([
     $_POST['expirationDate'],
     $_POST['startDate']
   ]);

 }
