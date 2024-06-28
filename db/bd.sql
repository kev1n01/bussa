CREATE DATABASE dbsol;

-- Para crear tabla
CREATE TABLE
    conductores (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        placa VARCHAR(20) NOT NULL,
        latitud NUMERIC(10,8) NULL,
        longitud NUMERIC(10,8) NULL
    );

-- Para insertar datos de prueba 
INSERT INTO
    conductores (nombre, placa, latitud, longitud)
VALUES ('MANUEL','ASD-123', -9.930946, -76.234420), ('JUAN','412-FGG', -9.925654, -76.234850), ('CARLOS','JT2-4SS', -9.921329, -76.232541), ('JOSE','GGT-412', -9.911051, -76.229898), ('MARCOS','HTT-454', -9.892817, -76.219942);

TRUNCATE conductores;
-- Para eliminar todos los registros
DELETE FROM conductores;

-- Para eliminar tabla
DROP TABLE conductores;

