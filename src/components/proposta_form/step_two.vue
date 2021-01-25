<template>
  <div class="page">
    <div id="form" class="mt-3">
      <b-form @submit="onSubmit">
        <b-container>
          <div v-if="error != ''">
            <warning message="Proposta já criada!" />
          </div>
             <p v-if="comp == 'estagio'" class="stepInfo"><span class="step">Passo 1</span> / <span class="step">Passo 2</span> / <span>Passo 3</span> </p>
             <p v-else class="stepInfo"><span class="step">Passo 1</span> / <span class="step">Passo 2</span></p>
          <b-row>
            <b-col sm="12" lg="6">
              <b-form-group
                id="input-group-1"
                label="Outros Dados Relevantes"
                label-for="input-1"
                class="mb-4"
              >
                <b-form-textarea
                  id="input-1"
                  v-model="form.dados_relevantes"
                  class="input"
                  placeholder="Outros dados que possam ser relevantes para o desenvolvimento do trabalho "
                  rows="10"
                  max-rows="10"
                  required
                  maxlength="500"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col sm="12" lg="6">
              <b-form-group
                id="input-group-2"
                label="Recursos Necessários"
                label-for="input-2"
                class="mb-4 "
              >
                <b-form-textarea
                  id="input-2"
                  v-model="form.recursos"
                  class="input"
                  placeholder="Descrever necessidades específicas para o projeto: hardware necessário, software necessário..."
                  rows="10"
                  max-rows="10"
                  required
                  maxlength="500"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-3"
                label="Plano Provisório Trabalho"
                label-for="input-3"
                class="mb-4"
              >
                <b-form-textarea
                  id="input-3"
                  v-model="form.plano"
                  class="input"
                  placeholder="Plano resumido de trabalhos ao longo das 15 semanas de estágio/projeto"
                  rows="10"
                  max-rows="10"
                  required
                  maxlength="1000"
                ></b-form-textarea>
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
                <b-button id="sumbitBtn" type="Submit">{{ comp == 'estagio' ? "Seguinte" : "Concluir" }}</b-button>
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
  name: "step_two",
  components:{
    warning
  },
  data() {
    return {
      //estagio: this.$parent.$data.estagio,
      error:"",
      form: {
        dados_relevantes: this.$parent.$data.form_proposta.dados_relevantes,
        recursos: this.$parent.$data.form_proposta.recursos,
        plano: this.$parent.$data.form_proposta.plano,
      },
    };
  },
  methods: {
    back() {
      this.$parent.$data.steps--;
    },
    onSubmit(event) {
      event.preventDefault();
      this.$parent.$data.form_proposta.dados_relevantes = this.form.dados_relevantes;
      this.$parent.$data.form_proposta.recursos = this.form.recursos;
      this.$parent.$data.form_proposta.plano = this.form.plano;
      if (this.comp == "estagio") {
        //avança para o prox passo
        this.$parent.$data.steps++;
      } else {
        try {
          this.$parent.$data.form_proposta.tipo = "projeto"
          this.$parent.$data.form_proposta.icon = "file-earmark-code"
          this.$store.dispatch("registerProposal", this.$parent.$data.form_proposta);
          this.$router.push({name:'myProposals'})
      } catch (error) {

        this.error = error
      }
      }
    },
  },
  computed:{
    comp(){
      return this.$route.params.type
    }
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
  width: 269px;
  height: 48px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 22px;
  border: none;
}
.stepInfo{
  font-size: 79%;
}
.step{
  border-bottom: 1px solid #C94514;
}
</style>
