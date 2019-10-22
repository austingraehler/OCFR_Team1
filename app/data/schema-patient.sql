--CREATE SCHEMA OCFR IF NOT EXISTS;
USE OCFR;

DROP TABLE IF EXISTS Person;
DROP TABLE IF EXISTS Certification;
DROP TABLE IF EXISTS PersonCertification;
DROP TABLE IF EXISTS User;

CREATE TABLE Person (
personID INTEGER PRIMARY KEY AUTO_INCREMENT,
firstName VARCHAR(64) NOT NULL,
lastName VARCHAR(64) NOT NULL,
address VARCHAR (100),
email VARCHAR (64),
phoneNumber VARCHAR(64),
dob DATE NOT NULL,
startDate DATE,
gender ENUM('Male', 'Female', 'Other') NOT NULL,
position ENUM('Volunteer', 'Paramedic', 'Lieutenant', 'Captain', 'Battalion Chief', 'Fire Chief', 'Commissioner'),
radioNumber VARCHAR(8),
stationNumber INTEGER,
isActive ENUM('Active', 'Not Active')
);

CREATE TABLE Certification (
certificationID INTEGER PRIMARY KEY AUTO_INCREMENT,
agency VARCHAR(64),
certificationName VARCHAR(100) NOT NULL,
standardExpiry INTEGER
);

CREATE TABLE PersonCertification (
personID INTEGER,
certificationID INTEGER,
expirationDate DATE,
startDate DATE,
FOREIGN KEY (personID) REFERENCES Person(personId) ON DELETE CASCADE,
FOREIGN KEY (certificationID) REFERENCES Certification(certificationID) ON DELETE CASCADE,
PRIMARY KEY (personID, certificationID)
);


CREATE TABLE User (
userEmail VARCHAR(64),
password VARCHAR(64),
PRIMARY KEY (userEmail)
);

INSERT INTO Person(personID, firstName, lastName, address, email, phoneNumber, dob, startDate, gender, position, radioNumber, stationNumber, isActive) VALUES
("1", "Tom", "Gregory", "111 Kelley Street", "tomgreg@iu.edu", "1234567890", "1970-01-01", "2018-01-01", "Male", "Captain", "1", "2", "Active");


INSERT INTO Certification(certificationID, agency, certificationName, standardExpiry) VALUES
("190001","American Heart Association","CPR (CPR for Healthcare Providers)","2");

INSERT INTO Certification (certificationID, agency, certificationName, standardExpiry) VALUES
("190002","American Red Cross","CPR (CPR for the Professional Rescuer)","2"),
("190003","Athens Technical College","Firefighter I","3"),
("190004","Ivy Technical College","FireFighter 1","3"),
("190005","Georgia POST Academy","POST","5");


INSERT INTO PersonCertification (personID, certificationID, expirationDate, startDate) VALUES
("1","190002","2023-09-08","2018-04-22"),
("1","190003","2022-09-08","2018-05-22"),
("1","190004","2021-09-08","2018-06-22"),
("1","190005","2020-09-08","2018-07-22");
