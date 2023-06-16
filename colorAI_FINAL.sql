CREATE database colorai;
USE colorai;

-- Creacion tabla Usuario
CREATE table user(
user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR (250) NOT NULL,
phone VARCHAR(20),
avatar VARCHAR(250), 
gender VARCHAR(10),
birth_date VARCHAR(50),  
skin_tone VARCHAR(100),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
type TINYINT(2) NOT NULL DEFAULT 1,
is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
is_blocked BOOLEAN NOT NULL DEFAULT FALSE
    
);




-- Creacion tabla del Salon de Belleza

CREATE table beauty_salon(
beauty_salon_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
beauty_salon_name VARCHAR(250) NOT NULL,
city VARCHAR(250),
address VARCHAR(250),
user_id  INT UNSIGNED NOT NULL,
CONSTRAINT fk_user_1 FOREIGN KEY (user_id)
REFERENCES user (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creacion de la tabla Servicios que ofrece el salon de belleza

CREATE table service(
service_id SMALLINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
service_name VARCHAR(200) NOT NULL,
beauty_salon_id INT UNSIGNED NOT NULL,
CONSTRAINT fk_beauty_salon_1 FOREIGN KEY (beauty_salon_id)
REFERENCES beauty_salon (beauty_salon_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creacion tabla historial visitas

CREATE table visit (
visit_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED NOT NULL,
date VARCHAR(100),
service_id SMALLINT UNSIGNED NOT NULL,
CONSTRAINT fk_visit_user FOREIGN KEY (user_id)
REFERENCES user (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_service_visit FOREIGN KEY (service_id)
REFERENCES service (service_id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Creacion tabla citas que tienen servicios

CREATE table appointment(
appointment_id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED NOT NULL,
service_id SMALLINT UNSIGNED NOT NULL,
beauty_salon_id INT UNSIGNED NOT NULL,
feedback VARCHAR(250),
appointment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
appointment_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT fk_service_1 FOREIGN KEY (service_id)
REFERENCES service (service_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_user_3 FOREIGN KEY (user_id)
REFERENCES user (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creacion de la tabla de test PRINCIPAL

CREATE table test(
test_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
test_name VARCHAR(250) NOT NULL,
is_deleted BOOLEAN DEFAULT FALSE,
type INT UNSIGNED DEFAULT 1,
user_id INT UNSIGNED, 
CONSTRAINT fk_user_id_us FOREIGN KEY (user_id)
REFERENCES user (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creeacion de la tabla preguntas, genera preguntas realizadas por los test

CREATE table question(
test_id INT UNSIGNED NOT NULL,
question_id INT UNSIGNED NOT NULL,
question_name VARCHAR(250) NOT NULL,
question_text VARCHAR(250),
is_deleted BOOLEAN DEFAULT FALSE,
primary key(test_id, question_id),
CONSTRAINT fk_test_id FOREIGN KEY (test_id)
REFERENCES test (test_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Ceacion de la tabla fotos que pueden ser preguntas

CREATE table photo_question(	
photo_question_id BIGINT UNSIGNED NOT NULL PRIMARY KEY auto_increment,
test_id INT UNSIGNED NOT NULL,
question_id INT UNSIGNED NOT NULL,	
photo_img VARCHAR(250) NOT NULL,
CONSTRAINT fk_photo_question_1 FOREIGN KEY (test_id)
REFERENCES test ( test_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creacion de la tabla telas que pueden ser opciones de preguntas

CREATE TABLE fabric (
fabric_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
fabric_name VARCHAR(250) NOT NULL,
fabric_img VARCHAR(250) NOT NULL
);

-- Creacion de la tabla Opciones de Preguntas

CREATE table question_option(
test_id INT UNSIGNED NOT NULL,
question_id INT UNSIGNED NOT NULL,
question_option_id INT UNSIGNED NOT NULL,
primary key(test_id, question_id, question_option_id),
fabric_id INT UNSIGNED,
option_test_name VARCHAR (250) NOT NULL,
CONSTRAINT fk_question_2 FOREIGN KEY (test_id, question_id)
REFERENCES question (test_id, question_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_fabric_1 FOREIGN KEY (fabric_id)
REFERENCES fabric(fabric_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creacion de la tabla respues a las preguntas del test

CREATE table answer(
answer_id BIGINT UNSIGNED NOT NULL primary key AUTO_INCREMENT,
test_id INT UNSIGNED NOT NULL,
question_id INT UNSIGNED NOT NULL,
user_id INT UNSIGNED NOT NULL,
answer VARCHAR(250) NOT NULL,
image VARCHAR(250),
CONSTRAINT fk_question_3 FOREIGN KEY (test_id, question_id)
REFERENCES question (test_id, question_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_user_2 FOREIGN KEY (user_id)
REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE table photo(
photo_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED NOT NULL,
photo_name VARCHAR(250) NOT NULL,
CONSTRAINT fk_photo_1 FOREIGN KEY (user_id)
REFERENCES user (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

select * from user;
select * from beauty_salon;
select * from service;
select * from appointment;
select * from test;
select * from question;
select * from photo_question;
select * from fabric;
select * from question_option;
select * from answer;


-- CREAR ADMINISTRADOR 
INSERT INTO user (name, last_name, email, password, avatar, gender, birth_date, type)
VALUES ('Estefanía', 'Moreno', 'e.moreno.asesoria@gmail.com', '$2b$08$vwV7BBi0ES/OTELMPqme7uCOevp/rSMwQu6RzQb86b2q4.QB3C2wG', 'avatar.jpg', 'M', '1990-01-01', 3);


-- CREAR SALÓN DE BELLEZA
INSERT INTO beauty_salon (beauty_salon_name, city, address, user_id)
VALUES
('Salon 1', 'Málaga', 'C/Marqués de Larios', 1);

-- CREAR SERVICIOS 
INSERT INTO service (service_name, beauty_salon_id)
VALUES
('Colorimetría', 1), ('Peinado', 1), ('Secado', 1), ('Tinte raíz', 1), ('Balayage', 1), ('Olaplex', 1);

-- CREAR TEST COLORIMETRÍA 
INSERT INTO test (test_id, test_name, is_deleted, type) 
VALUES
(1, "Test Colorimetría", 0, 3);

-- CREAR PASOS PARA EL TEST DE COLORIMETRÍA
INSERT INTO question (test_id, question_id, question_name, question_text)
VALUES
(1, 1, "Paso 1", "Contraste"),
(1, 2, "Paso 2", "Contraste personal"),
(1, 3, "Paso 3", "Profundidad"),
(1, 4, "Paso 4", "Intensidad"),
(1, 5, "Paso 5", "Subtono"),
(1, 6, "Paso 6", "Temperatura"),
(1, 7, "Paso 7", "Estaciones equivalentes");

-- CREAR TELAS
INSERT INTO fabric (fabric_id, fabric_name, fabric_img)
VALUES
(1, 'tela 1', 'tela01.png'), (2, 'tela 2', 'tela02.png'), (3, 'tela 3', 'tela03.png'),
(4, 'tela 4', 'tela04.png'), (5, 'tela 5', 'tela05.png'), (6, 'tela 6', 'tela06.png'),
(7, 'tela 7', 'tela07.png'), (8, 'tela 8', 'tela08.png'), (9, 'tela 9', 'tela09.png'),
(10, 'tela 10', 'tela10.png'), (11, 'tela 11', 'tela11.png'), (12, 'tela 12', 'tela12.png'),
(13, 'tela 13', 'tela13.png'), (14, 'tela 14', 'tela14.png'), (15, 'tela 15', 'tela15.png'),
(16, 'tela 16', 'tela16.png'), (17, 'tela 17', 'tela17.png'), (18, 'tela 18', 'tela18.png'),
(19, 'tela 19', 'tela19.png'), (20, 'tela 20', 'tela20.png'), (21, 'tela 21', 'tela21.png'),
(22, 'tela 22', 'tela22.png'), (23, 'tela 23', 'tela23.png'), (24, 'tela 24', 'tela24.png'),
(25, 'tela 25', 'tela25.png'), (26, 'tela 26', 'tela26.png'), (27, 'tela 27', 'tela27.png');

-- CREAR OPCIONES DE COLORIMETRÍA
INSERT INTO question_option (test_id, question_id, question_option_id, fabric_id, option_test_name)
VALUES
(1, 1, 1, 1, 'Tela 01'), (1, 2, 2, 2, 'Tela 02'), (1, 2, 3, 3, 'Tela 03'),
(1, 2, 4, 4, 'Tela 04'), (1, 2, 5, 5, 'Tela 05'), (1, 3, 6, 6, 'Tela 06'),
(1, 3, 7, 7, 'Tela 07'), (1, 3, 8, 8, 'Tela 08'), (1, 3, 9, 9, 'Tela 09'),
(1, 4, 10, 10, 'Tela 10'), (1, 4, 11, 11, 'Tela 11'), (1, 4, 12, 12, 'Tela 12'),
(1, 4, 13, 13, 'Tela 13'), (1, 5, 14, 14, 'Tela 14'), (1, 5, 15, 15, 'Tela 15'), 
(1, 6, 16, 16, 'Tela 16'), (1, 6, 17, 17, 'Tela 17'), (1, 6, 18, 18, 'Tela 18'),
(1, 6, 19, 19, 'Tela 19'), (1, 7, 20, 20, 'Tela 20'), (1, 7, 21, 21, 'Tela 21'),
(1, 7, 22, 22, 'Tela 22'), (1, 7, 23, 23, 'Tela 23'), (1, 7, 24, 24, 'Tela 24'),
(1, 7, 25, 25, 'Tela 25'), (1, 7, 26, 26, 'Tela 26'), (1, 7, 27, 27, 'Tela 27');