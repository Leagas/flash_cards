DROP DATABASE IF EXISTS card_db;

CREATE DATABASE card_db;

USE card_db;

CREATE TABLE Subject (
	id int(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE Topic (
	id int(11) NOT NULL AUTO_INCREMENT,
	subject int(11),
	topic VARCHAR(255),
	FOREIGN KEY (subject)
		REFERENCES Subject(id),
	PRIMARY KEY (id)
);

CREATE TABLE Card (
	id int(11) NOT NULL AUTO_INCREMENT,
	topic int(11),
	image BLOB,
	question VARCHAR(255),
	answer VARCHAR(255),
	known int(1) NOT NULL DEFAULT 0,
	FOREIGN KEY (topic)
		REFERENCES Topic(id),
	PRIMARY KEY (id)
);

INSERT INTO Subject (name) VALUES ('Math');
INSERT INTO Subject (name) VALUES ('Physics');
INSERT INTO Subject (name) VALUES ('Computer Science');

INSERT INTO Topic (subject, topic) VALUES (1, 'General');
INSERT INTO Topic (subject, topic) VALUES (1, 'Linear Algebra');
INSERT INTO Topic (subject, topic) VALUES (1, 'Precalculus');

INSERT INTO Topic (subject, topic) VALUES (2, 'General');

INSERT INTO Topic (subject, topic) VALUES (3, 'General');
