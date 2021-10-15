class InmuebleService {

    tipo = [];
    servicio = [];
    disponible = [];

    constructor() {

        this.tipo = [
            { nombre: "Apartaestudio", comision: 0.06 },
            { nombre: "Apartamento", comision: 0.06 },
            { nombre: "Consultorio", comision: 0.06 },
            { nombre: "Local", comision: 0.06 },
            { nombre: "Casa", comision: 0.08 },
            { nombre: "Bodega", comision: 0.1 },
            { nombre: "Fabrica", comision: 0.1 },
            { nombre: "Edificio", comision: 0.15 },
            { nombre: "Finca", comision: 0.09 },
            { nombre: "Terreno", comision: 0.07 }
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
                construccion: '01/05/1980',
                direccion: 'CR 10# 10-10',
                ciudad: 1,
                zona: 1,
                localidad: 1,
                estrato: 1,
                sala: true,
                comedor: true,
                cocina: true,
                parquedero: true,
                //                amoblado: true,
                bano: 1,
                alcoba: 1,
                preciox: 400000,
                //                servicio: 2,
                //                anticipo: false,
                //                persona: 0,
                img: '/home/humberto/Projects/repositorio/inmobiliaria/src/assets/img/apto_1.jpg'

            },
            {
                id: 2,
                metros: '60',
                tipo: 2,
                construccion: '01/05/2002',
                direccion: 'CR 20# 20-20',
                ciudad: 2,
                zona: 2,
                localidad: 2,
                estrato: 2,
                sala: true,
                comedor: true,
                cocina: true,
                parquedero: true,
                //                amoblado: true,
                bano: 1,
                alcoba: 1,
                preciox: 500000,
                //                servicio: 2,
                //                anticipo: false,
                //               persona: 0,
                img: '../assets/img/apto_2.jpg'
            },
            {
                id: 3,
                metros: '140',
                tipo: 4,
                construccion: '01/05/2002',
                direccion: 'CR 20# 16-16',
                ciudad: 4,
                zona: 4,
                localidad: 4,
                estrato: 4,
                sala: true,
                comedor: true,
                cocina: true,
                parquedero: true,
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
        return this.tipo;
    };

    obtenerServicio() {
        return this.servicio;
    };

    obtenerDisponible() {
        return this.disponible;
    }

} export default new InmuebleService();