<template>
  <div class="page">
    <div id="form" class="mt-3">
      <b-form @submit="onSubmit">
        <b-container>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-1"
                label="Título"
                label-for="input-1"
                class="mb-5"
              >
                <b-form-input
                  id="input-1"
                  class="input"
                  v-model="form.titulo"
                  type="text"
                  maxlength="50"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col sm="12" lg="6">
              <b-form-group
                id="input-group-2"
                label="Objetivos"
                label-for="input-2"
                class="mb-4"
              >
                <b-form-textarea
                  id="input-2"
                  v-model="form.objetivos"
                  class="input"
                  placeholder="Objetivos e breve descrição do trabalho"
                  rows="10"
                  max-rows="10"
                  required
                  maxlength="500"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col sm="12" lg="6">
              <b-form-group
                id="input-group-3"
                label="Resultados Esperados"
                label-for="input-3"
                class="mb-4"
              >
                <b-form-textarea
                  id="input-3"
                  v-model="form.resultados"
                  class="input"
                  placeholder="Descrever o que se pretende obter no final do projeto"
                  rows="10"
                  max-rows="10"
                  required
                  maxlength="500"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row align-v="end">
            <b-col
              ><div class="text-right mt-5">
                <b-button id="sumbitBtn" type="Submit">Seguinte</b-button>
              </div></b-col
            >
          </b-row>
        </b-container>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "step_one",
  data() {
    return {
      estagio: this.$parent.$data.estagio,
      form: {
        titulo: this.$parent.$data.form_proposta.titulo,
        objetivos: this.$parent.$data.form_proposta.objetivos,
        resultados: this.$parent.$data.form_proposta.resultados,
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.$parent.$data.steps++;
      this.$parent.$data.form_proposta.titulo = this.form.titulo;
      this.$parent.$data.form_proposta.objetivos = this.form.objetivos;
      this.$parent.$data.form_proposta.resultados = this.form.resultados;
    },
  },
};
</script>
<style scoped>
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
.page {
  background-color: #f5f5f5;
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
</style>
