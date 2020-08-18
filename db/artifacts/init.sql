DROP DATABASE IF EXISTS card_db;

CREATE DATABASE card_db;

USE card_db;

CREATE TABLE Topic (
	topicId int(11) NOT NULL AUTO_INCREMENT,
	topic VARCHAR(255),
	PRIMARY KEY (topicId)
);

CREATE TABLE Image (
	imageId int(11) NOT NULL AUTO_INCREMENT,
	image BLOB,
	PRIMARY KEY (imageId)
);

CREATE TABLE Card (
  cardId int(11) NOT NULL AUTO_INCREMENT,
  topicId int(11),
	imageId int(11),
  question VARCHAR(255),
  answer VARCHAR(255),
	known int(1) NOT NULL DEFAULT 0,
	FOREIGN KEY (topicId)
		REFERENCES Topic(topicId),
	FOREIGN KEY (imageId)
		REFERENCES Image(imageId),
  PRIMARY KEY (cardId)
);

INSERT INTO Topic (topic) VALUES ('Default');
INSERT INTO Card  (topicId, question, answer) VALUES (1, 'Question', 'Answer');
