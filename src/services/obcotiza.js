import axios from "axios";
import puertoService from '@/router/puerto.js';

class CotizaService {

    cotizacion = {};
    tarifa = [];

    url = puertoService.obtenerPuerto();

    constructor() {

        this.cotizacion = {
            id: 0,
            cliente: 0,
            userCliente: '',
            direccionInmueble: 0,
            inmueble: 0,
            tipo: 0,
            nombreTipo: '',
            canon: 0,
            nombreServicio: '',
            servicio: 0,
            impuesto: 0,
            comision: 0,
            descuento: 0,
            administracion: 0,
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
        let miId = localStorage.cliente;
        return axios.get(`${this.url}/cotizacion/cliente/${miId}`);
    }

    obtenerTarifa() {
        return axios.get(`${this.url}/impuesto/todos`);
//        return this.tarifa;
    };
    registrarCotizacion(miCliente, miInmueble, miTipo, miServicio, miCanon, miImpuesto,
        miComision, miDescuento, miAdministracion, miAmoblado){
        let datos = {cliente: miCliente, inmueble: miInmueble, tipo: miTipo, canon: miCanon, 
            servicio: miServicio, impuesto: miImpuesto, comision: miComision, 
            descuento: miDescuento, administracion: miAdministracion, amoblado: miAmoblado};
        return axios.post(`${this.url}/cotizacion/`, datos);
    };

    modificarCotizacion(miId, miCliente, miInmueble, miTipo, miServicio, miCanon, miImpuesto,
        miComision, miDescuento, miAdministracion, miAmoblado){
        let datos = {id: miId, cliente: miCliente, inmueble: miInmueble, tipo: miTipo,  
            servicio: miServicio, canon: miCanon, impuesto: miImpuesto, comision: miComision, 
            descuento: miDescuento, administracion: miAdministracion, amoblado: miAmoblado};
        return axios.post(`${this.url}/cotizacion/`, datos);
    };

    guardarTemporal(mCotiza){
        this.cotizacion = mCotiza;
    };

} export default new CotizaService();