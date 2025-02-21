//Declaracion de tipos de viariables mostrados por consola
var nombre = 'Juan';
const numeroDecimal = 55.5;
let numero;
let boolean = true;

let numeros = [1, 2, 4, 5];
const persona = {nombre: 'Juan', apellido: 'Perez', edad:12, numero:9837261212}
let personas = [
    persona,
    {nombre: 'Damian', apellido: 'Cetina', edad:12, numero:9837261212},
    {nombre: 'Raul', apellido: 'Dominguez', edad:21, numero:9839833212}
]

function suma(){
    return 1 + 1;
}

console.log(
    'Var: ', nombre, '\n',
    'Const: ', numeroDecimal, '\n',
    'Variable indefinida: ', numero, '\n',
    'Boleano: ', boolean, '\n',
    'Arreglo: ', numeros, '\n',
    'Objeto: ', persona, '\n',
    'Colección de objetos: ', personas, '\n',
    'Funcion: ', suma()
);