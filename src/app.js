import express from 'express'
import cors from 'cors'
import rutasConductor from './conductor.ruta.js'
import rutasRegistro from './registro.ruta.js'

// inicializar express
const app = express()

// habilitar permisos para poder hacer peticiones
app.use(cors())

// habilitar que acepte formato json
app.use(express.json())

// asignar rutas
app.use('/api', rutasConductor)
app.use('/api', rutasRegistro)

// cuando una ruta no se encuentra definida
app.use((req, res, next) => {
    res.status(400).json({
        message: "ruta no encontrada"
    })
})

export default app