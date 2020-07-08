CREATE TABLE IF NOT EXISTS Card (
  id int(11) NOT NULL AUTO_INCREMENT,
  topic VARCHAR(255),
  question VARCHAR(255),
  answer VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO Card  (id, topic, question, answer) VALUES (0, 'Default', 'Question', 'Answer');
