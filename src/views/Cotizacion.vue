<template>
  <section>
    <table>
      <tbody>
        <tr><th colspan="2"><p>Cotización: Persona natural</p></th></tr>
        <tr>
          <th>Cliente</th>
          <td>{{cotiza.cliente}}</td>
        </tr>
        <tr>
          <th>Inmueble</th>
          <td>{{cotiza.tipo}}</td>
        </tr>
        <tr>
          <th>Canon</th>
          <td>{{cotiza.canon}}</td>
        </tr>
        <tr>
          <th>Servicio</th>
          <td>{{cotiza.servicio}}</td>
        </tr>
        <tr>
          <th>Impuestos</th>
          <td>{{cotiza.impuestos}}</td>
        </tr>
        <tr>
          <th>Comisión</th>
          <td>{{cotiza.comision}}</td>
        </tr>
        <tr>
          <th>Descuentos</th>
          <td>{{cotiza.descuentos}}</td>
        </tr>
        <tr>
          <th>Administración</th>
          <td>{{cotiza.admon}}</td>
        </tr>
        <tr>
          <th>Amoblado</th>
          <td>{{cotiza.amoblado}}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{{cotiza.total}}</td>
        </tr>
        <tr>
          <td align="center"><button  >Pago en efectivo</button></td>
          <td align="center"><button >Pago en linea</button></td>
        </tr>
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
    this.cotiza = CotizaService.obtenerCotizacion();
  },
  data() {
    return {
      cotiza: {},
    };
  },
  name: "Cotiza",
  components: {

  },
  methods: {},
};
</script>