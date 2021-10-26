class puertoService{

    puerto="";
    constructor(){
        this.puerto = "http://localhost:8080";
    };

    obtenerPuerto(){
        return this.puerto;
    };
}export default new puertoService();
