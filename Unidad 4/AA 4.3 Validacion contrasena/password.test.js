const validarContrasena = require('./validacionCompleja');


  test('Válida: cumple todos los requisitos', () => {
    expect(validarContrasena('Playa2023@')).toBe(true);
  });
  
  test('Inválida: longitud < 8', () => {
    expect(validarContrasena('A1b@xyz')).toBe(false);
  });
  
  test('Inválida: falta mayúscula', () => {
    expect(validarContrasena('playa2023@')).toBe(false);
  });
  
  test('Inválida: falta @#$%^&*()', () => {
    expect(validarContrasena('Playa2023X')).toBe(false);
  });
  
  test('Inválida: con espacios', () => {
    expect(validarContrasena('Playa 2023@')).toBe(false);
  });
  
  test('Inválida: sin palabra significativa', () => {
    expect(validarContrasena('Xkcd1234@')).toBe(false);
  });
  
  test('Límite: 8 chars pero falta requisito', () => {
    expect(validarContrasena('A1b@cD7')).toBe(false);
  });
  
  test('Error: número como contraseña', () => {
    expect(validarContrasena(12345678)).toBe(false);
  });
  
  test('Error: undefined', () => {
    expect(validarContrasena(undefined)).toBe(false);
  });
   
  test('Error: string vacío', () => {
    expect(validarContrasena('')).toBe(false);
  });