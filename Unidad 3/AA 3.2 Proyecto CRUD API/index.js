import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

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

app.post('/Usuarios', async (req,res) => { 
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({error: 'Error al crear usuario' });
    }    
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);
        if(!usuario){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        const usActualizado = await Usuario.findById(id);
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
        const usuario = await Usuario.findByIdAndDelete(id);
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
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios); 
    }catch(error){
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios'});
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try{
        const {id} = req.params;//Extrae el ID de los parametros de solicitud
        const usuarios = await Usuario.findById(id);
        res.status(200).json(usuarios);
    }catch(error){
        console.error("Error al obtener el ID:", error);
        res.status(500).json({error: "Error al obtener el ID"});
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



//definimos la URI
const uri = process.env.uri;

//conexion a la base de datos
mongoose.connect(uri)
.then(() => {
    console.log("Conexión exitosa a la base de datos");
})
.catch((error) => {
    console.error("error al conectar a la base de datos", error);
});