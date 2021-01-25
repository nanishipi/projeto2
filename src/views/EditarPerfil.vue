<template>
  <div id="app">
      <h1 id="title">Editar a sua conta LTSIW</h1><br><br>
      <b-form @submit="editUser">
      <b-container id="imgContainer">
          <b-row>
            <div class="justify-content-start mb-4 mr-5">
              <b-avatar size="147" icon="person-fill"></b-avatar>
            </div>

            <b-form-group id="tipo" label="Tipo de utilizador" class="col-8">
              <b-row>
                <b-col>
                  <b-form-radio
                    v-model="selected"
                    name="some-radios"
                    class="opt ml-4"
                    value="docente"
                    >Docente</b-form-radio
                  >
                </b-col>

                <b-col>
                  <b-form-radio
                    v-model="selected"
                    name="some-radios"
                    class="opt"
                    value="entidadeExt"
                    >Entidade Externa</b-form-radio
                  >
                </b-col>
                <b-col>
                  <b-form-radio
                    v-model="selected"
                    name="some-radios"
                    class="opt ml-4"
                    value="aluno"
                    >Aluno</b-form-radio
                  >
                </b-col>
              </b-row>
            </b-form-group>
          </b-row>
        </b-container>
      <b-container cols="12">
          <b-col cols="12">
            <b-row>
              <b-col sm="12" lg="6">
                <b-form-group id="input-group-3" label="Nome" label-for="input-3" class="mb-4">
                  <b-form-input id="input-3" class="input" v-model="name" type="text" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Email" label-for="input-1" class="mb-4">
                  <b-form-input id="input-1" class="input" v-model="email" type="email" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2" class="mb-4">
                  <b-form-input id="input-2" class="input" type="password" v-model="confirm_password" required></b-form-input>
                </b-form-group>
              </b-col>

              <b-col>
                <b-form-group id="input-group-4" label="Descrição Utilizador" label-for="input-4">
                  <b-form-textarea id="textarea" v-model="descricao" placeholder="" rows="4" max-rows="7"></b-form-textarea>
                </b-form-group>

                <div class="end">
                  <b-form-group id="input-group-5" label="Confirmar Password" label-for="input-5" class="confirm mt-5">
                    <b-col cols="12">
                      <b-row>
                        <b-form-input id="input-5" class="password col-9 mr-3 input" type="password" v-model="password" required></b-form-input>
                        <b-button class="col-2 ml-3" id="seePW" @click="showPassword()"><b-icon-eye id="eye"/></b-button>
                      </b-row>
                    </b-col>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <div v-if="catchAlert.alert" class="d-flex justify-content-center mt-5">
            <b-alert id="alertMessage" show variant="danger">{{catchAlert.alert}}</b-alert>
          </div>
          <div class="d-flex justify-content-center mt-2">
            <b-row>
              <b-col>
                <b-button  id="sumbitBtn" type="submit">Confirmar</b-button>
              </b-col>
              <b-col>
                <b-button id="cancelBtn" @click="cancelEdit()">Cancelar</b-button>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </b-form>
  </div>
</template>

<script>
export default {
data(){
  return {
        email: this.getUserEmail,
        password: "",
        selected: this.getUserRole,
        name: this.getUserName,
        descricao: this.getUserDescription,
        confirm_password: "",
        catchAlert:{
            alert: ""
          },
    };
},
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
methods:{
  editUser() {
      try {
        this.$store.dispatch('editUser',this.$data)
        this.$router.push({name:'profile'})
      } catch (error) {
        this.catchAlert.alert = error
      }
    }
  },
  cancelEdit(){
    try {
      this.$router.push({name:'profile'})
    } catch (error) {
      this.catchAlert.alert = error
    }
  }
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
#cancelBtn{
  color: #ffffff;
  background-color: #c94514;
  width: 269px;
  height: 39px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 19px;
  border: none;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
#eye {
  color: #7d7d7d;
}
#seePW {
  background-color: #f5f5f5;
  border-width: 0px;
}
.opt {
  padding: 1px;
  font-size: 20px;
}
#tipo {
  font-size: 30px;
  margin-left: 40px;
}
.page {
  background-color: #f5f5f5;
  color: #707070;
  font-size: 20px;
}
#alertMessage{
  background-color: #f5f5f5;
  color: red;
  border: none;
  font-size: 19px;
}
#imgContainer{
  margin-left: 40px;
}
</style>
