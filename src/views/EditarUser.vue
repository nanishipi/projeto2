<template>
  <div id="app" class="editUserPage">
      <h1 id="title">Editar Utilizador</h1>
      <div class="d-flex justify-content-center">
        <b-form @submit.prevent='editUser'>
          <b-row>
            <b-col class="align-content-center">
              <label for="txtUserName">Nome</label><br>
              <input class="input" type="text" id="txtUserName" required><br>

              <label for="txtEmail">Email</label><br>
              <input class="input" type="email" id="txtEmail" required><br>
            </b-col>

            <b-col class="align-content-center">
              <label for="txtUserNumber">Número</label><br>
              <input class="input" type="number" id="txtUserNumber" required><br>
            
              <label for="sltCargo">Cargo</label><br>
              <select id="sltCargo" required>
                <option value="" disabled>Cargo</option>
                <option>Estudante</option>
                <option>Docente</option>
                <option>Entidade Externa</option>
                <!--<option v-for="cargo in cargos" :value="cargo.id">{{cargo.name}}</option>-->
              </select><br>
            </b-col>
          </b-row><br>  
          <button id="editBtn">Alterar</button>
        </b-form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.editUserPage {
  background-color: #f5f5f5;
}
#editBtn {
  color: #ffffff;
  background-color: #0077b6;
  width: 200px;
  height: 40px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 22px;
  border: none;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
#title {
  display: inline-block;
  font-size: 30px;
  font-weight: lighter;

  border-bottom: 1px solid #c94514; 
  padding-bottom: 2px;
}
select {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
  height: 28px;
  width: 178px;
  text-align-last: center;
}

</style>