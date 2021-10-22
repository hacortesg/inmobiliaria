class puertoService{

    puerto="";
    constructor(){
        this.puerto = "http://localhost:8000";
    };

    obtenerPuerto(){
        return this.puerto;
    };
}export default new puertoService();