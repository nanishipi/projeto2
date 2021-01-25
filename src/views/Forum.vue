<template>
  <div id="forumContent" class="d-flex justify-content-center">
    <b-col id="contentContainer" cols="12">
      <div id="forumTitle">
        <b-col cols="12">
            <h3 class="TitlePage">Foruns</h3>
        </b-col>
      </div>
      <div>
        <b-col md="12">
          <b-input id="seacrhInput" class="mt-5" type="text" placeholder="Search"></b-input>
          <b-card class="mt-5" id="forumCard">
            <b-col md="3">
              <p class="cardIdentification"><b-icon style="color: #0077B6;" icon="chat-left-fill" aria-hidden="true"></b-icon> Forum</p>
            </b-col>
            <b-col md="12">
              <b-row>
                <b-col class="fw-bolder" md="8">
                  Injeção de SQL para obter dados - Quais os passos a tomar?<b-badge id="badgeNotification" class="ml-3" variant="danger">4</b-badge>
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">Numero de participantes 4</p>
                  </b-col>
                </b-col>
                <b-col md="4">
                  <div class="d-flex justify-content-end">
                    <b-button id="btnOpenForum" href="#" variant="primary" @click="$router.push({ name: 'forum_detalhes' })">Abrir</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-card>
           <b-card class="mt-5" id="forumCard">
            <b-col md="3">
              <p class="cardIdentification"><b-icon style="color: #0077B6;" icon="chat-left-fill" aria-hidden="true" @click="$router.push({ name: 'forum_detalhes' })"></b-icon> Forum</p>
            </b-col>
            <b-col md="12">
              <b-row>
                <b-col class="fw-bolder" md="8">
                  Injeção de SQL para obter dados - Quais os passos a tomar?<b-badge id="badgeNotification" class="ml-3" variant="danger">4</b-badge>
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">Numero de participantes 4</p>
                  </b-col>
                </b-col>
                <b-col md="4">
                  <div class="d-flex justify-content-end">
                    <b-button id="btnOpenForum" href="#" variant="primary" @click="$router.push({ name: 'forum_detalhes' })">Abrir</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-card>
           <b-card class="mt-5" id="forumCard">
            <b-col md="3">
              <p class="cardIdentification"><b-icon style="color: #0077B6;" icon="chat-left-fill" aria-hidden="true"></b-icon> Forum</p>
            </b-col>
            <b-col md="12">
              <b-row>
                <b-col class="fw-bolder" md="8">
                  Injeção de SQL para obter dados - Quais os passos a tomar?<b-badge id="badgeNotification" class="ml-3" variant="danger">4</b-badge>
                  <b-col class="text-muted mt-2" md="12">
                    <p class="participants">Numero de participantes 4</p>
                  </b-col>
                </b-col>
                <b-col md="4">
                  <div class="d-flex justify-content-end">
                    <b-button id="btnOpenForum"  href="#" @click="$router.push({ name: 'forum_detalhes' })" >Abrir</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-card>
        </b-col>
      </div>
    </b-col>
  </div>
</template>

<script>
</script>

<style>
#forumContent {
  margin-top: 20px;
}
#contentContainer{

}
.participants{
  font-size: 14px;
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
.cardText{

}
#seacrhInput{
  border: none;
  border-radius: 19px;
  box-shadow: 2px 3px #d9d9d9;
}
#btnOpenForum{
  background-color: #0077B6;
  color: white;
  border: none;
  border-radius: 19px;
  width: 159px;
  font-size: 14px;
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
</style>