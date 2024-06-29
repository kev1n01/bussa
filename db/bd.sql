CREATE DATABASE dbsol;

-- Para crear tabla
CREATE TABLE
    conductores (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        dni VARCHAR(8) NOT NULL,
        placa VARCHAR(7) NOT NULL,
        latitud NUMERIC(10,8) NULL,
        longitud NUMERIC(10,8) NULL
    );

-- Para insertar datos de prueba 
INSERT INTO
    conductores (nombre,dni, placa, latitud, longitud)
VALUES ('MANUEL','51232312','ASD-123', -9.930946, -76.234420), ('JUAN','51232224','412-FGG', -9.925654, -76.234850), ('CARLOS','74929784','JT2-4SS', -9.921329, -76.232541), ('JOSE','53442654','GGT-412', -9.911051, -76.229898), ('MARCOS','09828402','HTT-454', -9.892817, -76.219942);

TRUNCATE conductores;
-- Para eliminar todos los registros
DELETE FROM conductores;

-- Para eliminar tabla
DROP TABLE conductores;

