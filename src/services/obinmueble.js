class InmuebleService{

tipo = [];
servicio = [];
disponible = [];

constructor(){

    this.tipo = [
        {nombre: "Apartaestudio", comision: 0.06},
        {nombre: "Apartamento", comision: 0.06},
        {nombre: "Consultorio", comision: 0.06},
        {nombre: "Local", comision: 0.06},
        {nombre: "Casa", comision: 0.08},
        {nombre: "Bodega", comision: 0.1},
        {nombre: "Fabrica", comision: 0.1},
        {nombre: "Edificio", comision: 0.15},
        {nombre: "Finca", comision: 0.09},
        {nombre: "Terreno", comision: 0.07}
    ];

    this.servicio = [
        {nombre: "Administración de PPHH", precio: 8000000},
        {nombre: "Mantenimiento y Reparación", precio: 300000},
        {nombre: "Avaluo de renta", precio: 500000},
        {nombre: "Asesoría y Publiciada", precio: 300000},
        {nombre: "Seguro de Arrendamiento", precio: 800000},
        {nombre: "Servicio de Aseo", precio: 700000},
        {nombre: "Servicio de seguridad", precio: 1000000},

    ];

    this.disponible = [
        {
            metros: '120',
            tipo: '1',
            construccion: '01/05/1980',
            direccion: 'CR 10# 15-15',
            ciudad: '1',
            zona: '4',
            localidad: '3',
            estrato: '3',
            sala: true,
            comedor: true,
            cocina: true,
            parquedero: true,
            amoblado: true,
            bano: 1,
            alcoba: 2,
            preciox: 800000,
            servicio: 2,
            anticipo: false,
            persona: 0,
            img: "@/assets/Inmueble.jpg"

          },
          {
            metros: '90',
            tipo: '4',
            construccion: '01/05/2002',
            direccion: 'CR 10# 15-15',
            ciudad: '4',
            zona: '0',
            localidad: '0',
            estrato: '2',
            sala: true,
            comedor: true,
            cocina: true,
            parquedero: true,
            amoblado: false,
            bano: 1,
            alcoba:1,
            preciox: 200000,
            servicio: 2,
            anticipo: false,
            persona: 0,
            img: "@/assets/apto_cotizado_1_.jpg"
          },

    ];

};

obtenerTipo(){
    return this.tipo;
};

obtenerServicio(){
    return this.servicio;
};

obtenerDisponible(){
    return this.disponible;
}

}export default new InmuebleService();