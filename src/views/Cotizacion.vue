<template>
  <section>
    <form action="#">
    <table>
      <tbody>
        <tr><th colspan="2"><p>Cotización: {{vpersona}}</p></th></tr>
        <tr>
          <th>Cliente</th>
          <td>{{cotiza.userCliente}}</td>
        </tr>
        <tr>
          <th>Inmueble</th>
          <td>{{cotiza.nombreTipo}}</td>
        </tr>
        <tr>
          <th>Canon</th>
          <td>{{cotiza.canon}}</td>
        </tr>
        <tr>
          <th>Servicio</th>
          <td>{{cotiza.nombreServicio}}</td>
        </tr>
        <tr>
          <th>Impuestos</th>
          <td>{{cotiza.impuesto}}</td>
        </tr>
        <tr>
          <th>Comisión</th>
          <td>{{cotiza.comision}}</td>
        </tr>
        <tr>
          <th>Descuentos</th>
          <td>{{cotiza.descuento}}</td>
        </tr>
        <tr>
          <th>Administración</th>
          <td>{{cotiza.administracion}}</td>
        </tr>
        <tr>
          <th>Amoblado</th>
          <td>{{cotiza.amoblado}}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{{cotiza.total}}</td>
        </tr>
        <tr v-if="vregistrado">
          <th>¡¡Datos Registrados!!</th>
          <td><button @click.prevent="listo">Cerrar</button></td>
        </tr>
        <tr>
          <td align="center"><button  @click.prevent="depositoOff">Pago en efectivo</button></td>
          <td align="center"><button @click.prevent="depositoOn" >Pago en linea</button></td>
        </tr>
      </tbody>
    </table>
    </form>
    <table>
      <tbody v-if="vpagoOff" class="pago">
        <div>
          <p>Estimad@ cliente: {{cotiza.cliente}} Por favor realice su deposito en Oficina Banco DaCasa: 212055950</p>
        </div>
        <div>
          <button @click.prevent="listoOff">Cerrar</button>
        </div>
      </tbody>
      <tbody v-if="vpagoOn" class="pago">
        <div>
          <p>Estimad@ cliente: {{cotiza.cliente}} Por favor realice su deposito en Oficina Banco Damasplata: 3168784257</p>
        </div>
        <div>
            <button @click.prevent="listoOn">Cerrar</button>
        </div>
      </tbody>      
    </table>
    <div>
      
    </div>
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
import CotizaService from "@/services/obcotiza.js";

export default {
  mounted() {
    document.title = "Cotización de inmueble";
    this.cotiza = CotizaService.obtenerTemporal();
    if(this.cotiza.impuesto > 0){
      this.vpersona = "Persona Juridica"
    }else{
      this.vpersona = "Persona Natural"
    }
    console.log(this.cotiza);
 //   if(cotiza.cliente!=null){ //  localStorage.cliente
 //   }else{
 //     CotizaService.obtenenerCotizacion().then((respuesta)=>{
 //       this.cotiza = respuesta.data;
 //     });
 //   }
  },
  data() {
    return {
      cotiza: {},
      vpagoOff: false,
      vpagoOn: false,
      vpersona: '',
      vregistrado: false
    };
  },
  name: 'Cotizacion',
  components: {

  },
  methods: {
    depositoOff(){
      this.vpagoOff = true;
      if(localStorage.cliente!=null){
        CotizaService.obtenerCotizacion().then((respuestaCotizacion)=>{

        if(respuestaCotizacion.data==null){
          CotizaService.registrarCotizacion(this.cotiza.cliente, this.cotiza.inmueble, 
          this.cotiza.tipo, this.cotiza.servicio, 
          parseInt(this.cotiza.canon), parseInt(this.cotiza.impuesto), 
          parseInt(this.cotiza.comision), parseInt(this.cotiza.descuento), 
          parseInt(this.cotiza.administracion), parseInt(this.cotiza.amoblado)).then((respuestaPrimer)=>{
          console.log(respuestaPrimer.data);
          
          if(respuestaPrimer.data != null){
            this.vregistrado = true;
          }
          });

          }else{
            CotizaService.modificarCotizacion(this.cotiza.id, this.cotiza.cliente, this.cotiza.inmueble, 
            this.cotiza.tipo, this.cotiza.servicio, 
            parseInt(this.cotiza.canon), parseInt(this.cotiza.impuesto), 
            parseInt(this.cotiza.comision), parseInt(this.cotiza.descuento), 
            parseInt(this.cotiza.administracion), parseInt(this.cotiza.amoblado)).then((respuestaModifica)=>{
            console.log(respuestaModifica.data);
          
            if(respuestaModifica.data != null){
              this.vregistrado = true;
            }
            });
          }
        });
      }
//      alert(`Estimad@ cliente: ${this.cotiza.cliente} Por favor realice su deposito en Oficina Banco DaCasa: 212055950`);
    },
    depositoOn(){
      this.vpagoOn = true;
      if(localStorage.cliente==null){
        CotizaService.registrarCotizacion(this.cotiza).then((respuesta)=>{
          console.log(respuesta.data);
        });
      }
//      alert(`Estimad@ cliente: ${this.cotiza.cliente} Por favor realice su deposito en Damasplata: 3168784257`);
    },
    listoOff(){
      this.vpagoOff = false;      
    },
    listoOn(){
      this.vpagoOn = false;
    },
    listo(){
      this.vregistrado = false;
    }
  },
};
</script>