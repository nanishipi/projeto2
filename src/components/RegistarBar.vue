<template>
    <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
              <b-col md="12">
                  <img width="219" height="49" src="https://www.ipp.pt/covid19/img/pporto.png">
                  <p class="welcomeText mt-3">Licenciatura em Tecnologias e Sistemas de Informação para Web <br> Gestão de submissão de projetos</p>
                  <img class="mt-3" width="299" src="../assets/LoginWelcomeImage.png">
              </b-col>
          </div>
          <div id="menuItemsInteract">
              
          </div>
        </nav>

        <div id="content">
          <TopBar v-if="!isLoginRegister"/>
          <router-view />
        </div>
      </div>
</template>
<script>
import TopBar from "./TopBar.vue"
export default {
    name: "SideBar",
    components:{
        TopBar,
    },
    data(){
        return{
            isLogin: false,
        }
    },
    computed:{
        isLoginRegister(){
           if(this.$route.name == "login" || this.$route.name == "register"){
               return true
           }else{
               return false
           }
        }
    },
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap");
body {
  font-family: "Rubik", sans-serif;
  background: #fafafa;
}
#t{
    background-color: blue;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}
.menuItems,
.menuItems:hover,
.menuItems:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
  color: #747883;
  margin-left: 9px;
}
.welcomeText{
    font-family: "Rubik", sans-serif;
    color: #707070;
}

/* Side Bar*/

#sidebar.active {
  margin-left: -250px;
}
.wrapper {
  display: flex;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  width: 599px;
  background: white;
  color: #c94514;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
  transition: all 0.3s;
  text-align: center;
}
#projectName {
  padding: 20px 0;
}
#menuItemsInteract{
  padding: 59px 0;
  margin-left: 9px;
}
#sidebar .sidebar-header {
    min-height: 100%; 
    min-height: 100vh;
    display: flex;
    align-items: center;
}
#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid white;
  list-style: none;
}

#sidebar ul li a {
  padding: 10px;
  display: block;
}

#sidebar ul li .menuItems:hover {
  color: #747883;
  background-color: #EFEFEF;
  border-left: 3px solid #c74620;
}
#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: red;
  background: white;
}

a[data-toggle="collapse"] {
  position: relative;
  color: red;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
}
ul ul a {
  /*font-size: 0.9em !important;*/
  padding-left: 30px !important;
  background: #6d7fcc;
}

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  background-color: #f5f5f5;
}
#dropdownMenu2{
  background-color: #0077B6;
  border: none;
  border-radius: 19px;
   font-family: "Rubik", sans-serif;
   font-weight: lighter;
   margin-top: 29px;
   box-shadow: 2px 3px #d9d9d9;
   width: 200px;
}
#dropDownItems{
  border: none;
  border-radius: 33px;
  box-shadow: 2px 3px #d9d9d9;
  font-weight: lighter;
  border-radius: 19px;
}


#dropButtons{
  font-weight: lighter;
  color:#747883;
}
@media (max-width: 768px) {
  #sidebar {
    margin-left: -599px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>