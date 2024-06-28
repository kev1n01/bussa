import { Router } from "express"
import { obtenerConductores, obtenerConductor, crearConductor, actualizarConductor, eliminarConductor, iniciarSesion } from "./conductor.controlador.js"

// Definiendo el ruteador
const ruteador = Router()

// Definiendo rutas para la API
ruteador.post('/ingresar', iniciarSesion)
ruteador.get('/conductores', obtenerConductores)
ruteador.get('/conductor/:id', obtenerConductor)
ruteador.post('/conductores', crearConductor)
ruteador.put('/conductor/:id', actualizarConductor)
ruteador.delete('/conductor/:id', eliminarConductor)

// Exportando el ruteador
export default ruteador