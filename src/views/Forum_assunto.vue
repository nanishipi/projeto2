<template>
  <div class="page" id="forumContent">
    <b-col md="12">
      <b-col md="12">
        <p id="title" class="mb-5">Forum - {{ forum.nome }}</p>
      </b-col>
      <b-col md="12">
        <b-row>
          <b-col md="8" class="mb-3">
              
            <b-input id="seacrhInput" v-model="search" type="text" placeholder="Search"></b-input>
          </b-col>
          <b-col md="2" class="d-flex justify-content-end">
            <b-button id="createDiscuss" class="btnOpenForum "
              >Criar Assunto</b-button
            >
          </b-col>
          <b-col md="2">
            <b-button id="createForum" class="btnOpenForum" 
              >Criar Novo Forum</b-button
            >
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col v-for="assunto in assuntos" :key="assunto.id" cols="12">
            <b-card class="mt-5 discussionCard">
              <b-col md="12">
                <b-row align-v="center">
                  <b-col md="2">
                    <b-row>
                      <div class="d-flex justify-content-center">
                        <b-col>
                          <b-avatar size="50px" :src="assunto.img"></b-avatar
                        ></b-col></div
                    ></b-row>
                    <b-row class="mt-1">
                      {{ assunto.user }}
                    </b-row>
                  </b-col>
                  <b-col md="6">
                    <b-row>
                      {{ assunto.titulo }}
                    </b-row>
                    <b-row class="mt-4"
                      ><b-icon
                        icon="chat-left-fill"
                        style="width: 20px; height: 20px; color: #c74620" />
                      <b-icon-arrow-up
                        style="width: 25px; height: 25px; color: #0077b6"
                        class="arrow-up-short ml-3"
                    /></b-row>
                    <b-row
                      ><div class="d-flex justify-content-center ml-2">4</div>
                      <div class="d-flex justify-content-center ml-4">5</div>
                      
                      </b-row
                    >
                  </b-col>
                  <b-col md="4">
                    <div class="d-flex justify-content-end">À 8 horas</div>
                  </b-col>
                </b-row>
              </b-col>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <div></div>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      forum: {
        nome: "Desenvolvimento de Jogos",
      },
      assuntos: [
        {
          id: 1,
          titulo: "Em que dia são publicadas as propostas",
          user: "Sara Silva",
          respostas: 4,
          gostos: 50,
          data: "15/01-2021",
          hora: "16:00:00",
          img: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          titulo: "Em que dia são publicadas as propostas",
          user: "Sara Silva",
          respostas: 4,
          gostos: 50,
          data: "15/01-2021",
          hora: "16:00:00",
          img: "https://via.placeholder.com/150",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style  >
.card {
  background-color: white;
  font-size: 17px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 36px !important;
  box-shadow: 2px 3px #d9d9d9;
}
.input {
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
#forumContent {
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
#forumCard {
  background-color: white;
  font-size: 17px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 36px;
  box-shadow: 2px 3px #d9d9d9;
}
#createForum {
  background-color: #0077b6 ;
  color: white;
  border: none;
  border-radius: 19px;
  width: 100%;
  font-size: 14px;
  height: 38px;
  
}

#createDiscuss {
  background-color: #0077b6 ;
  color: white;
  border: none;
  border-radius: 19px;
  width: 100%;
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
</style>