const objetoJavaScript = {
    nombre: "Taco de Pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa verde"
    }
};

const jsonString = JSON.stringify(objetoJavaScript);

const jsonString2 = `{"Nombre": "Taco de Pollo", "ingredientes": {"proteina": "Pollo", "salsa": "Salsa verde"}}`;

const objetoDeserializado = JSON.parse(jsonString2);

console.log(objetoDeserializado);

console.log(jsonString)