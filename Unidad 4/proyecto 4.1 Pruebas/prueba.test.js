const suma = require('./suma');

//1. La expectativa espera que la suma sea igual a 20 con ToBe
test('suma 10 + 10 es igual a 20', () => {
    expect(suma(1, 1)).toBe(2);
});

//2. Compatación de objetos con ToEqual
test('La persona 1 es igual a la persona 2', () => {
  const persona1 = {nombre: 'Haziel', edad: 21};
  const persona2 = {nombre: 'Haziel', edad: 21};
  expect(persona1).toEqual(persona2);
});

//3. Verificación de valores nulos, indefinidos y definidos
test('Variable nula', () => {
  const n = null;
  // Verifica que es null.
  expect(n).toBeNull();
});
test('Variable indefinido', () => {
  const n = undefined;
  // Verifica que es undefined.
  expect(n).toBeUndefined(); 
});
test('Variable definida', () => {
  const n = 'Hola';
  // Verifica que está definido.
  expect(n).toBeDefined();     
});

// 4. Comparaciones numéricas
test('El numero 15 es mayor que 10', () => {
  const numero = 15;
  // Verifica que es mayor que 10 toBeGreaterThan.
  expect(numero).toBeGreaterThan(10);
});
test('El numero 2 es menor que 4', () => {
  const numero = 2;
  // Verifica que es menor que 20 toBeLessThan.
  expect(numero).toBeLessThan(4); 
});
test('El numero 15 es mayor o igual que 15', () => {
  const numero = 15;
  // Verifica que es mayor o igual a 15 usuando toBeGreaterThanOrEqual.  
  expect(numero).toBeGreaterThanOrEqual(15);
});        


// 5. Coincidencia de cadenas con expresiones regulares
test('"mundo" existe en el mensaje "Hola mundo"', () => {
  //La expectativa espera que la palabra mundo este en el mensaje usando
  //.toMatch para encontrar la palabra
  const mensaje = 'Hola mundo';
  expect(mensaje).toMatch(/mundo/);
});

// 6. Verificación de contenido en arrays con .toContain,
// como el anterior pero en arrays
test('El array contiene un elemento "carro"', () => {
  const transpote = ['triciclo', 'moto', 'carro'];
  expect(transpote).toContain('moto');
});

// 7. Negación de matchers con .not
test('5 no es igual 10', () => {
  //Expectativa de que 5 no es igual a 10
  expect(5).not.toBe(10);
});

// 8. Esperar una promesa con async y await para esperar la repsuesta
test('La suma esperada es igual a 5', async () => {
  const data = await suma(2, 3);
  expect(data).toBe(5);
});