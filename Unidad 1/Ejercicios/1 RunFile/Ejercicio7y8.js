//Objeto de la vida real con sus propiedades
let carro = {
    color: 'Rojo', 
    marca: 'Chevrolet', 
    velocidad: 200, 
    motor:'V8', 
    nuevo:false, 
    fechaConsulta: new Date()};

//Agregar un metodo para el objeto carro el cual imprima su descripcion

carro.informacion = () => console.log(`El colo del carro es ${carro.color}, de la marca ${carro.marca}, con una velocidad maxima de ${carro.velocidad}.\n`
 + (carro.aceite ? 'Este carro es nuevo.' : 'El carro no es nuevo.')
 + `\nFecha de consulta: ${carro.fechaConsulta}`);

carro.informacion();