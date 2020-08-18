DROP DATABASE IF EXISTS card_db;

CREATE DATABASE card_db;

USE card_db;

CREATE TABLE Topic (
	id int(11) NOT NULL AUTO_INCREMENT,
	topic VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE Image (
	id int(11) NOT NULL AUTO_INCREMENT,
	image BLOB,
	PRIMARY KEY (id)
);

CREATE TABLE Card (
	id int(11) NOT NULL AUTO_INCREMENT,
	topic int(11),
	image int(11),
	question VARCHAR(255),
	answer VARCHAR(255),
	known int(1) NOT NULL DEFAULT 0,
	FOREIGN KEY (topic)
		REFERENCES Topic(id),
	FOREIGN KEY (image)
		REFERENCES Image(id),
  PRIMARY KEY (id)
);

INSERT INTO Topic (topic) VALUES ('Algebra');
