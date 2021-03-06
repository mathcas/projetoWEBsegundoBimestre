DROP DATABASE IF EXISTS dsw;
CREATE DATABASE dsw;

USE dsw;

CREATE TABLE IF NOT EXISTS users (
    ID int AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(255), 
    email VARCHAR(255), 
    password VARCHAR(255), 
    timestamp TIMESTAMP
);


CREATE TABLE IF NOT EXISTS boards (
	ID int AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30),
	first_column VARCHAR(255),
	second_column VARCHAR(255),
	third_column VARCHAR(255),
	timestamp TIMESTAMP,
	userID int,
	FOREIGN KEY (userID) REFERENCES users(ID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cards (
	ID int AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(255),
	state VARCHAR(1),
	description VARCHAR(255),
	boardID int,
	userID int,
	timestamp TIMESTAMP,
	FOREIGN KEY (userID) REFERENCES users(ID) ON DELETE CASCADE,
	FOREIGN KEY (boardID) REFERENCES boards(ID) ON DELETE CASCADE
);


insert into boards(name, first_column, second_column, third_column)
VALUES ('AAA', 'Coluna 1','Coluna 2','Coluna 3');

insert into boards(name, first_column, second_column, third_column)
VALUES ('KANBAN', 'TO DO','WIP','DONE');

insert into cards(title, STATE, description, boardID)
VALUES ('Teste', 1,'Teste de descricao', 1);
