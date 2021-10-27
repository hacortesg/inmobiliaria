<template>
<section>
      <p></p>
      <table>
        <tr>
          <th colspan="2"> <p>Registro de Usuarios</p></th>
        </tr><tr><th>Cédula:</th><td>
              <input required type="text" name="cedula" placeholder="Escriba su cédula" v-model="vdocumento"></td>
        </tr><tr><th>Nombre:</th>
            <td><input required type="text" name="nombre" placeholder="Escriba su nombre" v-model="vnombre"></td>
        </tr><tr><th>Apellido:</th>
            <td><input required type="text" name="apellido" placeholder="Escriba su apellido" v-model="vapellido"></td>
        </tr><tr><th>Usuario:</th>
            <td><input required type="text" name="usuario" placeholder="Escriba su usuario" v-model="vusuario"></td>
        </tr><tr><th>Contraseña:</th>
            <td><input required type="password" name="password" v-model="vpassword"></td>
        </tr><tr><th>Teléfono:</th>
            <td><input required type="tel" name="telefono" v-model="vtelefono"></td>
        </tr><tr><th>Correo:</th>
            <td><input required type="email" name="email" placeholder="nombre@ejemplo.com" v-model="vemail"></td>
        </tr>
        <tr>
          <td align="center"><button @click.prevent="registre">Registrese</button> </td>
          <td align="center"><button @click.prevent="clear">Limpiar</button> </td>
        </tr>
        <tr v-if="vregistrado">
          <td colspan="2" align="center">
          <p>¡¡Datos Registrados!!</p>
            <button @click.prevent="listo">Cerrar</button> </td>
        </tr>
      </table>
  </section>
     <!-- --------------------------------INICIO DEL FOOTER------------------------- -->

  <footer id="footer">
    <div class="contenedor footer-content">
      <div class="contact-us">
        <h2 class="brand">Inmobiliaria Candelaria</h2>
        <p>Somos expertos en la búsqueda del hogar de tus sueños</p>

      </div>
      <div class="social-media">
        <a href="./" class="social-media-icon">
          <i class='bx bxl-facebook'></i>
        </a>
        <a href="./" class="social-media-icon">
          <i class='bx bxl-twitter'></i>
        </a>
        <a href="./" class="social-media-icon">
          <i class='bx bxl-instagram'></i>
        </a>
      </div>
    </div>
    <div class="line"></div>
    <div class="pie">
      <address>
        <a href="mailto:servicioalcliente@inmobiliariacandelaria.com.co">Contactenos</a>
      </address>
      <p>Avenida SiempreViva Bogotá - Colombia
      </p>
      &#169; 2021
      Derechos Reservados
    </div>
  </footer>

  <!-- --------------------------------FIN DEL FOOTER------------------------- -->

  </template>

  <script>

import UsuarioService from "@/services/obcliente.js";


  export default {
    mounted(){
      document.title = 'Registro de usuario'
//      this.listaUsuarios = UsuarioService.obtenerUsuarios();
    },
    data(){
      return {
        listaUsuarios: [],
        vdocumento: '',
        vnombre: '',
        vapellido: '',
        vusuario: '',
        vpassword: '',
        vtelefono: '',
        vemail: '',
        vregistrado: false,
        registro: {
          documento:'',
          nombre: '',
          apellido: '',
          usuario: '',
          password: '',
          telefono: '',
          email: ''
        }
      }
    },
    name: 'Registro',
    components:{

    },
    methods:{
      registre(){
        this.registro.documento = this.vdocumento;
        this.registro.nombre = this.vnombre;
        this.registro.apellido = this.vapellido;
        this.registro.usuario = this.vusuario;
        this.registro.password = this.vpassword;
        this.registro.telefono = this.vtelefono;
        this.registro.email = this.vemail;
//        this.listaUsuarios.push(this.registro);
        UsuarioService.registrar(this.registro).then((respuesta)=>{
          console.log(respuesta.data);
          vregistrado = true;
        });
        this.vregistrado = true;
        this.clear();
        console.log(this.listaUsuarios);
      },
      clear(){
        this.vdocumento = '';
        this.vnombre = '';
        this.vapellido = '';
        this.vusuario = '';
        this.vpassword = '';
        this.vtelefono = '';
        this.vemail = '';
        this.registro = {
          documento:'',
          nombre: '',
          apellido: '',
          usuario: '',
          password: '',
          telefono: '',
          email: ''
        };

      },
      listo(){
        this.vregistrado = false;
      },
    }
  };
  </script>
