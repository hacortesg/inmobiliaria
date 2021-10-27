import axios from "axios";
import puertoService from '@/router/puerto.js';

class UsuarioService{

usuario = [];
ingresado = [];
actual = {};

url = puertoService.obtenerPuerto();

constructor(){

    this.usuario=[
        {
            documento: 1030111111,
            nombre: 'Karen Milena',
            apellido: 'Gomez',
            usuario: 'karen',
            password: '1234',
            telefono: '350816181',
            email: 'karen@sitio.com'
        },
        {
            documento: 1030222222,
            nombre: 'Joan Sebas',
            apellido: 'Front',
            usuario: 'joan',
            password: '1234',
            telefono: '350816181',
            email: 'joan@sitio.com'
        }
    ];

    this.ingresado = [-1];
};

obtenerById(){
    let mid = localStorage.cliente;
    return axios.post(`${this.url}/cliente/${mid}`);
};

obtenerUsuarios(){
    return axios.get(`${this.url}/cliente/`);
//    return this.usuario;
};

obtenerIngresado(){
    return this.ingresado;
};

validar(muser, mpass){
    let datos = {usuario: muser, password: mpass};
    return axios.post(`${this.url}/cliente/validar/`, datos);
};

registrar(mdocumento, mnombre, mapellido, muser, mpass, mtel, memail){
    let miUser = {
        documento: mdocumento, 
        nombre: mnombre, 
        apellido: mapellido, 
        usuario: muser, 
        password: mpass, 
        telefono: mtel, 
        email: memail};
    return axios.post(`${this.url}/cliente/`, miUser);
};

}export default new UsuarioService();