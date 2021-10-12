class CotizaService {

    cotizacion = {};
    tarifa = [];


    constructor() {

        this.cotizacion = {
            cliente: 'Karen Gomez',
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

    obtenerCotizacion() {
        return this.cotizacion;
    }

    obtenerTarifa() {
        return this.tarifa;
    };

} export default new CotizaService();