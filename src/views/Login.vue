<template>
  <section>
    <table>
    <tr>
      <th>
        <p>Inicio de sesión</p>
      </th>
    </tr>
     <tr>
       <td>Usuario:</td>
     </tr>
     <tr>
       <td><input required type="text" name="usuario" placeholder="Escriba su usuario" v-model="vusuario"></td>
     </tr>
     <tr>
        <td>Contraseña:</td>
     </tr>
     <tr>
        <td><input required type="password" name="password" v-model="vpassword"></td>
     </tr>
     <tr align="center">
       <td><button @click.prevent="inicia">Ingrese</button>  </td>
     </tr>
     <tr>
       <td><router-link :to="{name: 'About'}">Registrese</router-link></td>
     </tr>
     <tr v-if="verror">
        <td>¡¡ Datos no registrados !!
        <button @click.prevent="listo">X</button>  </td>
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
import UsuarioService from '@/services/obcliente.js';

export default {
  mounted(){
//    localStorage.clear();
    document.title = 'Ingreso de Usuario';
//    this.listaUsuario = UsuarioService.obtenerUsuarios();
//    this.vestado = UsuarioService.obtenerIngresado();
  },
  data(){
    return{
      listaUsuario: [],
      vusuario: '',
      vpassword: '',
      vestado: [],
      dusuario:{},
      verror:false
    }
  },
  name: 'Login',
  components:{

  },
  methods:{
    inicia(){
      UsuarioService.validar(vusuario, vpassword).then((respuesta)=>{
        //respuesta.data.id
        if(respuesta.data!=null){
          // para la pestaña
        // sessionStorage
          // para la pagina console.lot(respuesta.data.id)
          localStorage.cliente = respuesta.data.id;
          
//          UsuarioService.setUsuario(respuesta.data);
          this.$router.push({name:"Cotizacion"});
        }
        else{
          this.verror = true;
        }
      });
    },
cerrar(){
    localStorage.clear();
    this.$router.push({name:"Login"});
},
listo(){
  this.verror = false;
},
ingresa(){
      let pasa = false;
      for(let u = 0; u < this.listaUsuario.length; u++){
        if(this.listaUsuario[u].usuario == this.vusuario && this.listaUsuario[u].password == this.vpassword){
          //alert('Bienvenido ' + this.listaUsuario[u].nombre + ' ' + this.listaUsuario[u].apellido);
          console.log(u);
          this.vestado[0] = u;
          this.$router.push('/');
          pasa = true;
        };
      };
      if(!pasa){
//        alert('No se encontro el usuario; ' + this.vusuario);
        this.verror = true;
      };
    }
  }
}
</script>