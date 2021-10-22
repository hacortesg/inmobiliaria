  <template>
  <section>
    <div>
    <table>
      <tbody>
      
        <tr> <th colspan="2"><p>Filtros Disponibles {{actual.nombre}}</p></th></tr>
        <tr> <th>Ciudad: </th>
        <td> <select v-model="vciudad" @change="SCiudad($event)"><option value="" disabled selected>Seleccione una Ciudad</option>
        <option v-for="ciudadU, i in listaCiudad" :key="i" :value="listaCiudad.id">{{ciudadU.id}}. {{ciudadU.nombre}}</option> </select> </td>
        </tr><tr><th>Zona: </th>
        <td> <select v-model="vzona" @change="SZona($event)"> <option value="" disabled selected>Seleccione una Zona</option> 
        <option v-for="zonaU, i in listaZona" :key="i" :value="zonaU.id">{{zonaU.id}}. {{zonaU.nombre}}</option> </select> </td>
        </tr><tr><th>Localidad: </th>
        <td> <select v-model="vlocalidad" @change="SLocalidad($event)"> <option value="" disabled selected>Seleccione una Localidad</option> 
        <option v-for="localidadU, i in listaLocalidad" :key="i" :value="localidadU.id">{{localidadU.id}}. {{localidadU.nombre}}</option> </select> </td>
        </tr><tr><th>Estrato:</th>
        <td> <select v-model="vestrato" @change="SEstrato($event)"> <option value="" disabled selected>Seleccione un Estrato</option> 
        <option v-for="estratoU, i in listaEstrato" :key="i" :value="estratoU.id">{{estratoU.id}}. {{estratoU.nombre}}</option> </select> </td>
        </tr><tr><th>Tipo de inmueble: </th>
        <td> <select v-model="vtipo" @change="STipo($event)" > <option value="" disabled selected>Seleccione un Tipo</option> 
        <option v-for="tipoU, i in listaTipo" :key="i" :value="tipoU.id">{{tipoU.id}}. {{tipoU.nombre}}</option> </select> </td>
        </tr><tr><th>Sala:</th><td><input type="checkbox" name="" id="" v-model="vsala">  </td>
        </tr><tr><th>Comedor:</th><td><input type="checkbox" name="" id="" v-model="vcomedor">  </td>
        </tr><tr><th>Cocina:</th><td><input type="checkbox" name="" id="" v-model="vcocina">  </td>
        </tr><tr><th>Parqueadero:</th><td><input type="checkbox" name="" id="" v-model="vparqueadero">  </td>
        </tr><tr><th>Amoblado:</th><td><input type="checkbox" name="" id="" v-model="vamoblado">  </td>
        </tr><tr><th>Baños:</th><td><input type="number" name="" id="" v-model="vbano"></td>
        </tr><tr><th>Alcoba:</th><td><input type="number" name="" id="" v-model="valcoba"></td>
        </tr><tr><th>Precio Máximo:</th><td><input type="number" name="" id="" v-model="vpreciox"></td>
        </tr><tr><th>Tipo de Servicio: </th>
        <td> <select v-model="vservicio" @change="SServicio($event)"> <option value="" disabled selected>Seleccione un servicio</option> 
        <option v-for="servicioU, i in listaServicio" :key="i" :value="servicioU.id">{{servicioU.id}}. {{servicioU.nombre}} ${{servicioU.precio}}</option> </select> </td>
        </tr><tr><th>Anticipo Anual:</th><td><input type="checkbox" name="" id="" v-model="vanticipo">  </td>
      </tr><tr><th>Tipo de Persona: </th><td><input type="radio" name="persona" value="0" v-model="vpersona">Natural
      <input type="radio" name="persona" value="1" v-model="vpersona">Jurídica</td>
      </tr><tr><td align="center"><button :disable="vbuscar" @click.prevent="buscar">Buscar</button></td
      ><td align="center"> <button @click.prevent="limpiaForma">Limpiar</button> </td>
      </tr></tbody>
    </table>
    </div>
    <div>
      <table>
        <tbody>
          <tr><td colspan="2"><p>{{titleSugerido}}</p></td></tr>
          <tr v-for="sugeridoU, i in listaSugerido" :key="sugeridoU">
          <div><img width="200" :src="sugeridoU.img" :alt="sugeridoU.id">{{sugeridoU.direccion}}
          <button @click.prevent="cotizar(i)">Cotizar</button> </div></tr>
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
import SitioService from '@/services/obsitio.js';
import InmuebleService from '@/services/obinmueble.js';
import CotizaService from '@/services/obcotiza.js';
import UsuarioService from '@/services/obcliente.js';

