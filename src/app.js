import express from 'express'
import cors from 'cors'
import rutas from './conductor.ruta.js'

// inicializar express
const app = express()

// habilitar permisos para poder hacer peticiones
app.use(cors())

// habilitar que acepte formato json
app.use(express.json())

// asignar rutas
app.use('/api', rutas)

// cuando una ruta no se encuentra definida
app.use((req, res, next) => {
    res.status(400).json({
        message: "ruta no encontrada"
    })
})

export default app