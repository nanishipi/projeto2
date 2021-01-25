<template>
          <b-card class="mt-5" id="listCard">
            <b-col md="3">
                <p class="cardIdentification"><b-icon style="color: #0077B6; width: 19px; height: 19px;" :icon="propCard.icon" aria-hidden="true"></b-icon> Proposta {{propCard.tipo}}</p>
            </b-col>
            <b-col md="12">
              <b-row>
                <b-col v-if="propCard.estado == 'aprovado'" class="fw-bolder" md="8">
                  {{propCard.titulo}}
                  <b-badge class="proposalState ml-2" variant="success">Aprovado</b-badge>
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">{{propCard.objetivos}}</p>
                  </b-col>
                </b-col>
                 <b-col v-if="propCard.estado == 'revisao'" class="fw-bolder" md="8">
                  {{propCard.titulo}}
                  <b-badge class="proposalState ml-2" variant="danger">Para Revisão</b-badge>
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">{{propCard.objetivos}}</p>
                  </b-col>
                </b-col>
                <b-col v-if="propCard.estado == 'analise'" class="fw-bolder" md="8">
                  {{propCard.titulo}}
                  <b-badge class="proposalState ml-2" variant="warning">Em análise</b-badge>
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">{{propCard.objetivos}}</p>
                  </b-col>
                </b-col>
                <b-col md="4">
                  <div class="d-flex justify-content-end">
                    <router-link class="menuItems" :to="{ name: 'proposalDetails', params: { id: propCard.id } }"><b-button id="btnDetails" variant="primary">Detalhes</b-button></router-link>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-card>    
</template>
<script>
export default {
    name: "CardProjeto",
    props:{
        propCard: Object
    }
    
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap");
#listCard{
  background-color: white;
  font-size: 17px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 36px;
  box-shadow: 2px 3px #d9d9d9;
  width: 99%;
}
#btnDetails{
  background-color: #0077B6;
  color: white;
  border: none;
  border-radius: 19px;
  width: 159px;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
}
.proposalState{
  color: white;
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
}
</style>