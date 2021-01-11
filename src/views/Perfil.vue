<template>
  <div id="app">
      <h1 id="title">Perfil</h1><br><br><br>
      <b-row>
        <b-col cols="2">
          <b-avatar size="139" icon="person-fill"></b-avatar>
        </b-col>
        <b-col cols="2">
          <div>
            <label for="txtUserCargo">Tipo de Utilizador</label><br>
            <input class="input" type="text" id="txtUserCargo" value="idk man" readonly>
          </div>
        </b-col>
      </b-row><br><br><br>

      <b-row>
        <b-col cols="4">
          <label for="txtUserName">Nome</label><br>
          <input class="input" type="text" id="txtUserName" value="china#1" readonly><br>

          <label for="txtEmail">Email</label><br>
          <input class="input" type="email" id="txtEmail" value="china#2" readonly> <br>
        </b-col>

        <b-col cols="6">
          <label for="txtDescription">Descrição do Utilizador</label><br>
          <textarea class="inputArea" id="txtDescription" rows="4" cols="50" readonly>
          Olá sou o gervásio, gosto de massa com atum
          </textarea><br>
        </b-col>
      </b-row><br>
      <b-button id="editBtn">Editar</b-button>
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
  width: 150px;
  height: 38px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 20px;
  border: none;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
  width: 200px;
  height: 30px;
}
.inputArea{
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
</style>