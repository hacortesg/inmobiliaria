class SitioService{
    ciudad = [];
    zona = [];
    localidad = [];
    estrato = [];

    constructor(){
        this.ciudad = [
            {id: 1, nombre: "Barranquilla"},
            {id: 2, nombre: "Bogotá"},
            {id: 3, nombre: "Bucaramanga"},
            {id: 4, nombre: "Cali"},
            {id: 5, nombre: "Medellín"}
        ];
        this.zona = [
            {nombre: "Norte"},
            {nombre: "Centro"},
            {nombre: "Sur"},
            {nombre: "Occidente"},
            {nombre: "Oriente"},
            {nombre: "Noroccidente"}
        ];
        this.localidad = [
            {nombre: "Fontibón"},
            {nombre: "Martires"},
            {nombre: "Suba"},
            {nombre: "Sumapaz"},
            {nombre: "Teusaquillo"},
            {nombre: "Usaquen"}
        ];
        this.estrato = [
            {nombre: "Uno"},
            {nombre: "Dos"},
            {nombre: "Tres"},
            {nombre: "Cuatro"},
            {nombre: "Cinco"},
            {nombre: "Seis"}
        ];
        };

        obtenerCiudad(){
            return this.ciudad;
        };

        obtenerZona(){
            return this.zona;
        };
        
        obtenerLocalidad(){
            return this.localidad;
        };
        
        obtenerEstrato(){
            return this.estrato;
        };

}export default new SitioService();