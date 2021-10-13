class UsuarioService{

usuario = [];
ingresado = [];

constructor(){

    this.usuario=[
        {
            documento: 1030111111,
            nombre: 'Karen Milena',
            apellido: 'Gomez',
            usuario: 'kareng',
            password: '1234',
            telefono: '350816181',
            email: 'karen@sitio.com'
        },
        {
            documento: 1030222222,
            nombre: 'Joan Sebas',
            apellido: 'Front',
            usuario: 'joanf',
            password: '1234',
            telefono: '350816181',
            email: 'joan@sitio.com'
        }
    ];

    this.ingresado = [-1];
};

obtenerUsuarios(){
    return this.usuario;
};

obtenerIngresado(){
    return this.ingresado;
};

}export default new UsuarioService();