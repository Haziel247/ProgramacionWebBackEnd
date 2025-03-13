import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var nombreEquipo = "";

app.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, next) {// Crear tu propio middleware
    console.log(req.body);// Muestra los datos enviados por el usuario
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"];// Conecta los datos enviados por el usuario
    next();// Lama a la siguiente función en la pila de middleware
}

app.use(registrador);// Usa el middleware

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(`<h1>El nombre de tu equipo es:</h1><h2>${nombreEquipo}</h2>`);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});