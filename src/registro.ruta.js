import { Router } from "express"
import { crearRegistro, obtenerRegistros, obtenerRegistrosConductor } from "./registro.controlador.js"
const ruteador = Router()

ruteador.get('/registroviajes', obtenerRegistros)
ruteador.post('/crearregistro', crearRegistro)
ruteador.get('/registroviaje/:id', obtenerRegistrosConductor)

export default ruteador