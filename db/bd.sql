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


CREATE TABLE
    historial_viajes (
        id SERIAL PRIMARY KEY,
        fecha DATE NOT NULL,
        hora TIME NOT NULL,
        ruta VARCHAR(50) NOT NULL,
        conductor_id INTEGER NOT NULL REFERENCES conductores(id)
    );

-- Para insertar datos de prueba 
INSERT INTO
    conductores (nombre,dni, placa, latitud, longitud)
VALUES ('MANUEL','51232312','ASD-123', -9.930946, -76.234420), ('JUAN','51232224','412-FGG', -9.925654, -76.234850), ('CARLOS','74929784','JT2-4SS', -9.921329, -76.232541), ('JOSE','53442654','GGT-412', -9.911051, -76.229898), ('MARCOS','09828402','HTT-454', -9.892817, -76.219942);

INSERT INTO historial_viajes (fecha, hora, ruta, conductor_id) VALUES ('2022-12-31', '17:00', 'Ambo - Huanuco', 7), ('2022-12-31', '17:30', 'Ambo - Huanuco', 10), ('2022-12-31', '18:00', 'Huanuco - Ambo', 10), ('2022-12-31', '18:30', 'Ambo - Huanuco', 8), ('2022-12-31', '19:00', 'Huanuco - Ambo', 7), ('2022-12-31', '19:30', 'Ambo - Huanuco', 6), ('2022-12-31', '20:00', 'Huanuco - Ambo', 9), ('2022-12-31', '20:30', 'Ambo - Huanuco', 6), ('2022-12-31', '21:00', 'Ambo - Huanuco', 8), ('2022-12-31', '21:30', 'Ambo - Huanuco', 9);
TRUNCATE conductores;
-- Para eliminar todos los registros
DELETE FROM conductores;
DELETE FROM historial_viajes;

-- Para eliminar tabla
DROP TABLE conductores;