export default {
  mounted(){
    document.tilte = "Filtro de inmuebles";
//    this.listaCiudad = SitioService.obtenerCiudad();
//    console.log(listaCiudad);
    console.log(localStorage);
    SitioService.obtenerCiudad().then((respuesta)=>{
      //if()
      this.listaCiudad = respuesta.data;
    });
//    this.listaZona = SitioService.obtenerZona();
    SitioService.obtenerZona().then((respuesta)=>{
      this.listaZona = respuesta.data;
    });
//    this.listaLocalidad = SitioService.obtenerLocalidad();
    SitioService.obtenerLocalidad().then((respuesta)=>{
      this.listaLocalidad = respuesta.data;
    });
//    this.listaEstrato = SitioService.obtenerEstrato();
    SitioService.obtenerEstrato().then((respuesta)=>{
      this.listaEstrato = respuesta.data;
    });
//    this.listaTipo = InmuebleService.obtenerTipo();
    InmuebleService.obtenerTipo().then((respuesta)=>{
      this.listaTipo = respuesta.data;
      console.log(this.respuesta.data);
    });
//    this.listaServicio = InmuebleService.obtenerServicio();
      InmuebleService.obtenerServicio.then((respuesta)=>{
        this.listaServicio = respuesta.data;
      });
//    this.listaDisponible = InmuebleService.obtenerDisponible();
    InmuebleService.obtenerDisponible.then((respuesta)=>{
      this.listaDisponible = respuesta.data;
    });
    this.cotiza = CotizaService.obtenerCotizacion();
//    this.tarifa = CotizaService.obtenerTarifa();
    CotizaService.obtenerTarifa.then((respuesta)=>{
      this.tarifa = respuesta.data;
    });
//    this.listaUsuario = 
    CotizaService.obtenerTarifa.then((respuesta)=>{
      this.tarifa = respuesta.data;
    });
//    this.vestado = UsuarioService.obtenerIngresado();
    UsuarioService.obtenerById.then((respuesta)=>{
      if(respuesta.data.id!=null){
        this.actual = respuesta.data;
      }
    });
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
      listaUsuario: [],
      vestado: [],
      cotiza:{},
      actual:[],
      tarifa: [],
      encontrado:{
        id:0,
        img:'',
        direccion:''
      },
      buscado:{
        ciudad:'',
        zona:'',
        localidad:'',
        estrato: '',
        sala:'',
        comedor:'',
        cocina:'',
        parqueadero:'',
        bano: 0,
        alcoba:0,
        preciox: 0,
        amoblado:'',
        servicio: 0,
        anticipo: '',
        persona:0
      },
      vciudad: '',
      vzona: '',
      vlocalidad: '',
      vestrato: '',
      vtipo: '',
      vsala:'',
      vcomedor:'',
      vcocina:'',
      vparqueadero:'',
      vbano:0,
      valcoba:0,
      vpreciox:0,
      vamoblado:'',
      vservicio: '',
      vanticipo:'',
      vpersona: 0,
      vbuscar: true
    }
  },
  name: 'Home',
  components:{

  },
  methods: {
    buscar(){
      this.buscado.ciudad = parseInt(this.vciudad);
      this.buscado.zona = parseInt(this.vzona);
      this.buscado.localidad = parseInt(this.vlocalidad);
      this.buscado.estrato = parseInt(this.vestrato);
      if(this.vsala){
        this.buscado.sala = 1;
      }
      if(this.vcomedor){
        this.buscado.comedor = 1;
      }
      if(this.vcocina){
        this.buscado.cocina = 1;
      }
      if(this.vparqueadero){
        this.buscado.parqueadero = 1;
      }
      this.buscado.amoblado = this.vamoblado;
      this.buscado.bano = this.vbano;
      this.buscado.alcoba = this.valcoba;
      this.buscado.preciox = this.vpreciox;
      if (this.vservicio == ''){
        this.vservicio = 0;
      }
      this.buscado.servicio = parseInt(this.vservicio);
      this.buscado.anticipo = this.vanticipo;
      this.buscado.persona = this.vpersona;
      console.log(this.buscado);
      
//      for(let j = 0; j < this.listaDisponible.length; j++){
      for(let reg of this.listaDisponible){
        if (this.buscado.ciudad == reg.ciudad || this.buscado.zona == reg.zona ||
          this.buscado.localidad == reg.localidad || this.buscado.estrato == reg.estrato ||
          this.buscado.sala == reg.sala || this.buscado.comedor == reg.comedor ||
          this.buscado.cocina == reg.cocina || this.buscado.parqueadero == reg.parqueadero ||
          this.buscado.bano == reg.bano || this.buscado.alcoba == reg.alcoba ||
          this.buscado.preciox >= reg.preciox){
            this.titleSugerido = 'Inmuebles sugeridos en la lista';
            this.encontrado.id = reg.id;
            this.encontrado.img = reg.img; //require()
            this.encontrado.direccion = reg.direccion;
            this.listaSugerido.push(this.encontrado);
            this.encontrado = {id:0, img:'', direccion: ''};
            console.log('match -> ' + this.listaSugerido[0].img);
        }
            console.log(reg);
      }
      if(this.listaSugerido.length>0){
      this.vbuscar = false;
      }
    },
    cotizar(pos){
      console.log(this.vestado);
      //if(this.vestado[0]>=0){
      if(localStorage.cliente>0){ //  !=null)

        let nombre = this.acutal[0].nombre;
        let apellido = this.actual[0].apellido;
        let documento = this.actual[0].documento;
        this.cotiza.cliente = nombre + ' '+ apellido + ' ('+ documento + ')';
      };
      let total = 0;
      let canon = this.listaDisponible[pos].preciox;
      this.cotiza.canon = canon.toFixed(1);
      total = canon;
      let tipoI = this.listaDisponible[pos].tipo;
      this.cotiza.tipo = this.listaTipo[tipoI].nombre;
      let servicio = this.listaServicio[this.buscado.servicio].precio;
      this.cotiza.servicio = this.listaServicio[this.buscado.servicio].nombre +' $'+servicio;
      total += servicio;

      if(this.vpersona==1){
        let iva = this.tarifa[this.vpersona].porcien;
        let dato = canon * iva;
        dato += (canon * this.tarifa[this.vpersona].mas)* iva;
        this.cotiza.impuestos = dato.toFixed(1);
        total += dato;
      }
      let comision = canon * this.listaTipo[this.listaDisponible[pos].tipo].comision;
      this.cotiza.comision = comision.toFixed(1);
      total += comision;
      if (this.vanticipo){
        let anticipo = canon * 0.1;
        this.cotiza.descuentos = anticipo.toFixed(1);
        total -= this.cotiza.descuentos;
      }
      let admon = canon * this.listaTipo[this.listaDisponible[pos].tipo].administracion;
//      if(tipoI >= 0 || tipoI <= 3){
//        let admon = canon * this.tipo
      this.cotiza.admon = admon.toFixed(1);
      total += admon;
//      }
      if(this.vamoblado){
        let amobla = canon * 0.12;
        this.cotiza.amoblado = amobla.toFixed(1);
        total += amobla;
     }
      this.cotiza.total = total.toFixed(1);

      console.log(this.cotiza);
      this.vbuscar = true;
      this.$router.push('/cotizacion');
    },
    limpiaForma(){
      this.vbuscar = true;
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
        sala: 0,
        comedor: 0,
        cocina: 0,
        parqueadero: 0,
        amoblado:false,
        bano: 0,
        alcoba:0,
        preciox: 0,
        servicio: 0,
        anticipo: false,
        persona:0
      };
      this.titleSugerido='';
      this.listaSugerido = [];
    },
    SCiudad(event){
      this.vciudad = event.target.value;
    },
    SZona(event){
      this.vzona = event.target.value;
    },
    SLocalidad(event){
      this.vlocalidad = event.target.value;
    },
    SEstrato(event){
      this.vestrato = event.target.value;
    },
    STipo(event){
      this.vtipo = event.target.value;
    },
    SServicio(event){
      this.vservicio = event.target.value;
    }  
  },
};
</script>
