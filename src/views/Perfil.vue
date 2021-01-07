<template>
  <div id="app">
      <h1>Perfil</h1>
      <div class="text-left mb-4">
        <b-avatar size="139" icon="person-fill"></b-avatar>
        <div>
          <label for="txtUserCargo">Tipo de Utilizador</label><br>
          <input type="text" id="txtUserCargo" value="idk man" readonly>
        </div>
      </div>

      <label for="txtUserName">Nome</label><br>
      <input type="text" id="txtUserName" value="china#1" readonly><br>

      <label for="txtEmail">Email</label><br>
      <input type="email" id="txtEmail" value="china#2" readonly> <br>

      <label for="txtDescription">Descrição do Utilizador</label><br>
      <textarea id="txtDescription" rows="4" cols="50" readonly>
      Olá sou o gervásio, gosto de massa com atum
      </textarea><br>

      <b-button id="editUtilizador" variant="primary">Editar</b-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>