<!--<template>
  <div id="app">
      <h1 id="title">Perfil</h1><br><br><br>
      <b-row>
        <b-col cols="2">
          <b-avatar size="139" icon="person-fill"></b-avatar>
        </b-col>
        <b-col cols="2">
          <div>
            <label for="txtUserCargo">Tipo de Utilizador</label><br>
            <input class="input" type="text" id="txtUserCargo" :value="getUserRole" readonly>
          </div>
        </b-col>
      </b-row><br><br><br>

      <b-row>
        <b-col cols="4">
          <label for="txtUserName">Nome</label><br>
          <input class="input" type="text" id="txtUserName" :value="getUserName" readonly><br>

          <label for="txtEmail">Email</label><br>
          <input class="input" type="email" id="txtEmail" :value="getUserEmail" readonly> <br>
        </b-col>

        <b-col cols="6">
          <label for="txtDescription">Descrição do Utilizador</label><br>
          <textarea class="inputArea" id="txtDescription" :value="getUserDescription" rows="4" cols="50" readonly>
          </textarea><br>
        </b-col>
      </b-row><br>
      <router-link :to="{ name: 'editarPerfil' }"><button id="editBtn">Editar</button></router-link>
  </div>
</template>

<script>
export default {
computed: {
    getUserName() {
      console.log(this.$store.getters.getLoggedUser.name)
      return this.$store.getters.getLoggedUser.name;
    },
    getUserEmail() {
      return this.$store.getters.getLoggedUser.email;
    },
    getUserDescription() {
      return this.$store.getters.getLoggedUser.descricao;
    },
    getUserRole() {
      return this.$store.getters.getLoggedUser.selected;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
}

</script>

<style scoped>
.editUserPage {
  background-color: #f5f5f5;
}
#app{
  padding-left: 70px;
}
#editBtn {
  color: #ffffff;
  background-color: #0077b6;
  width: 150px;
  height: 40px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 20px;
  border: none;
  margin-top: 40px;
  outline: none;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
  width: 200px;
  height: 38px;
  padding-left: 10px;
  outline: none;
}
.inputArea{
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
  padding-left: 15px;
  padding-top: 3px;
  outline: none;
}
#title {
  display: inline-block;
  font-size: 30px;
  font-weight: lighter;

  border-bottom: 1px solid #c94514; 
  padding-bottom: 2px;
}
label{
  padding-top: 6px;
  margin-top: 10px;
}
</style>-->