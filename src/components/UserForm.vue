<template>
  <b-col class="align-content-start" cols="12">
    <div id="form" class="mt-2">
      <b-form @submit="onSubmit">
        <b-container>
          <b-row>
            <div class="justify-content-start mb-4 mr-5">
              <b-avatar size="147" icon="person-fill"></b-avatar>
            </div>

            <b-form-group id="tipo" label="Tipo de utilizador" class="col-8">
              <b-row>
                <b-col>
                  <b-form-radio
                    v-model="form.selected"
                    name="some-radios"
                    class="opt ml-4"
                    value="docente"
                    >Docente</b-form-radio
                  >
                </b-col>

                <b-col>
                  <b-form-radio
                    v-model="form.selected"
                    name="some-radios"
                    class="opt"
                    value="entidadeExt"
                    >Entidade Externa</b-form-radio
                  >
                </b-col>
                <b-col>
                  <b-form-radio
                    v-model="form.selected"
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
                    v-model="form.name"
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
                    v-model="form.email"
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
                    v-model="form.password"
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
                    v-model="form.descricao"
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
                    <b-col cols="12">
                      <b-row>
                        <b-form-input
                          id="input-5"
                          class="password col-9 mr-3 input"
                          type="password"
                          v-model="form.password"
                          required
                        ></b-form-input>
                        <b-button
                          class="col-2 ml-3"
                          id="seePW"
                          @click="showPassword()"
                          ><b-icon-eye id="eye"
                        /></b-button>
                      </b-row>
                    </b-col>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>
          </b-col>

          <div class="d-flex justify-content-center mt-2">
            <b-button id="sumbitBtn" type="submit">Registar</b-button>
          </div>
        </b-container>
      </b-form>
    </div>
  </b-col>
</template>
<style scoped>
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
}
.page {
  background-color: #f5f5f5;
  color: #707070;
  font-size: 20px;
}
</style>
<script>
export default {
  name: "user-form",
  data() {
    return {
      form: {
        email: "",
        password: "",
        selected: "",
        name: "",
        descricao: "",
      },
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    showPassword() {},
  },
};
</script>