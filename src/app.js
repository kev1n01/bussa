import express from 'express'
import cors from 'cors'
import rutas from './conductor.ruta.js'

// inicializar express
const app = express()

// habilitar cors para poder hacer peticiones
app.use(cors())

// habilitar body parser como json
app.use(express.json())

// asignar rutas
app.use('/api', rutas)

// ruta no encontrada
app.use((req, res, next) => {
    res.status(400).json({
        message: "ruta no encontrada"
    })
})

export default app