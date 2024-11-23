CREATE DATABASE IF NOT EXISTS bd_AltasHabilidades;

USE bd_AltasHabilidades;

CREATE TABLE IF NOT EXISTS tbVent (
    id INT AUTO_INCREMENT,
    username_vent VARCHAR(40) NOT NULL DEFAULT 'Anônimo',
    vent VARCHAR(700) NOT NULL,
    CONSTRAINT pk_tbVent PRIMARY KEY (id)
) DEFAULT CHARSET = utf8mb4;
