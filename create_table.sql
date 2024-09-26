CREATE DATABASE `descobridores_db`;
USE `descobridores_db`;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    date DATETIME NOT NULL,
    avatar_number INT NOT NULL,
    message TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT 0,
    game_id INT NOT NULL
);

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_name VARCHAR(50) NOT NULL
);

INSERT INTO games (game_name) 
VALUES 
("APOSTE NA SOMA"), 
("CONSTRUINDO PIPAS"), 
("DESAFIO DA ESCADA"), 
("DESAFIO DA ILHA"), 
("DESAFIO DA PÁ SUJA"), 
("DESAFIO DAS BANDEIRAS"), 
("DESAFIO DAS VARETAS"), 
("DESAFIO DO DRAGÃO"), 
("FLORES NO JARDIM"), 
("GINCANA DAS ALTURAS"), 
("MILU E NALA"), 
("MONSTROS NA RODA"), 
("ORGANIZANDO O CURRAL"), 
("PALITOS COLORIDOS"), 
("QUANTOS RETÂNGULOS?"), 
("SEQUÊNCIA DE TRIÂNGULOS"), 
("TORRE DA MATILDA"), 
("TRIÂNGULOS AMIGOS"), 
("TRIÂNGULOS NO PENTÁGONO"), 
("TRIÂNGULOS NUMÉRICOS");

INSERT INTO messages (username, date, avatar_number, message, is_admin, game_id)
VALUES 
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 1),
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 2),
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 3),
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 4),
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 5),
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 6),
( "Sarah", "2024-06-23 12:00:00", 1, "Olá mundo!", True, 7),
( "Murilo", "2024-06-25 11:00:00", 1, "Luctus sem. Phasellus tempor leo non velit tempus, et elementum nunc lacinia.", True, 1),
( "Marcia", "2024-06-26 09:00:00", 1, "Lorem ipsum dolor sit amet. Sit sint provident eum quia animi quo nesciunt placeat. ", False, 1),
( "Manoel", "2024-06-19 12:00:00", 1, "Ut quidem doloremque in inventore dolores et repellendus quas et esse quia.", False, 1),
( "Mirna", "2024-06-19 12:00:00", 1, "Ut quidem doloremque in inventore dolores et repellendus quas et esse quia.", False, 3),
( "Marcos", "2024-06-23 12:00:00", 1, "Et ipsum consequatur a molestiae galisum et beatae molestiae.", False, 2),
( "Mônica", "2024-06-23 12:00:00", 1, "Luctus sem. Phasellus tempor leo non velit tempus, et elementum nunc lacinia.", True, 2),
( "Moises", "2024-06-23 12:00:00", 1, "Et ipsum consequatur a molestiae galisum et beatae molestiae.", False, 4),
( "Miriam", "2024-06-23 12:00:00", 1, "Meu nome é Míriam", False, 4)
( "Maria", "2024-05-23 09:30:00", 1, "Tenha coragem e seja gentil!", False, 4)