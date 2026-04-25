CREATE DATABASE IF NOT EXISTS stock ;
 
use stock; 

CREATE TABLE productos (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(25),
    cantidad INT,
    precio INT
);

INSERT INTO productos (name,cantidad,precio) VALUES(?,?,?); ACA VAN LOS VALORES