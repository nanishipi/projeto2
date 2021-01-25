<template>
   <div class="page" id="proposalDetail">
    <b-col md="12">
      <b-col md="12">
        <p id="title" class="mb-5">{{ proposta.titulo }} - Detalhes</p>
      </b-col>
      <b-col cols="12" class="data">
        <b-row>
          <b-col md="12">
            <b-col md="11 ">
              <div id="scrollarea-invalid" class="input">
                <div id="scrollarea-content" class="ml-5 mt-3">
                  <p v-if="proposta.tipo != 'estagio'" class="type">
                    Projeto ESMAD
                  </p>
                  <p v-else class="type">Estágio ESMAD</p>
                  <p class="title">{{ proposta.titulo }}</p>
                  <p class="header">Autor:</p>
                  <p class="text">{{ proposta.user }}</p>
                  <p class="header">Objetivos:</p>
                  <p class="text">{{ proposta.objetivos }}</p>
                  <p class="header">Plano Provisório de Trabalho:</p>
                  <p class="text">{{ proposta.plano }}</p>
                  <p class="header">Perfil do candidato desejado:</p>
                  <p class="text">{{ proposta.perfil }}</p>
                  <p class="header">Resultados Esperados:</p>
                  <p class="text">{{ proposta.resultados }}</p>
                  <p v-if="proposta.tipo == 'estagio'" class="header">
                    Identificação da Entidade Acolhedora:
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="text">
                    {{ proposta.entidade }}
                  </p>
                  <p class="text" v-if="proposta.tipo == 'estagio'">
                    {{ proposta.morada_entidade }}
                  </p>
                  <p class="text" v-if="proposta.tipo == 'estagio'">
                    {{ proposta.email_entidade }}
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="text">
                    {{ proposta.website }}
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="header">
                    Tutor na Entidade Acolhedora:
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="subtext ">
                    {{ proposta.tutor }}
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="subtext ">
                    {{ proposta.cargo }}
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="subtext ">
                    {{ proposta.email }}
                  </p>
                  <p v-if="proposta.tipo == 'estagio'" class="subtext ">
                    {{ proposta.contato }}
                  </p>

                  <p v-if="proposta.estado == 'aprovado'" class="header">
                    Professor Orientador ESMAD:
                  </p>
                  <p v-if="proposta.estado == 'aprovado'" class="text">
                    {{ proposta.orientador }}
                  </p>
                  <p v-if="proposta.estado == 'revisao'" class="header">
                    Motivo da Revisão:
                  </p>
                  <p v-if="proposta.estado == 'revisao'" class="text">
                    {{ proposta.msgRevisao }}
                  </p>
                  

                  <b-button
                    v-if="!admin && proposta.estado == 'aprovado'"
                    id="btnOpenForum"
                    class="btnOpenForum mb-4"
                    variant="light"
                    @click="$bvModal.show('candidatar_modal')"
                    >Candidatar-me</b-button
                  >
                  <b-button
                    v-if="admin && proposta.estado == 'aprovado'"
                    id="btnOpenForum"
                    class="btnOpenForum mb-4 mt-4"
                    variant="light"
                    @click="eliminar()"
                    >Eliminar Proposta</b-button
                  >
                  <b-button
                    v-if="
                      this.$store.getters.getLoggedUser.name == proposta.user &&
                        proposta.estado == 'revisao'
                    "
                    id="btnOpenForum"
                    class="btnOpenForum mb-4 mt-4"
                    variant="light"
                    @click="editar()"
                    >Editar</b-button
                  >

                  <b-button
                    v-if="admin && proposta.estado == 'analise'"
                    id="btnOpenForum"
                    class="btnOpenForum mb-4 mt-4"
                    variant="light"
                    @click="$bvModal.show('aprovar_modal')"
                    >Aprovar</b-button
                  >
                  <b-button
                    v-if="admin && proposta.estado == 'analise'"
                    id="btnOpenForum"
                    class="btnOpenForum ml-4 mb-4 mt-4"
                    variant="light"
                    @click="$bvModal.show('revisao_modal')"
                    >Enviar para Revisão</b-button
                  >
                </div>
              </div></b-col
            >
          </b-col>
        </b-row>
      </b-col>
    </b-col>

    <div>
      <b-modal
        id="candidatar_modal"
        class="modal-content"
        size="lg"
        hide-footer
        hide-header
      >
        <div class="d-flex justify-content-center  ">
          <b-col md="8">
            <p id="title" class="mb-5">Candidatar-me</p>
            <b-col md="12">
              <b-form-textarea
                id="input-3"
                v-model="form.candidatura"
                placeholder="Adicione observações à candidatura"
                rows="10"
                max-rows="10"
                required
                maxlength="350"
              ></b-form-textarea>
            </b-col>
            <b-col md="12">
              <b-row>
                <b-col md="3">
                  <label for="range" class="mt-2"
                    >Prioridade: {{ form.ordem }}
                  </label>
                </b-col>
                <b-col md="9">
                  <b-form-input
                    type="range"
                    v-model="form.ordem"
                    list="tickmarks"
                    class=" mt-3 range "
                    max="5"
                    min="1"
                /></b-col>
              </b-row>
            </b-col>
            <div class="d-flex justify-content-center">
              <b-button
                id="aprovar"
                @click="candidatar()"
                class="mt-4"
                type="submit"
                >Candidatar</b-button
              >
            </div>
          </b-col>
        </div>
      </b-modal>
    </div>

    <div>
      <b-modal id="aprovar_modal" size="lg" hide-footer hide-header>
        <div class="d-flex justify-content-center modalContent">
          <b-col md="8">
            <p id="title" class="mb-5">Atribuição de Tutor ESMAD</p>

            <b-input-group>
              <b-form-input
                v-model="form.orientador"
                list="my-list-id"
                placeholder="Selecione o Docente"
                class="input"
              ></b-form-input>
              <b-input-group-append> </b-input-group-append>
            </b-input-group>
            <datalist id="my-list-id">
              <option v-for="user in users" :key="user.name">
                {{ user.name }}
              </option>
            </datalist>

            <div class="d-flex justify-content-center">
              <b-button
                id="aprovar"
                @click="aprovar()"
                class="mt-4"
                type="submit"
                >Aprovar</b-button
              >
            </div>
          </b-col>
        </div>
      </b-modal>
    </div>

    <div>
      <b-modal
        id="revisao_modal"
        class="modalBox"
        size="lg"
        hide-footer
        hide-header
      >
        <div class="d-flex justify-content-center modalContent">
          <b-col md="8">
            <p id="title" class="mb-5">Motivo da Revisão</p>
            <b-form-textarea
              id="input-3"
              v-model="form.revisao"
              placeholder="Descreva o motivo da revisão"
              rows="10"
              max-rows="10"
              required
              maxlength="500"
            ></b-form-textarea>

            <div class="d-flex justify-content-center">
              <b-button
                id="revisao"
                @click="revisao()"
                class="mt-4"
                type="submit"
                >Enviar</b-button
              >
            </div>
          </b-col>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: this.$store.getters.getLoggedUser.name == "CCA" ? true : false,
      form: {
        orientador: "",
        revisao: "",
        candidatura: "",
        ordem: 1,
        user: this.$store.getters.getLoggedUser.name,
      },
      notification:{
        id: this.$store.getters.getNextnotificationId,
        message: "",
        username: "",
        userSend:"",
        userSendPhoto: ""
      },

      users: this.$store.getters.getUsers.filter(user=>user.selected=="docente"),
      proposta: this.$store.getters.getProposals.filter(
        (proposal) => proposal.id == this.$route.params.id
      )[0],
    };
  },
  methods: {
    editar() {},
    eliminar() {
      this.$store.dispatch("eliminar",this.$route.params.id)
      this.$router.go(-1)

    },
    aprovar() {
      
      this.notification.message = "A tua proposta '" + this.proposta.titulo + "' foi aprovada"
      this.notification.username = this.proposta.user
      this.notification.userSend = this.$store.getters.getLoggedUser.name
      this.notification.userSendPhoto = this.$store.getters.getLoggedUser.img
      this.$store.dispatch("registerNotification", this.$data.notification)
      this.$store.dispatch("aprovar", this.$data);

    },
    revisao() {
      this.notification.message = "A tua proposta '" + this.proposta.titulo + "' foi enviada para revisão. Para mais informações consulte a proposta"
      console.log(this.proposta)
      this.notification.username = this.proposta.user
      this.notification.userSend = this.$store.getters.getLoggedUser.name
      this.notification.userSendPhoto = this.$store.getters.getLoggedUser.img
      this.$store.dispatch("registerNotification", this.$data.notification)
      this.$store.dispatch("revisao", this.$data);
      //let user=this.proposal.user;
      //console.log(user)
    },
    candidatar() {
      this.$store.dispatch("candidatar", this.$data);
    },
  },
};
</script>
<style scoped>
.range {
  width: 100%;
}
.modal-content {
  background-color: #f5f5f5 !important;
}

