function validarContrasena(contrasena) {
    if (!contrasena) return false;
    if (typeof contrasena !== 'string') return false;
    
    // Solo verifica longitud y espacios
    if (contrasena.length < 8) return false;
    if (contrasena.includes(' ')) return false;
    
    return true;
}

module.exports = validarContrasena;