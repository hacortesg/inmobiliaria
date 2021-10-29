import axios from "axios";
import puertoService from '@/router/puerto.js';

class InmuebleService {

    tipo = [];
    servicio = [];
    disponible = [];

    url = puertoService.obtenerPuerto();

    constructor() {

        this.tipo = [
            { nombre: "Apartaestudio", comision: 0.06, administracion: 0.07 },
            { nombre: "Apartamento", comision: 0.06, administracion: 0.07 },
            { nombre: "Consultorio", comision: 0.06, administracion: 0.07 },
            { nombre: "Local", comision: 0.06, administracion: 0.07 },
            { nombre: "Casa", comision: 0.08, administracion: 0.0 },
            { nombre: "Bodega", comision: 0.1, administracion: 0.0 },
            { nombre: "Fabrica", comision: 0.1, administracion: 0.0 },
            { nombre: "Edificio", comision: 0.15, administracion: 0.0 },
            { nombre: "Finca", comision: 0.09, administracion: 0.0 },
            { nombre: "Terreno", comision: 0.07, administracion: 0.0 }
        ];

        this.servicio = [
            { nombre: "Ninguno", precio: 0 },
            { nombre: "Administración de PPHH", precio: 8000000 },
            { nombre: "Mantenimiento y Reparación", precio: 300000 },
            { nombre: "Avaluo de renta", precio: 500000 },
            { nombre: "Asesoría y Publiciada", precio: 300000 },
            { nombre: "Seguro de Arrendamiento", precio: 800000 },
            { nombre: "Servicio de Aseo", precio: 700000 },
            { nombre: "Servicio de seguridad", precio: 1000000 },

        ];

        this.disponible = [
            {
                id: 1,
                metros: '120',
                tipo: 1,
                construido: '01/05/1980',
                direccion: 'CR 10# 10-10',
                ciudad: 1,
                zona: 1,
                localidad: 1,
                estrato: 1,
                sala: 0, 
                comedor: 0, 
                cocina: 1, 
                parquedero: 1, 
                bano: 1,
                alcoba: 1,
                preciox: 400000,
                img: '/img/apto_1.jpg'

            },
            {
                id: 1,
                metros: 60,
                construido: "01/05/2002",
                direccion: "CR 20# 20-20",
                ciudad: 2,
                zona: 2,
                localidad: 2,
                estrato: 2,
                tipo: 2,
                sala: 1,
                comedor: 1,
                cocina: 1,
                parqueadero: 1,
                bano: 2,
                alcoba: 2,
                preciox: 500000,
                img: "https://github.com/hcortesg/inmobiliaria/tree/master/src/assets/img/apto_2.jpg"
              },
            {
                id: 3,
                metros: '140',
                tipo: 4,
                construido: '01/05/2002',
                direccion: 'CR 20# 16-16',
                ciudad: 4,
                zona: 4,
                localidad: 4,
                estrato: 4,
                sala: 1, // 1 Si, 0 No
                comedor: 1, // 1 Si, 0 No
                cocina: 1, // 1 Si, 0 No
                parquedero: 1, // 1 Si, 0 No
                //                amoblado: false,
                bano: 4,
                alcoba: 4,
                preciox: 1000000,
                //                servicio: 2,
                //                anticipo: false,
                //                persona: 0,
                img: '../assets/img/casa_1.jpg'
            },

        ];

    };

    obtenerTipo() {
        return axios.get(`${this.url}/tipo/todos`)
//        return this.tipo;
    };

    obtenerServicio() {
        return axios.get(`${this.url}/servicio/todos`)
//        return this.servicio;
    };

    obtenerInmueble() {
        return axios.get(`${this.url}/inmueble/todos`)
//        return this.disponible;
    }

} export default new InmuebleService();