.subtext {
  font-weight: lighter;
  font-size: 17px;
  color: #767676;
  margin-bottom: 2px;
}
#revisao {
  background-color: #0077b6;
  width: 200px;
  height: 40px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 17px;
  border: none;
}
#input-3 {
  background-color: white;
  border-radius: 15px !important;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}

#aprovar {
  background-color: #0077b6;
  width: 200px;
  height: 40px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 17px;
  border: none;
}
#scrollarea-invalid::-webkit-scrollbar-track {
  border-radius: 999px;
  width: 2px;
  margin-top: 50px;
  margin-left: 20px;
  background: white;
  margin-bottom: 20px;
}

#scrollarea-invalid::-webkit-scrollbar {
  width: 12px;
  height: 18px;
}

#scrollarea-invalid::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 7px;
  background-color: #c94514;
  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
    inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}

.text {
  font-weight: lighter;
  font-size: 17px;
  color: #767676;
  word-wrap:break-word;
}
.header {
  font-weight: 700;
  color: #707070;
  font-size: 20px;
  border-bottom: 1px solid #c94514;
  padding-bottom: 1px;
  display: inline-block;
}
.title {
  font-weight: bold;
  color: black;
  font-size: 23px;
  text-overflow: ellipsis;
}
.type {
  font-weight: bold;
  color: #767676;
  font-size: 15px;
}
#scrollarea-invalid {
  overflow-y: scroll;
  height: 25rem;
  scrollbar-color: #d88363;
}

#scrollarea-content {
  min-height: 101%;
}
.card {
  background-color: white;
  font-size: 17px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 36px !important;
  box-shadow: 2px 3px #d9d9d9;
}
.input {
  background-color: white;
  border-radius: 15px !important;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
#search {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
  height: 38px;
}
#proposalDetail {
  margin-top: 20px;
}

.TitlePage {
  color: #707070;
  font-size: 30px;
  display: inline-block;
  font-weight: lighter;
  border-bottom: 1px solid #c94514;
  padding-bottom: 2px;
}

.btnOpenForum {
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 19px;
  width: 159px;
  font-size: 14px;
  height: 38px;
}
#badgeNotification {
  border-radius: 999px;
}
.cardIdentification {
  color: #767676;
  font-size: 12px;
}
.text-muted {
  font-size: 17px;
}
.data{
 width: 163vh;
 height: 100%;
}
@media (max-width: 1090px) {
 .data{
   width: 120vh;
  }
}
@media (max-width: 1200px) {
 .data{
   width: 70vh;
  }
}
@media (max-width: 1200px) {
 .data{
   width: 70vh;
  }
}
</style>