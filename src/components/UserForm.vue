<template>
  <b-col class="align-content-start" cols="12">
    <div id="form" class="mt-2">
      <b-form @submit="register">
        <b-container>
          <b-row>
            <div class="justify-content-start mb-4 mr-5">
              <b-avatar class="mt-2" size="147" icon="person-fill" :src="img"> </b-avatar>
              <b-col cols="12">
                <div class="d-flex justify-content-center">
                  <b-button
                    class=" "
                    variant="light"
                    @click="$bvModal.show('imagem_modal')"
                    ><b-icon :icon="icon"
                  /></b-button></div
              ></b-col>
            </div>

            <b-form-group id="tipo" label="Tipo de utilizador" class="col-8 mt-5">
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
                <b-form-group
                  id="input-group-3"
                  label="Nome"
                  label-for="input-3"
                  class="mb-4"
                >
                  <b-form-input
                    id="input-3"
                    class="input"
                    v-model="name"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Email"
                  label-for="input-1"
                  class="mb-4"
                >
                  <b-form-input
                    id="input-1"
                    class="input"
                    v-model="email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Password"
                  label-for="input-2"
                  class="mb-4"
                >
                  <b-form-input
                    id="input-2"
                    class="input"
                    type="password"
                    v-model="confirm_password"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  id="input-group-4"
                  label="Descrição Utilizador"
                  label-for="input-4"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="descricao"
                    placeholder=""
                    rows="4"
                    max-rows="7"
                  ></b-form-textarea>
                </b-form-group>
                
                <div class="end">

                  <b-form-group
                    id="input-group-5"
                    label="Confirmar Password"
                    label-for="input-5"
                    class="confirm mt-5"
                  >
                    
                      
                        <b-form-input
                          id="input-5"
                          class="password  input"
                          type="password"
                          v-model="password"
                          required
                        ></b-form-input>
                      
                    
                  </b-form-group>
                  
                </div>
                
              </b-col>
            </b-row>
          </b-col>
          <div v-if="catchAlert.alert" class="d-flex justify-content-center mt-5">
            <b-alert id="alertMessage" show variant="danger">{{catchAlert.alert}}</b-alert>
          </div>
          <div class="d-flex justify-content-center mt-2">
            <b-button id="sumbitBtn" type="submit">Registar</b-button>
          </div>
        </b-container>
      </b-form>
    </div>
<div>
      <b-modal id="imagem_modal" size="lg" hide-footer hide-header>
        <div class="d-flex justify-content-center modalContent">
          <b-col md="8">
            <p id="title" class="mb-5">Foto de perfil</p>

            <b-input-group>
              <b-form-input
                v-model="img"
                list="my-list-id"
                placeholder="URL da imagem"
                class="input"
              ></b-form-input>
              <b-input-group-append> </b-input-group-append>
            </b-input-group>

            <div class="d-flex justify-content-center">
              <b-button
                id="aprovar"
                @click="$bvModal.hide('imagem_modal')"
                class="mt-4"
                type="submit"
                >Submeter</b-button
              >
            </div>
          </b-col>
        </div>
      </b-modal>
    </div>
  </b-col>
</template>
<style scoped>
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
.opt {
  padding: 1px;
  font-size: 20px;
}
#tipo {
  font-size: 30px;
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
</style>
<script>
export default {
  name: "user-form",
  data() {
    return {
      icon: "upload",
        email: "",
        password: "",
        selected: "aluno",
        name: "",
        img: "",
        descricao: "",
        confirm_password: "",
        catchAlert:{
            alert: ""
          },
    
    };
  },
     methods: {
        register() {
            try {
                this.$store.dispatch('register',this.$data)
                this.$router.push({name:'login'})
            } catch (error) {
                this.catchAlert.alert = error
            }
        }
    }
};
</script>