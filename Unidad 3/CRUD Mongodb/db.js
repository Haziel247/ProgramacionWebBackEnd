//Importamos a mongodb para poder acceder a MongoClient
import { MongoClient } from 'mongodb';
//Variable de entorno
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.uri;
//Crea una instancia del cliente de MongoDB
const clinet = new MongoClient(uri);
let db = null;

export async function conectDB() {
    try {
        //Establece la conexion a la base de datos
        await clinet.connect();

        console.log('✅ Conectado correctamente a MongoDB.');
        // Selecciona la base de datos llamada 'test'
        db = clinet.db('test');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error);
    }
}

export async function getDB() {
    if (!db) {
        console.error('❗ La base de datos no está conectada. Llama primero a connectDB().');

    }
    // Devuelve la instancia de la base de datos para ser usada
    return db;
}