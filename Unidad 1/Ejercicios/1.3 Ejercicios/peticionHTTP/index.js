import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<p> respuesta GET </p>");
});

app.post('/registro', (req, res)=>{
    res.status(201).send('Registro exitoso');
});

app.put('/usuario/actualizar', (req, res)=>{
    res.status(200).send('Actualización exitosa');
});

app.patch('/usuario/modificar', (req, res)=>{
    res.status(200).send('Modificación exitosa');
});

app.delete('/usuario/eliminar', (req, res)=>{
    res.status(200).send('Eliminación exitosa');
});

app.listen(port, () => {
    console.log('Server is running in port 3000');
});