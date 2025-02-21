const fs = require("fs");

// fs.writeFile("archivo.txt", "El archivo txt se ha creado correctamente.", (err) => {
//     if (err) throw err;
//     console.log("El archivo se ha creado");
// });

fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });