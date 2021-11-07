class puertoService{

    puerto="";
    constructor(){
        this.puerto = "http://132.145.72.186:8080";
    };

    obtenerPuerto(){
        return this.puerto;
    };
}export default new puertoService();
