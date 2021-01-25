<template>
  <div>
    <p id="title" v-if="comp == 'estagio'" class="ml-5">Criar Proposta Estágio</p>
    <p id="title" v-else class="ml-5">Criar Proposta Projeto</p>

    <step_one v-if="steps == 1" />
    <step_two v-if="steps == 2"></step_two>
    <step_three v-if="steps == 3">step3</step_three>
  </div>
</template>

<script>
import step_one from "../components/proposta_form/step_one.vue";
import step_two from "../components/proposta_form/step_two.vue";
import step_three from "../components/proposta_form/step_three.vue";
export default {
  components: {
    step_one,
    step_two,
    step_three,
  },

  data() {
    return {
      steps: 1,
      form_proposta: {
        estado: "analise",
        tipo: "",
        icon: "",
        titulo: "",
        objetivos: "",
        resultados: "",
        dados_relevantes: "",
        recursos: "",
        plano: "",
        entidade: null,
        tutor: "",
        email: "",
        cargo: "",
        contato: "",
        id: this.$store.getters.getNextProposalId,
        user: this.$store.getters.getLoggedUser.name,
      },
    };
  },
  methods: {},
  computed: {
    comp() {
      return this.$route.params.type;
    },
  },
};
</script>

<style>
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
</style>