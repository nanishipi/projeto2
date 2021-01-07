<template>
  <div id="app">
      <h1>Editar Utilizador</h1>
      <form @submit.prevent='editUser'>
        <label for="txtUserName">Nome</label><br>
        <input type="text" id="txtUserName" required><br>

        <label for="txtUserNumber">Número</label><br>
        <input type="number" id="txtUserNumber" required><br>

        <label for="txtEmail">Email</label><br>
        <input type="email" id="txtEmail" required><br>

        <label for="sltCargo">Cargo</label><br>
        <select id="sltCargo" required>
          <option value="" disabled>Cargo</option>
          <option>Estudante</option>
          <option>Docente</option>
          <option>Entidade Externa</option>
          <!--<option v-for="cargo in cargos" :value="cargo.id">{{cargo.name}}</option>-->
        </select><br>

        <b-button id="" variant="primary">Alterar</b-button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>