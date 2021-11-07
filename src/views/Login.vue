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
       <td><input required  v-model="vusuario" type="text" name="usuario" placeholder="Escriba su usuario"></td>
     </tr>
     <tr>
        <td>Contraseña:</td>
     </tr>
     <tr>
        <td><input required  v-model="vpassword" type="password" name="password"></td>
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
import CotizaService from '@/services/obcotiza.js';
import InmuebleService from '@/services/obinmueble.js';

export default {
  mounted(){
//    localStorage.clear();
    document.title = 'Ingreso de Usuario';
//    this.listaUsuario = UsuarioService.obtenerUsuarios();
//    this.vestado = UsuarioService.obtenerIngresado();
    InmuebleService.obtenerTipo().then((respuesta)=>{
      if(respuesta.data!=null){
        this.listaTipo = respuesta.data;
      }
    });
    InmuebleService.obtenerServicio().then((respuesta)=>{
      if(respuesta.data!=null){
        this.listaServicio = respuesta.data;
      }
    });
 
 },
  data(){
    return{
      listaUsuario: [],
      listaTipo: [],
      listaServicio: [],
      vusuario: "",
      vpassword: "",
      vestado: [],
      duser:{},
      cotiza: {},
      verror:false
    }
  },
  name: 'Login',
  components:{

  },
  methods:{
    inicia(){
      console.log(this.vusuario + " " + this.vpassword);
      UsuarioService.validar(this.vusuario, this.vpassword).then((respuesta)=>{
        //respuesta.data.id
        if(respuesta.data!=null){
          // para la pestaña
        // sessionStorage
          // para la pagina console.lot(respuesta.data.id)
          localStorage.cliente = respuesta.data.id;
//          console.log(localStorage.cliente);
          this.duser = respuesta.data;
//          UsuarioService.pornerActual(this.duser.nombre, this.duser.apellido, this.duser.documento);
          console.log(respuesta.data);
//          UsuarioService.setUsuario(respuesta.data);
          CotizaService.obtenerCotizacion().then((respuesta)=>{
            if(respuesta.data!=null){
              this.cotiza = respuesta.data[0];
              console.log(this.cotiza);
              let total = this.cotiza.canon;
              total += this.cotiza.impuesto;
              total += this.cotiza.comision;
              total += this.cotiza.administracion;
              total += this.cotiza.amoblado;
              this.cotiza.userCliente = this.duser.nombre + ' ' + this.duser.apellido + ' ('+ this.duser.documento+')';
              let indice = 0;
              indice = parseInt(this.cotiza.tipo) - 1;
              this.cotiza['nombreTipo'] =  this.listaTipo[indice].nombre;
              indice = parseInt(this.cotiza.servicio) - 1;
              let precioServicio = this.listaServicio[indice].precio;
              this.cotiza['nombreServicio'] = this.listaServicio[indice].nombre +' $' + precioServicio;
              total += precioServicio;
              console.log(total);
              total -= this.cotiza.descuento;
              this.cotiza['total'] = total;
              CotizaService.guardarTemporal(this.cotiza);
              this.$router.push({name:"Cotizacion"});
            }else{
              this.$router.push({name:"Home"});
            }
          });
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