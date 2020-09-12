-- creacion de la base de datos

CREATE DATABASE crudCamilo;

-- usando la base de datos

use crudCamilo;

-- creacion de la tabla

CREATE TABLE usuarios (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

-- mostrar tablas

SHOW TABLES;

-- describe la tabla usuarios

describe usuarios;