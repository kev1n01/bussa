# Instrucciones para iniciar el servidor

## Pasos

1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/kev1n01/bussa.git
    ```

2. **Instalar Node.js:**
   - [Descargar e instalar Node.js](https://nodejs.org/)

3. **Instalar los paquetes necesarios:**
    ```bash
    npm install
    ```

4. **Instalar PostgreSQL:**
   - [Descargar e instalar PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
   - **Nota:** No olvides la contraseña que configures.

5. **Crear la base de datos y la tabla `conductores`:**
   - Ejecuta el script SQL ubicado en `/db/bd.sql`

6. **Configurar el archivo `.env`:**
   - Cambia la variable `DB_PASSWORD` por tu contraseña de PostgreSQL.

7. **Iniciar el servidor:**
    ```bash
    npm run dev
    ```

8. **Instalar Postman:**
   - Puedes usar la extensión de Postman en VSCode u otra herramienta para realizar las peticiones.

## Endpoints

### Obtener todos los conductores

- **Método:** GET
- **URL:** `http://localhost:3000/api/conductores`

### Obtener un conductor por ID

- **Método:** GET
- **URL:** `http://localhost:3000/api/conductor/:id`
- **Ejemplo:** `http://localhost:3000/api/conductor/1`

### Crear un nuevo conductor

- **Método:** POST
- **URL:** `http://localhost:3000/api/conductores`
- **Body (JSON):**
    ```json
    {
        "nombre": "ANDRES",
        "placa": "523-554"
    }
    ```

### Iniciar sesión

- **Método:** POST
- **URL:** `http://localhost:3000/api/ingresar`
- **Body (JSON):**
    ```json
    {
        "placa": "ASD-123",
        "dni": "51232312"
    }
    ```

### Actualizar un conductor

- **Método:** PUT
- **URL:** `http://localhost:3000/api/conductor/:id`
- **Ejemplo:** `http://localhost:3000/api/conductor/1`
- **Body (JSON):**
    ```json
    {
        "latitud": "-9.93094",
        "longitud": "-76.2344"
    }
    ```

### Eliminar un conductor

- **Método:** DELETE
- **URL:** `http://localhost:3000/api/conductor/:id`
- **Ejemplo:** `http://localhost:3000/api/conductor/1`
