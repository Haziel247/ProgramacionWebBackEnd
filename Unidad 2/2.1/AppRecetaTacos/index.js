import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

const recetaJSON = `[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco Lechón",
    "precio": 20.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Puerco",
        "preparacion": "Horneado"
      },
      "salsa": {
        "nombre": "Tomate verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        },
        {
          "nombre": "Guacamole",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Aguacate", "Jugo de limón", "Sal", "Cebolla", "Cilantro"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco al Pastor",
    "precio": 22.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pastor",
        "preparacion": "Adobado y asado en trompo"
      },
      "salsa": {
        "nombre": "Salsa de piña",
        "picor": "Bajo"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla y Cilantro",
          "cantidad": "Al gusto",
          "ingredientes": ["Cebolla", "Cilantro", "Sal"]
        },
        {
          "nombre": "Rodajas de piña",
          "cantidad": "1 rodaja",
          "ingredientes": ["Piña fresca"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de Pollo en Escabeche",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Escabeche",
        "preparacion": "Cocido en vinagre y especias"
      },
      "salsa": {
        "nombre": "Chipotle",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Vinagre", "Sal", "Orégano"]
        },
        {
          "nombre": "Zanahorias en escabeche",
          "cantidad": "3 rodajas",
          "ingredientes": ["Zanahoria", "Vinagre", "Chile jalapeño", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de Res",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Res",
        "preparacion": "Cocido a fuego lento con especias"
      },
      "salsa": {
        "nombre": "Salsa roja",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla y Cilantro",
          "cantidad": "Al gusto",
          "ingredientes": ["Cebolla", "Cilantro", "Sal"]
        },
        {
          "nombre": "Queso rallado",
          "cantidad": "30 gramos",
          "ingredientes": ["Leche", "Sal", "Cuajo"]
        }
      ]
    }
  }
]`;

const recetaTacos = JSON.parse(recetaJSON);

app.use(express.static("public"));

app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetaTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || {error: "Receta no encontrada"});

});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});