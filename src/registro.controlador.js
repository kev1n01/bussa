import { bd } from "./BD.js"
const obtenerRegistros = async (req, res) => {
    try {
        // consulta para crear un nuevo conductor
        const respuesta = await bd.query('SELECT hv.fecha, hv.hora ,hv.ruta, c.nombre, c.placa, c.dni FROM historial_viajes AS hv JOIN conductores as c ON hv.conductor_id = c.id')

        res.status(201).json({
            datos: respuesta.rows
        })

    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

const crearRegistro = async (req, res) => {
    try {
        // recupera los datos del formulario
        const fecha = new Date().toISOString()
        const hora = new Date().toLocaleTimeString()
        const ruta = req.body.ruta
        const conductor_id = req.body.conductor_id

        // consulta para crear un nuevo conductor
        await bd.query('INSERT INTO historial_viajes (fecha, hora, ruta, conductor_id) VALUES ($1, $2, $3, $4)', [fecha, hora, ruta, conductor_id])

        res.status(201).json({
            estado: 'ok',
            mensaje: 'Registro creado correctamente'
        })
    } catch (error) {
        // retorna un error si algo sale mal
        console.log(error)
        return res.status(500).json({
            estado: 'error',
            mensaje: 'Algo salió mal'
        })
    }
}

const obtenerRegistrosConductor = async (req, res) => {
    try {
        // consulta para crear un nuevo conductor
        const respuesta = await bd.query('SELECT * FROM historial_viajes WHERE conductor_id = $1', [req.params.id])

        res.status(201).json({
            datos: respuesta.rows
        })

    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

export { obtenerRegistros, crearRegistro, obtenerRegistrosConductor }