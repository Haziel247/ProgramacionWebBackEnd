function validarContrasena(contrasena) {
    // Validaciones iniciales
    if (typeof contrasena !== 'string') return false;
    if (!contrasena.trim()) return false;  // Maneja strings vacíos y solo espacios
    
    // Palabras significativas (deberían venir de configuración externa)
    const palabrasSignificativas = ['playa', '2023', 'max', 'bogota'];
    
    // Verificar longitud mínima (8 caracteres)
    if (contrasena.length < 8) return false;
    
    // Verificar espacios (no debe contener ninguno)
    if (/\s/.test(contrasena)) return false;
    
    // Verificaciones de caracteres
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneEspecial = /[@#$%^&*()]/.test(contrasena);
    
    // Si falta algún tipo de carácter requerido
    if (!(tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial)) {
        return false;
    }
    
    // Verificar al menos una palabra significativa (case insensitive)
    const tienePalabraSignificativa = palabrasSignificativas.some(palabra => 
        contrasena.toLowerCase().includes(palabra.toLowerCase())
    );
    
    return tienePalabraSignificativa;
}

module.exports = validarContrasena;