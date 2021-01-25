<template>
    <div id="forumContent" class="d-flex justify-content-center">
    <b-col id="contentContainer" cols="12">
      <div id="forumTitle">
        <b-col cols="12">
            <h3 class="TitlePage">Propostas para analise</h3>
        </b-col>
      </div>
      <div>
        <b-col id="listCards" md="12">
          <div id="inputFilters" class="mt-5">
          <b-row>
            <b-col md="11">
              <b-input id="seacrhInput" v-model="search" type="text" placeholder="Search"></b-input>
              <br>
              <div v-if="selectedOption != 'all'">
                <p class="text">Filtros: <b-badge id="filterInfo">{{filterText}}</b-badge> <b-badge id="filterInfo">{{getProposals.length}} resultados</b-badge></p>
              </div>
            </b-col>
            <b-col id="filterButton" class="d-flex justify-content-end" md="1">
              <b-button id="filterBtn" variant="light" data-bs-toggle="dropdown"><b-icon icon="filter-right" aria-hidden="true"></b-icon></b-button>
                <ul id="dropdownFilter" class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a @click="allProposals" class="dropdown-item">Todas</a></li>
                    <li><a @click="filterProjeto" class="dropdown-item">Proposta Projeto</a></li>
                    <li><a @click="filterEstagio" class="dropdown-item">Proposta Estágio</a></li>
                </ul>
            </b-col>
          </b-row>
          </div>
          <!--Cards-->
         <div class="mt-3" id="cardsDisplay" v-if="getProposals.length > 0">
            <cardProjeto
              v-for="proposal in getProposals"
              :key="proposal.id"
              :propCard="proposal"
            />
          </div>
          <div class="align-self-center" v-else>
            <warning message="Não foram encontrados resultados para a pesquisa!"/>
          </div>
        </b-col>


      </div>
    </b-col>
  </div>
</template>
<script>
import cardProjeto from '../components/cardProjeto.vue'
import warning from '../components/warning.vue'
//import cardEstagio from '../components/cardEstagio.vue'
export default {
  name: "MinhasPropostas.vue",
  components:{
    cardProjeto,
    //cardEstagio,
    warning
  },
  data(){
    return{
      selectedOption:"all",
      filterText:"",
      search:""
    }
  },
  methods:{
    filterProjeto(){
      this.selectedOption = "projeto"
      this.filterText = "Projeto"
    },
    filterEstagio(){
      this.selectedOption = "estagio"
      this.filterText = "Estágio"
    },
    allProposals(){
      this.selectedOption = "all"
    }
  },
  computed:{
    getProposals(){
        return this.$store.getters.getFilterdProposals(this.selectedOption, this.search).filter(proposal=>proposal.estado=="analise");
    },
  },
}
</script>
<style scoped>
#forumContent {
  margin-top: 20px;
}
::-webkit-scrollbar {
    width: 14px;
     margin-top: 40px;
}

::-webkit-scrollbar-thumb {
    background: #C94514;
    background-clip: content-box;
    border: 6px solid transparent;
    margin-top: 40px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 14px 14px transparent;
  border: solid 5px transparent;
   margin-top: 40px;
   width: 12px;
}
#cardsDisplay{
    height: 59vh;
    overflow-y: scroll;
    
}
#btnFilter{
  background-color: white;
  color: #707070;
  width: 250px;
  border: none;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border-radius: 999px;
}
.TitlePage{
color: #707070;      
font-size: 30px;  
display: inline-block; 
font-weight: lighter;    
border-bottom: 1px solid #c94514;   
padding-bottom: 2px; 
}
#forumCard{
  background-color: white;
  font-size: 17px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 36px;
  box-shadow: 2px 3px #d9d9d9;
  
}
#filterBtn{
  background-color: white;
  border: none;
  border-radius: 999px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
   width: 49px;
  height: 49px;
  position: relative;
}
#seacrhInput{
  border: none;
  border-radius: 19px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  height: 49px!important;
}
#btnDetails{
  background-color: #0077B6;
  color: white;
  border: none;
  border-radius: 19px;
  width: 159px;
  font-size: 14px;
  font-weight: lighter;
}
#badgeNotification{
  border-radius: 999px;
}
.cardIdentification{
  color: #767676;
  font-size: 12px;
}
.text-muted{
  font-size: 17px;
}
#dropdownFilter{
  border: none;
  border-radius: 19px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  color: #707070;
}
#filterInfo{
  background-color: #C94514;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
}
.text{
  color: #707070;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
}
@media (max-width: 768px) {
    #filterButton{
        margin-top: 9px;
        align-content: flex-start;
        
    }
    #filterBtn{
      width: 100%;
    }
}
</style>