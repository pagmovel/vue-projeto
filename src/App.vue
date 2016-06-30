<template>
  <div id="app" class="container">
    <div class="col-xs-4 col-md-4">
      <form-cliente></form-cliente>
    </div>
    <div class="col-xs-4 col-md-4">
      <form-cliente></form-cliente>
    </div>
    <div class="col-md-4">
      <button class="btn btn-primary">testando</button>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import FormCliente from './components/form-cliente'

export default {
  components: {
    Hello,
    FormCliente
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}


</style>
