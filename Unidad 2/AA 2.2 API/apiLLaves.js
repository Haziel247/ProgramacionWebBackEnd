import axios from "axios";

const apiKey = '5bda31e5c32a958c0e2913541e235900';
const ciudad = 'Cancun';

const obtenerClima = async () => {

    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: ciudad,
                appid: apiKey,  // OpenWeatherMap requiere la API key en los parámetros
                units: 'metric', // Para obtener los datos en °C
                lang: 'es' // Para recibir los datos en español
            }
        });
        console.log('🌥️ Datos del clima: ', response.data);
    } catch (error) {
        console.error('Error al obtener los datos: ', error.response?.data || error.message);
    }

};

obtenerClima();