//Convertir una cadena a entero

const cadenaInt = (cadena) => {
    try {

        const nuevoNum = Number(cadena);

        if (isNaN(nuevoNum)) {
            throw new Error("El texto solo debe contener numeros.");
        }

        return `El numero convertido es: ${nuevoNum}`;

    } catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(cadenaInt('Hola'));
console.log(cadenaInt('224'));
console.log(cadenaInt('12.22'));