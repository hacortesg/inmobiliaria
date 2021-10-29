import axios from "axios";
import puertoService from '@/router/puerto.js';

class CotizaService {

    cotizacion = {};
    tarifa = [];

    url = puertoService.obtenerPuerto();

    constructor() {

        this.cotizacion = {
            id: '',
            cliente: '',
            inmueble: '',
            tipo: '',
            canon: 0,
            servicio: 0,
            impuesto: 0,
            comision: 0,
            descuento: 0,
            admon: 0,
            amoblado: 0,
            total: 0
        };

        this.tarifa= [
            {
                id: 1,
                nombre: "excento",
                porcien: 0,
                mas: 0
            },
            {
                id: 2,
                nombre: "iva",
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

    guardaTemporal(mCotiza){
        this.cotizacion = mCotiza;
    };

} export default new CotizaService();