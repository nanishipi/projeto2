<template>
  <div class="page">
    <div id="form" class="mt-3">
      <b-form @submit="registerProposal">
        <b-container>
          <div v-if="error != ''">
            <warning message="Proposta já criada!" />
          </div>
            <p v-if="comp == 'estagio'" class="stepInfo"><span class="step">Passo 1</span> / <span class="step">Passo 2</span> / <span class="step">Passo 3</span> </p>
          <b-row>
            <b-col cols="11">
              <b-form-group
                id="input-group-1"
                label="Entidade Acolhedora"
                label-for="input-1"
                class="mb-4"
              >
                <b-form-select
                  class="input"
                  v-model="form.entidade"
                  :options="entidades"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>

            <b-col>
              <b-container>
                <b-row align-v="center" align-h="center"
                  ><b-col
                    ><b-icon-plus-circle
                      class="mt-5" /></b-col></b-row></b-container
            ></b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-2"
                label="Nome do Tutor na Entidade"
                label-for="input-2"
                class="mb-3"
              >
                <b-form-input
                  id="input-2"
                  class="input"
                  v-model="form.tutor"
                  type="text"
                  maxlength="50"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-3"
                label="Email do Tutor"
                label-for="input-3"
                class="mb-3"
              >
                <b-form-input
                  id="input-3"
                  class="input"
                  v-model="form.email"
                  type="text"
                  maxlength="50"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-4"
                label="Cargo do Tutor"
                label-for="input-4"
                class="mb-3"
              >
                <b-form-input
                  id="input-4"
                  class="input"
                  v-model="form.cargo"
                  type="text"
                  maxlength="50"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-5"
                label="Contato do Tutor "
                label-for="input-5"
                class="mb-3"
              >
                <b-form-input
                  id="input-5"
                  class="input"
                  v-model="form.contato"
                  type="text"
                  maxlength="13"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row align-v="end">
            <b-col
              ><div class="text-left mt-5">
                <b-button id="sumbitBtn" type="Button" @click="back()"
                  >Voltar</b-button
                >
              </div>
            </b-col>
            <b-col
              ><div class="text-right mt-5">
                <b-button id="sumbitBtn" type="Submit">Concluir</b-button>
              </div></b-col
            >
          </b-row>
        </b-container>
      </b-form>
    </div>
  </div>
</template>
<script>
import warning from '../warning.vue'
export default {
  name: "step_three",
  components:{
    warning
  },
  data() {
    return {
      error:"",
      //estagio: this.$parent.$data.estagio,
      entidades: [
        { value: null, text: "Selecione uma opção" },
        { value: 1, text: "Empresa machado" },
      ],

      form: {
        entidade: this.$parent.$data.form_proposta.entidade,
        tutor: this.$parent.$data.form_proposta.tutor,
        email: this.$parent.$data.form_proposta.email,
        cargo: this.$parent.$data.form_proposta.cargo,
        contato: this.$parent.$data.form_proposta.contato,
      },
    };
  },
  methods: {
    back() {
      this.$parent.$data.form_proposta.tutor = this.form.tutor;
      this.$parent.$data.form_proposta.email = this.form.email;
      this.$parent.$data.form_proposta.cargo = this.form.cargo;
      this.$parent.$data.form_proposta.contato = this.form.contato;
      this.$parent.$data.steps--;
    },
    registerProposal() {
      try {
        this.$parent.$data.form_proposta.entidade = this.form.entidade;
        this.$parent.$data.form_proposta.tutor = this.form.tutor;
        this.$parent.$data.form_proposta.email = this.form.email;
        this.$parent.$data.form_proposta.cargo = this.form.cargo;
        this.$parent.$data.form_proposta.contato = this.form.contato;
        this.$parent.$data.form_proposta.tipo = "estagio"
        this.$parent.$data.form_proposta.icon = "building"
        this.$store.dispatch(
          "registerProposal",
          this.$parent.$data.form_proposta
        );
        
        this.$router.push({name:"myProposals"});
      } catch (error) {
        this.error = error
      }
    },
  },
  computed:{
    comp() {
      return this.$route.params.type;
    },
  }
};
</script>
<style scoped>
.page {
  background-color: #f5f5f5;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
#sumbitBtn {
  background-color: #0077b6;
  width: 200px;
  border-radius: 18px;
  font-weight: lighter;
  border: none;
}
.stepInfo{
  font-size: 79%;
}
.step{
  border-bottom: 1px solid #C94514;
}

</style>
