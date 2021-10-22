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
    return axios.post(`${this.url}/${mid}`);
};

obtenerUsuarios(){
    return axios.get(`${this.url}/cliente/todos`);
//    return this.usuario;
};

obtenerIngresado(){
    return this.ingresado;
};

validar(muser, mpas){
    let datos = {usuario: muser, password: mpass};
    return this.axios.post(`${this.url}/validar`, datos);
};

}export default new UsuarioService();