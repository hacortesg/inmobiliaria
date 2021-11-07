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

    this.ingresado = [];
};

obtenerById(mId){
    //let mid = localStorage.cliente;
    return axios.get(`${this.url}/cliente/${mId}`);
};

ponerActual(mNombre, mApellido, mDocumento){
//    return axios.get(`${this.url}/cliente/`);
    let dato = {nombre: mNombre, apellido: mApellido, docuemto: mDocumento};
    return this.actual = dato;
};

obtenerActual(){
    return this.actual;
};


obtenerIngresado(){
    return this.ingresado;
};

validar(mUser, mPass){
    let datos = {usuario: mUser, password: mPass};
    return axios.post(`${this.url}/cliente/validar/`, datos);
};

registrar(mDocumento, mNombre, mApellido, mUser, mPass, mTel, mEmail){
    let miUser = {
        documento: mDocumento, 
        nombre: mNombre, 
        apellido: mApellido, 
        usuario: mUser, 
        password: mPass, 
        telefono: mTel, 
        email: mEmail};
    return axios.post(`${this.url}/cliente/`, miUser);
};

}export default new UsuarioService();