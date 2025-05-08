import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://potterapi-fedeperin.vercel.app/es/spells');
        const spell = result.data[2];

        const joke = spell.use;
        const category = `Hechizo: ${spell.spell}`;
        res.render('index.ejs', {
            joke: joke,
            category: category,
        });
        console.log(result.data[0]);

        
    } catch (error) {
        console.log(error.response?.data || error.message);
        res.status(500).send('Error al obtener la cita');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto https://localhost:${port}`);
});