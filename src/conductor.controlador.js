import { bd } from "./BD.js"

const obtenerConductores = async (req, res) => {
    try {
        // consulta que devuelve todos los conductores que tienen latitud y longitud
        const respuesta = await bd.query(
            'SELECT * FROM conductores WHERE latitud IS NOT NULL AND longitud IS NOT NULL'
        )
        // retorna los conductores si todo sale bien
        res.status(200).json({
            datos: respuesta.rows
        })
    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

const obtenerConductor = async (req, res) => {
    try {
        // consulta que devuelve el conductor por su id
        const respuesta = await bd.query('SELECT * FROM conductores WHERE id = $1', [req.params.id])

        // si el conductor no existe 
        if (respuesta.rows.length <= 0)
            return res.status(400).json({ mensaje: 'Conductor no existe' })
        else
            // si el conductor existe retorna sus datos
            return res.status(200).json(respuesta.rows[0])
    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

const crearConductor = async (req, res) => {
    try {
        // recupera los datos del formulario
        const nombre = req.body.nombre
        const placa = req.body.placa

        // consulta para crear un nuevo conductor
        await bd.query('INSERT INTO conductores (nombre, placa) VALUES ($1, $2)', [nombre, placa])

        // consulta para obtener el id del nuevo conductor
        const conductorCreado = await bd.query('SELECT id FROM conductores WHERE placa = $1', [placa])

        // recupera el id del nuevo conductor
        const conductorId = conductorCreado.rows[0]
        res.status(201).json({
            id: conductorId.id,
            placa,
        })
    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

const iniciarSesion = async (req, res) => {
    try {
        // recupera los datos del formulario
        const placa = req.body.placa
        const dni = req.body.dni

        // consulta para obtener el conductor por su placa y dni
        const conductor = await bd.query('SELECT * FROM conductores WHERE placa = $1 AND dni = $2', [placa, dni])

        // si el conductor no existe
        if (conductor.rows.length <= 0) {
            return res.status(404).json({
                mensaje: 'Conductor no existe',
                estado: 'error'
            })
        }

        // si el conductor existe
        res.status(200).json({
            id: conductor.rows[0].id,
            nombre: conductor.rows[0].nombre,
            estado: 'ok'
        })

    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salía mal'
        })
    }
}

const actualizarConductor = async (req, res) => {
    // recupera los datos del formulario y el id del conductor de los parametros de la url
    const { id } = req.params
    const { latitud, longitud } = req.body
    try {
        // consulta para saber si existe el conductor
        const conductor = await bd.query('SELECT * FROM conductores WHERE id = $1', [id])
        // si el conductor no existe
        if (conductor.rowCount === 0)
            return res.status(404).json({
                mensaje: 'Conductor no existe'
            })
        else
            // si el conductor existe se actualiza la latitud y la longitud
            await bd.query('UPDATE conductores SET latitud = $1, longitud = $2 WHERE id = $3', [latitud, longitud, id])
        res.status(200).json({
            mensaje: 'Conductor actualizado',
            datos: conductor.rows
        })
    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

const eliminarConductor = async (req, res) => {
    try {
        // consulta para eliminar el conductor por la id del parametro de la url
        const respuesta = await bd.query('DELETE FROM conductores WHERE id = $1', [req.params.id])
        // si no se elimina el conductor entonces no existe
        if (respuesta.rowCount === 0)
            return res.status(400).json({
                mensaje: 'Conductor no existe'
            })
        else
            // si se elimina el conductor retorna un mensaje
            res.status(200).json({
                mensaje: 'Conductor eliminado',
            })

    } catch (error) {
        // retorna un error si algo sale mal
        return res.status(500).json({
            mensaje: 'Algo salió mal'
        })
    }
}

// Exportando las funciones para las rutas de la API
export { obtenerConductores, obtenerConductor, crearConductor, actualizarConductor, eliminarConductor, iniciarSesion }