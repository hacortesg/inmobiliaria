class puertoService{

    puerto="";
    constructor(){
        this.puerto = "http://192.168.20.112:8080";
    };

    obtenerPuerto(){
        return this.puerto;
    };
}export default new puertoService();
