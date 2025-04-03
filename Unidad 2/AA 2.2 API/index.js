fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta => {

        if (!respuesta.ok) {
            throw new Error('Respuesta del servidor fallida ' + respuesta.statusText);
        }

        return respuesta.json();
    })
    .then(datos => {
        console.log('Datos recibidos: ', datos);
    })
    .catch(error => {
        console.log('Error al hacer la soicitud: ', error)
    });