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
       <td><button @click.prevent="ingresa">Ingrese</button>  </td>
     </tr>
     <tr>
       <td><router-link :to="{name: 'About'}">Registrese</router-link></td>
     </tr>
    </table>
  </section>

</template>

<script>
import UsuarioService from '@/services/obcliente.js';

export default {
  mounted(){
    document.title = 'Ingreso de Usuario';
    this.listaUsuario = UsuarioService.obtenerUsuarios();
    this.vestado = UsuarioService.obtenerIngresado();
  },
  data(){
    return{
      listaUsuario: [],
      vusuario: '',
      vpassword: '',
      vestado: []
    }
  },
  name: 'Login',
  components:{

  },
  methods:{
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
        alert('No se encontro el usuario; ' + this.vusuario);
      };
    }
  }
}
</script>