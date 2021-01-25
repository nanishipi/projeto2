<template>
          <b-card class="mt-5" id="forumCard">
            <b-col md="3">
              <p class="cardIdentification"><b-icon style="color: #0077B6; width: 19px; height: 19px;" icon="building" aria-hidden="true"></b-icon> Projegto Estágio</p>
            </b-col>
            <b-col md="12">
              <b-row>
                <b-col class="fw-bolder" md="8">
                  Desenvolvimento de Jogos
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">Pretende-se neste projeto a criação de um jogo sob plataforma Android, que cumpra os requisitos de mercado</p>
                  </b-col>
                </b-col>
                <b-col md="4">
                  <div class="d-flex justify-content-end">
                    <b-button id="btnDetails" href="#" variant="primary">Detalhes</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-card>
</template>
<script>
export default {
    name: "CardEstagio"
    
}
</script>
<style scoped>

</style>