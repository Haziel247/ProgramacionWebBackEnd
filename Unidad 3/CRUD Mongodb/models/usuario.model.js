//Librería de la conexion para uso de getDB()
import { getDB } from '../db.js';
//Librería implementada de mongodb para uso de ObjectId
import { ObjectId } from 'mongodb';
//Clase de usuario define los atributos del mismo asi como tambien 
// sus metodos para realizar operaciones CRUD
class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    //Crea un usuario
    async crear() {
        //Espera la instancia de la base de datos de MongoDB
        const db = await getDB();
        const resultado = await db.collection('usuarios').insertOne({
            nombre: this.nombre,
            edad: this.edad,
            correo: this.correo,
            createdAT: new Date()
        });
        return resultado;
    }
    //Obtniene toda la colleccion de usaurios
    static async obtener() {
        const db = await getDB();
        return await db.collection('usuarios').find({}).toArray();
    }
    //Obtiene un usuario por ID
    static async obtenerPorId(id) {
        const db = await getDB();
        try {
            const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
            return usuario;
        } catch (error) {
            console.error("❌ Error al obtener usuario por ID:", error);
            throw error;
        }
    }
    //Actualiza un usuario por ID
    static async actualizar(id, nuevosDatos) {
        const db = await getDB();
        const resultado = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(id) },
            { $set: nuevosDatos }
        );
        return resultado;
    }
    //Elimina un usuario por ID
    static async eliminar(id) {
        const db = await getDB();
        const resultado = await db.collection('usuarios').deleteOne({
            _id: new ObjectId(id)
        });
        return resultado;
    }
}
//Exportamos el la clase
export default Usuario;