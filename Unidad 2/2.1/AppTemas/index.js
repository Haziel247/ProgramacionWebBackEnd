import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

const temasJSON = `[
    {
        "id": "001",
        "nombre": "Álgebra",
        "descripcion": "Conceptos fundamentales del álgebra elemental y avanzada.",
        "palabrasClaves": ["Ecuaciones", "Funciones", "Polinomios"],
        "practicas": [
            {
                "titulo": "1. Resolución de ecuaciones",
                "descripcion": "Ejercicios sobre ecuaciones de primer y segundo grado.",
                "objetivo": "Comprender la solución de ecuaciones algebraicas."
            },
            {
                "titulo": "2. Resolución de factorización de polinomios",
                "descripcion": "Ejercicios de factorización de polinomios cuadráticos.",
                "objetivo": "Aplicar técnicas de factorización para simplificar expresiones algebraicas."
            },
            {
                "titulo": "3. Resolución de operaciones con fracciones algebraicas",
                "descripcion": "Ejercicios de suma, resta, multiplicación y división de fracciones algebraicas.",
                "objetivo": "Desarrollar habilidades para operar con fracciones algebraicas."
            }
        ]
    },
    {
        "id": "002",
        "nombre": "Cálculo",
        "descripcion": "Fundamentos de cálculo diferencial e integral.",
        "palabrasClaves": ["Derivadas", "Integrales", "Límites"],
        "practicas": [
            {
                "titulo": "1. Resolución de cálculo de derivadas",
                "descripcion": "Ejercicios prácticos de derivación.",
                "objetivo": "Aprender reglas básicas de derivación."
            },
            {
                "titulo": "2. Resolución de aplicación de la regla de la cadena",
                "descripcion": "Ejercicios que aplican la regla de la cadena en derivadas compuestas.",
                "objetivo": "Comprender y aplicar la regla de la cadena en derivadas."
            },
            {
                "titulo": "3. Resolución de cálculo de integrales definidas",
                "descripcion": "Ejercicios de integración de funciones utilizando integrales definidas.",
                "objetivo": "Aplicar métodos de integración para encontrar áreas bajo curvas."
            }
        ]
    },
    {
        "id": "003",
        "nombre": "Geometría",
        "descripcion": "Estudio de las propiedades y las medidas de los objetos geométricos.",
        "palabrasClaves": ["Ángulos", "Áreas", "Volúmenes"],
        "practicas": [
            {
                "titulo": "1. Resolución de cálculo de áreas y volúmenes",
                "descripcion": "Ejercicios prácticos sobre áreas y volúmenes de figuras geométricas.",
                "objetivo": "Aplicar fórmulas de cálculo de áreas y volúmenes."
            },
            {
                "titulo": "2. Resolución de teorema de Pitágoras",
                "descripcion": "Ejercicios aplicando el teorema de Pitágoras en triángulos rectángulos.",
                "objetivo": "Aplicar el teorema de Pitágoras para resolver problemas geométricos."
            },
            {
                "titulo": "3. Resolución de propiedades de los polígonos",
                "descripcion": "Ejercicios sobre propiedades de diferentes tipos de polígonos y sus áreas.",
                "objetivo": "Identificar y calcular las propiedades de los polígonos."
            }
        ]
    },
    {
        "id": "004",
        "nombre": "Estadística",
        "descripcion": "Estudio de la recolección, análisis e interpretación de datos.",
        "palabrasClaves": ["Probabilidad", "Media", "Desviación estándar"],
        "practicas": [
            {
                "titulo": "1. Resolución de cálculo de media y desviación estándar",
                "descripcion": "Ejercicios prácticos de cálculo de medidas estadísticas.",
                "objetivo": "Comprender y calcular la media y desviación estándar de un conjunto de datos."
            },
            {
                "titulo": "2. Resolución de distribución normal",
                "descripcion": "Ejercicios sobre la distribución normal y sus propiedades.",
                "objetivo": "Comprender la distribución normal y aplicarla en la resolución de problemas."
            },
            {
                "titulo": "3. Resolución de cálculo de probabilidades",
                "descripcion": "Ejercicios sobre cálculo de probabilidades en experimentos aleatorios.",
                "objetivo": "Aplicar los principios de la probabilidad en situaciones prácticas."
            }
        ]
    }
]
`;

const temas = JSON.parse(temasJSON);

app.use(express.static('public'))

app.use(bodyParser.json());

app.get('/tema/:type', (req, res) => {
    const escogerTema = temas.find(r => r.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(escogerTema || {error: "Receta no encontrada"});
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});