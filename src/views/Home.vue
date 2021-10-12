  <template>
  <section>
    <div>
    <table>
      <tbody>
        <tr> <th colspan="2"><p>Filtros Disponibles</p></th></tr>
        <tr> <th>Ciudad: </th>
        <td> <select v-model="vciudad" required><option value="" disabled selected>Seleccione una Ciudad</option>
        <option v-for="ciudadU, i in listaCiudad" :key="i">{{i}}. {{ciudadU.nombre}}</option> </select> </td>
        </tr><tr><th>Zona: </th>
        <td> <select v-model="vzona" > <option value="" disabled selected>Seleccione una Zona</option> 
        <option v-for="zonaU, i in listaZona" :key="i" >{{i}}. {{zonaU.nombre}}</option> </select> </td>
        </tr><tr><th>Localidad: </th>
        <td> <select v-model="vlocalidad"> <option value="" disabled selected>Seleccione una Localidad</option> 
        <option v-for="localidadU, i in listaLocalidad" :key="i" >{{i}}. {{localidadU.nombre}}</option> </select> </td>
        </tr><tr><th>Estrato:</th>
        <td> <select v-model="vestrato"> <option value="" disabled selected>Seleccione un Estrato</option> 
        <option v-for="estratoU, i in listaEstrato" :key="i" >{{i}}. {{estratoU.nombre}}</option> </select> </td>
        </tr><tr><th>Tipo de inmueble: </th>
        <td> <select v-model="vtipo"> <option value="" disabled selected>Seleccione un Tipo</option> 
        <option v-for="tipoU, i in listaTipo" :key="i" >{{i}}. {{tipoU.nombre}}</option> </select> </td>
        </tr><tr><th>Sala:</th><td><input type="checkbox" name="" id="" v-model="vsala">  </td>
        </tr><tr><th>Comedor:</th><td><input type="checkbox" name="" id="" v-model="vcomedor">  </td>
        </tr><tr><th>Cocina:</th><td><input type="checkbox" name="" id="" v-model="vcocina">  </td>
        </tr><tr><th>Parqueadero:</th><td><input type="checkbox" name="" id="" v-model="vparqueadero">  </td>
        </tr><tr><th>Amoblado:</th><td><input type="checkbox" name="" id="" v-model="vamoblado">  </td>
        </tr><tr><th>Baños:</th><td><input type="number" name="" id="" v-model="vbano"></td>
        </tr><tr><th>Alcoba:</th><td><input type="number" name="" id="" v-model="valcoba"></td>
        </tr><tr><th>Precio Máximo:</th><td><input type="number" name="" id="" v-model="vpreciox"></td>
        </tr><tr><th>Tipo de Servicio: </th>
        <td> <select v-model="vservicio"> <option value="" disabled selected>Seleccione un servicio</option> 
        <option v-for="servicioU, i in listaServicio" :key="i" >{{i}}. {{servicioU.nombre}} ${{servicioU.precio}}</option> </select> </td>
        </tr><tr><th>Anticipo Anual:</th><td><input type="checkbox" name="" id="" v-model="vanticipo">  </td>
      </tr><tr><th>Tipo de Persona: </th><td><input type="radio" name="persona" value="0" v-model="vpersona">Natural
      <input type="radio" name="persona" value="1" v-model="vpersona">Jurídica</td>
      </tr><tr><td align="center"><button @click.prevent="buscar">Buscar</button></td
      ><td align="center"> <button @click="limpiaForma">Limpiar</button> </td>
      </tr></tbody>
    </table>
    </div>
    <div>
      <table>
        <tbody>
          <tr><td colspan="2"><p>{{titleSugerido}}</p></td></tr>
          <tr v-for="sugeridoU, i in listaSugerido" :key="sugeridoU">
          <td><img :src="sugeridoU.img" width="200" alt="Img"> <button @click="cotizar(i)">Cotizar</button> </td></tr>
        </tbody>
      </table>
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
//import {ref} from "veu";
import SitioService from "@/services/obsitio.js";
import InmuebleService from "@/services/obinmueble.js";
import CotizaService from "@/services/obcotiza.js";

