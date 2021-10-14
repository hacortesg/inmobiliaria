<template>
  <header id="header">
    <div><!--class="home"-->
      <img id="logo" alt="Logo IC" src="@/assets/img/logo_ic.png"/>
      <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    </div>
    <div class="titulo">
      <h1>Inmobiliaria Candelaria</h1>
    </div>
  </header>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Registrese</router-link> |
    <router-link to="/cotizacion">Cotizacion</router-link> |
    <router-link to="/login">Ingrese</router-link>
  </div>
  <router-view />
</template>

<style>
/*:root{
    scroll-behavior: smooth;
}*/
#app {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
*/
  color: black;
}
#header {
  background-color: #b7a2a1;
  display: flex;
  font-family: "Iceberg", cursive;
  color: white;
  font-size: 1.5rem;
  height: 15vh;
/*
  list-style: none;
  text-align: left;
  */

}
#logo{
  width: 30vw;
  max-width: 40%;
  min-width: 20vh;
  height: auto;
  text-align: left;
  box-sizing: border-box;
}

.titulo{
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  align-self: center;
}

#nav {
  background-color: #7a6b6c;
  padding: 0.0625rem;
  font-family: "Iceberg", cursive;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a:hover{
  color: #4a5350;
}

#nav a.router-link-exact-active {
  color: #fff;
}

section{
  display: inline-flex;
}

#th{
  height: 2rem;
}
section p {
    background-color: #EFE8E8;
    color: #7A6B6C;
    width: 100%;
    text-align: center;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    height: 1.7rem;
}

section table th {
    background-color: #B7A2A1;
    color: white;
    border: 0.0625rem white;
    font-style: normal;
    text-align: left;
}

section table td {
    background-color: #EFE8E8;
    border: 0.0625rem;
    border-top: #B7A2A1;
    border-right: #B7A2A1;
    border-bottom: #B7A2A1;
}


section button {
    background-color: #B7A2A1;
    color: white;
    width: 4.5rem;
    height: 3rem;
    border-radius: 0.4rem;
}







footer{
    background-image: linear-gradient(0deg, #7A6B6C 0%, #EFE8E8 100%);
    padding-bottom: 0.1px;
}

.footer-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 10px;
}


.contact-us{
    width: 40%;
    color: #fff;
}

.brand{
    font-weight: 700;
    font-size: 30px;
    padding-left: 20px;
}

.brand+p{
    font-weight: 500;
    padding-left: 20px;
    font-size: 14px;
}

.social-media{
    width: 50%;
    display: flex;
    justify-content: flex-end;
}

.social-media-icon{
    display: inline-block;
    margin-left: 20px;
    margin-right: 10px;
    width: 60px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 50%;
    text-align: center;
    color: #fff;
}

.social-media-icon i{
    font-size: 30px;
    line-height: 60px;
}

.line{
    width: 90%;
    max-width: 90%;
    margin: auto;
    height: 0.1vh;
    background: #fff; /*color de la linea blanca dentro del footer*/
    margin-bottom: 0.3rem;/*Ancho linea gris del footer*/
   margin-top: 0.3rem;/*Ancho linea gris del footer*/
}


.social-media-icon:hover{
    background: #fff;
    color: #7A6B6C;
}

.pie{
    clear: both;
    text-align: center;
    padding-bottom: 40px;   /*EFE8E8*/
    margin-top: 0;
    font-size: 11px;
    line-height: 15px;
    color: #fff;
}
</style>
