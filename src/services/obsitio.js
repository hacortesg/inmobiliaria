import axios from "axios";
import puertoService from '@/router/puerto.js';

class SitioService {
    ciudad = [];
    zona = [];
    localidad = [];
    estrato = [];

    url = puertoService.obtenerPuerto();

    constructor() {
        this.ciudad = [
            { id: 1, nombre: "Barranquilla" },
            { id: 2, nombre: "Bogotá" },
            { id: 3, nombre: "Bucaramanga" },
            { id: 4, nombre: "Cali" },
            { id: 5, nombre: "Medellín" }
        ];
        this.zona = [
            { nombre: "Norte" },
            { nombre: "Centro" },
            { nombre: "Sur" },
            { nombre: "Occidente" },
            { nombre: "Oriente" },
            { nombre: "Noroccidente" }
        ];
        this.localidad = [
            { nombre: "Fontibón" },
            { nombre: "Martires" },
            { nombre: "Suba" },
            { nombre: "Sumapaz" },
            { nombre: "Teusaquillo" },
            { nombre: "Usaquen" }
        ];
        this.estrato = [
            { nombre: "Uno" },
            { nombre: "Dos" },
            { nombre: "Tres" },
            { nombre: "Cuatro" },
            { nombre: "Cinco" },
            { nombre: "Seis" }
        ];
    };

    obtenerCiudad() {
//        return this.ciudad;
        return axios.get(`${this.url}/ciudad/todos`);
    };

    obtenerZona() {
        //            return this.zona;
        return axios.get(`${this.url}/zona/todos`);
    };

    obtenerLocalidad() {
        //        return this.localidad;
        return axios.get(`${this.url}/localidad/todos`);

    };

    obtenerEstrato() {
        //        return this.estrato;
        return axios.get(`${this.url}/estrato/todos`)
    };

} export default new SitioService();