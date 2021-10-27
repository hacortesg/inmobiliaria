import axios from "axios";
import puertoService from '@/router/puerto.js';

class CotizaService {

    cotizacion = {};
    tarifa = [];

    url = puertoService.obtenerPuerto();

    constructor() {

        this.cotizacion = {
            cliente: '',
            tipo: '',
            canon: 0,
            servicio: 0,
            impuestos: 0,
            comision: 0,
            descuentos: 0,
            admon: 0,
            amoblado: 0,
            total: 0
        };

        this.tarifa= [
            {
                tipo: 1,
                porcien: 0,
                mas: 0
            },
            {
                tipo: 2,
                porcien: 0.19,
                mas: 0.03
            }
        ];
    };

    obtenerTemporal(){
       return this.cotizacion;
    };

    obtenerCotizacion() {
        let mId = localStorage.cliente;
        return axios.get(`${this.url}/cotizacion/${mId}`);
    }

    obtenerTarifa() {
        return axios.get(`${this.url}/impuesto/todos`);
//        return this.tarifa;
    };
    registrarCotizacion(miCotizacion){
        return axios.post(`${this.url}/cotizacion/${miCotizacion}`);
    };

} export default new CotizaService();