export default {
  mounted(){
    document.tilte = "Filtro de inmuebles";
    this.listaCiudad = SitioService.obtenerCiudad();
    this.listaZona = SitioService.obtenerZona();
    this.listaLocalidad = SitioService.obtenerLocalidad();
    this.listaEstrato = SitioService.obtenerEstrato();
    this.listaTipo = InmuebleService.obtenerTipo();
    this.listaServicio = InmuebleService.obtenerServicio();
    this.listaDisponible = InmuebleService.obtenerDisponible();
    this.cotiza = CotizaService.obtenerCotizacion();
    this.tarifa = CotizaService.obtenerTarifa();

  },
  data(){
    return{
      titleSugerido:'',
      listaCiudad: [],
      listaZona: [],
      listaLocalidad: [],
      listaEstrato: [],
      listaTipo:[],
      listaServicio: [],
      listaDisponible: [],
      listaSugerido: [],
      cotiza:{},
      tarifa: [],
      encontrado:{
        id:0,
        img:''
      },
      buscado:{
        ciudad:'',
        zona:'',
        localidad:'',
        estrato: '',
        sala:false,
        comedor:false,
        cocina:false,
        parqueadero:false,
        amoblado:false,
        bano: 0,
        alcoba:0,
        preciox: 0,
        servicio: 0,
        anticipo: false,
        persona:0
      },
      vciudad: '',
      vzona: '',
      vlocalidad: '',
      vestrato: '',
      vtipo: '',
      vsala:false,
      vcomedor:false,
      vcocina:false,
      vparquedero:false,
      vamoblado:false,
      vbano:0,
      valcoba:0,
      vpreciox:0,
      vservicio: '',
      vanticipo:false,
      vpersona: 0
    }
  },
  name: 'Home',
  components:{

  },
  methods: {
    buscar(){
      this.buscado.ciudad = this.vciudad.substr(0,1);
      this.buscado.zona = this.vzona.substr(0,1);
      this.buscado.localidad = this.vlocalidad.substr(0,1);
      this.buscado.estrato = this.vestrato.substr(0,1);
      this.buscado.sala = this.vsala;
      this.buscado.comedor = this.vcomedor;
      this.buscado.cocina = this.vcocina;
      this.buscado.parqueadero = this.vparqueadero;
      this.buscado.amoblado = this.vamoblado;
      this.buscado.bano = this.vbano;
      this.buscado.alcoba = this.valcoba;
      this.buscado.preciox = this.vpreciox;
      this.buscado.servicio = this.vservicio.substr(0,1);
      this.buscado.anticipo = this.vanticipo;
      this.buscado.persona = this.vpersona;
      console.log(this.buscado.ciudad + '  -> '+ this.listaDisponible[0].ciudad);

      for(let j = 0; j < this.listaDisponible.length; j++){

        if (this.buscado.ciudad == this.listaDisponible[j].ciudad){
          this.titleSugerido = 'Inmuebles sugeridos en la lista';
          this.encontrado.id = j;
          this.encontrado.img = this.listaDisponible[j].img; //require()
          this.listaSugerido.push(this.encontrado);
          console.log('match -> ' + this.listaSugerido[0].img);
        }
      }
      //this.limpiaForma();
    },
    cotizar(pos){
      let total;
      let canon = this.listaDisponible[pos].preciox;
      this.cotiza.canon = canon;
      total = canon;
      let tipoI = this.listaDisponible[pos].tipo;
      this.cotiza.tipo = this.listaTipo[tipoI].nombre;
      let servicio = this.listaServicio[this.buscado.servicio].precio;
      this.cotiza.servicio = this.listaServicio[this.buscado.servicio].nombre +' $'+servicio;
      total += servicio;

      if(this.vpersona==1){
        let iva = this.tarifa[this.vpersona].porcien;
        this.cotiza.impuestos = canon * iva;
        this.cotiza.impuestos += (canon * this.tarifa[this.vpersona].mas)* iva;
        total += this.cotiza.impuestos;
      }
      let comision = canon * this.listaTipo[this.listaDisponible[pos].tipo].comision;
      this.cotiza.comision = comision;
      total += comision;
      if (this.vanticipo){
        this.cotiza.descuentos = canon * 0.1;
        total -= this.cotiza.descuentos;
      }
      if(tipoI >= 0 || this.tipo <= 3){
        this.cotiza.admon = canon * 0.07;
       total += this.cotiza.admon;
      }
      if(this.vamoblado){
        this.cotiza.amoblado = canon * 0.12;
        total += this.cotiza.amoblado;
     }
      this.cotiza.total = total;

      console.log(this.cotiza);
      this.$router.push('/cotizacion');
    },
    limpiaForma(){
      this.vciudad = '';
      this.vzona = '';
      this.vlocalidad = '';
      this.vestrato = '';
      this.vsala = false;
      this.vcomedor = false;
      this.vcocina = false;
      this.vparquedero = false;
      this.vamoblado = false;
      this.vbano = 0;
      this.valcoba = 0;
      this.vpreciox = 0;
      this.vservicio = '';
      this.vanticipo = false;
      this.vpersona = 0;
      this.buscado = {
        ciudad:'',
        zona:'',
        localidad:'',
        estrato: '',
        sala:false,
        comedor:false,
        cocina:false,
        parqueadero:false,
        amoblado:false,
        bano: 0,
        alcoba:0,
        preciox: 0,
        servicio: 0,
        anticipo: false,
        persona:0
      };


    }
  }
};
</script>
