const ingresado = (origen, destino, accion) =>{
    if(local){
        accion();
    }else{
        accion({name:"Login"})
    }
}export default new ingresado();