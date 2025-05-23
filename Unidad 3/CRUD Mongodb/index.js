import express from 'express';
import dotenv from 'dotenv';
//Importacion de la clase Usuario
import Usuario from './models/usuario.model.js';
//Importacion de la conexion para acceder a conectDB()
import {conectDB} from './db.js';

dotenv.config();

const app = express();
const port = 3000;


//midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//handlers
app.get('/', (req, res) => {    
    res.send('Bienvenido a mi API CRUD');
});

//Manejadores de rutas HTTP de la pagina.
//Crear usuarios
app.post('/Usuarios', async (req,res) => { 
    try{
        //Se instancia un usuario y se le pasan los datos
        const usuario = new Usuario(req.body.nombre, req.body.edad, req.body.correo);
        //Accediendo a la funcion crear con los datos añadidos previamente.
        const resultado = await usuario.crear();
        res.status(201).json(usuario);
        //Se imprime el usuario creado
        console.log("📝 Usuario creado: ", usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({error: 'Error al crear usuario' });
    }    
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        //Se obtiene el ID
        const {id} = req.params;
        //Actualiza un usuario por ID llamando la funcion sin instanciar un usuario
        const usuario = await Usuario.actualizar(id, req.body);
        if(!usuario){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        //Obtniene el usuario para mostrarlo
        const usActualizado = await Usuario.obtenerPorId(id);
        res.status(200).json(usActualizado);
        console.log(usActualizado);
    }catch (error){
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({error: "Error al actualizar el usuario"});
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        const {id} = req.params;
        //Elimina un usuario por ID
        const usuario = await Usuario.eliminar(id);
        if(!usuario){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        res.status(200).json({message: 'Usuario eliminado'});
    }catch{error}{
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({error: "Error al eliminar el usuario"});
    }
});

app.get('/usuarios', async (req,res)=>{
    try{
        //Llama a la función para obtener toda la collection
        const usuarios = await Usuario.obtener();
        res.status(200).json(usuarios); 
    }catch(error){
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios'});
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try{
        const {id} = req.params;//Extrae el ID de los parametros de solicitud
        //Obtiene el usuario por ID
        const usuario = await Usuario.obtenerPorId(id);
        res.status(200).json(usuario);
    }catch(error){
        console.error("Error al obtener el ID:", error);
        res.status(500).json({error: "Error al obtener el ID"});
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



//Espera la conexion a la base de datos al correr el servidor
await conectDB();