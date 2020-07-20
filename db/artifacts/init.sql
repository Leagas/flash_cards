DROP DATABASE IF EXISTS card_db;

CREATE DATABASE card_db;

USE card_db;

CREATE TABLE Card (
  id int(11) NOT NULL AUTO_INCREMENT,
  topic VARCHAR(255),
  question VARCHAR(255),
  answer VARCHAR(255),
	known int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO Card  (id, topic, question, answer) VALUES (0, 'Default', 'Question', 'Answer');
