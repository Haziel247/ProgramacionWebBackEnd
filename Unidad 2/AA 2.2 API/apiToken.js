import axios from 'axios';

const obtenerToken = async () => {
    try {
        const response = await axios.post('https://reqres.in/api/login', {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        });

        const token = response.data.token;

        console.log('Token recibido:', token);
        
        return token;

    } catch (error) {
        console.error('Error en la autenticación:', error.response?.data || error.message);
    }
};

const obtenerUsuarios = async (token) => {
    try {

        const response = await axios.get(`https://reqres.in/api/users?nocache=${new Date().getTime()}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log('Datos de usuarios:', response.data);

    } catch (error) {
        console.error('Error al obtener los datos:', error.response?.data || error.message);
    }
};

obtenerUsuarios(obtenerToken());
print()
obtenerUsuarios('asfjnwone2322no122');
