//Función asincrona con setTimeout y callback
function obtenerDatos(callback) {

    console.log('Obteniendo datos...');

    setTimeout(() => {
        const datos = {id: 1, nombre: 'Juan'};

        callback(datos);
    }, 2000);
}

function manejarDatos(datos) {
    console.log('Datos obtenidos: ', datos);
}

obtenerDatos(manejarDatos);