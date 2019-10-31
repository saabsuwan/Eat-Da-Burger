### Schema

CREATE DATABASE burgerDB;
USE burgerDB;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	cooking BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
