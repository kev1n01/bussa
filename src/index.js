import app from "./app.js"
import { PORT } from './config.js'

// encender el servidor con el puerto
app.listen(PORT)

// mostrar en terminal 
console.log('Servidor corriendo en el puerto:' + PORT);