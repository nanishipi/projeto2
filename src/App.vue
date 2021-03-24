<template>
  <div id="app">
    <b-container id="containerApp" fluid>
      <div v-if="isLoginRegister">
        <div v-if="isPage">
            <LoginBar/>
        </div>
        <div v-else>
          <RegistarBar/>
        </div>
      </div>
      <div v-else>
        <SideBar/>
      </div>
      <!--<router-link class="menuItems" :to="{ name: 'register' }"><b-icon style="color:#C74620; width: 22px; height: 22px;margin-right: 9px;" class="menuIcons" icon="book" aria-hidden="true"></b-icon>  Minhas Propostas</router-link>-->
    </b-container>
  </div>
</template>
<script>
import SideBar from "../src/components/SideBar.vue"
import LoginBar from "../src/components/LoginBar.vue"
import RegistarBar from "../src/components/RegistarBar.vue"
export default {
  components: {
    SideBar,
    LoginBar,
    RegistarBar,
  },
      computed:{
        isLoginRegister(){
           if(this.$route.name == "login" || this.$route.name == "register"){
               return true
           }else{
               return false
           }
        },
        isPage(){
          if(this.$route.name == "login"){
            return true
          }else{
            return false
          }
        }
    },
};
</script>
<style scoped>
#app{
  background-color: #F5F5F5;
}
#containerApp{
  padding: 0;
}
</style>
