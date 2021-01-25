<template>
  <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <b-row id="sideBarTop">
          <b-col cols="6">
            <img
              src="https://www.eurosci.net/sites/default/files/logo-ipp-2cm-300dpi_1.png"
              width="79px"
              height="79px"
            />
          </b-col>
          <b-col id="projectName" cols="6">
            <h2>TSIW</h2>
          </b-col>
        </b-row>
      </div>
      <div id="menuItemsInteract">
        <ul class="lisst-unstyled components">
          <!-- <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Home</a
            >
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <router-link class="menuItems" to="/Forum">Forum</router-link>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
            </ul>
          </li> -->
          <li class="d-flex justify-content-start">
            <router-link class="menuItems" :to="{ name: 'dashboard' }"
              ><b-icon
                style="
                  color: #c74620;
                  width: 22px;
                  height: 22px;
                  margin-right: 9px;
                "
                class="menuIcons"
                icon="check-circle"
                aria-hidden="true"
              ></b-icon>
              Dasboard</router-link
            >
          </li>
          <!-- <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Pages</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
          </li> -->

          <li class="d-flex justify-content-start">
            <router-link class="menuItems" :to="{ name: 'forum' }"
              ><b-icon
                style="
                  color: #c74620;
                  width: 22px;
                  height: 22px;
                  margin-right: 9px;
                "
                class="menuIcons"
                icon="chat"
                aria-hidden="true"
              ></b-icon>
              Forum</router-link
            >
          </li>

          <li class="d-flex justify-content-start">
            <router-link class="menuItems" :to="{ name: 'interview' }"
              ><b-icon
                style="
                  color: #c74620;
                  width: 22px;
                  height: 22px;
                  margin-right: 9px;
                "
                class="menuIcons"
                icon="clock"
                aria-hidden="true"
              ></b-icon>
              Entrevistas</router-link
            >
          </li>
          <li class="d-flex justify-content-start">
            <router-link class="menuItems" :to="{ name: 'interview' }"
              ><b-icon
                style="
                  color: #c74620;
                  width: 22px;
                  height: 22px;
                  margin-right: 9px;
                "
                class="menuIcons"
                icon="vector-pen"
                aria-hidden="true"
              ></b-icon>
              Requirimento CCA</router-link
            >
          </li>
          <li class="d-flex justify-content-start">
            <router-link class="menuItems" :to="{ name: 'myProposals' }"><b-icon
                style="
                  color: #c74620;
                  width: 22px;
                  height: 22px;
                  margin-right: 9px;
                "
                class="menuIcons"
                icon="book"
                aria-hidden="true"
              ></b-icon>
              Minhas Propostas</router-link
            >
          </li>
          <div v-if="getLoggedUser == 'CCA' ">
          <hr>
          <li class="d-flex justify-content-start">
            <router-link class="menuItems" :to="{ name: 'aproveProposals' }"><b-icon
                style="
                  color: #c74620;
                  width: 22px;
                  height: 22px;
                  margin-right: 9px;
                "
                class="menuIcons"
                icon="check2-circle"
                aria-hidden="true"
              ></b-icon>
              Aprovar Propostas</router-link
            >
          </li>
          </div>
          <li>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Criar Proposta
              </button>
              <ul
                id="dropDownItems"
                class="dropdown-menu"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                    <router-link :to="{ name: 'createProposal', params: { type: 'estagio' } }"> <button id="dropButtons" class="dropdown-item" type="button">Proposta de estágio</button></router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'createProposal', params: { type: 'projeto' } }"><button id="dropButtons" class="dropdown-item" type="button">Proposta de projeto</button></router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div id="content">
      <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
             <button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-align-left"></i>
              <span><b-icon icon="arrows-collapse" aria-hidden="true"></b-icon></span>
            </button>
          </div>
        </nav> -->
      <TopBar v-if="!isLoginRegister" ></TopBar>
      <router-view />
    </div>
  </div>
</template>
<script>
import TopBar from "./TopBar.vue";
export default {
  name: "SideBar",
  components: {
    TopBar,
  },
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {},
  computed: {
    isLoginRegister() {
      if (this.$route.name == "login" || this.$route.name == "register") {
        return true;
      } else {
        return false;
      }
    },
    getLoggedUser(){
      return this.$store.getters.getLoggedUser.name
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap");
body {
  font-family: "Rubik", sans-serif;
  background: #fafafa;
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

/* Side Bar*/

#sidebar.active {
  margin-left: -250px;
}
#sideBarTop{
  position: fixed;
}
.wrapper {
  display: flex;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
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
#menuItemsInteract {
  padding: 59px 0;
  margin-left: 9px;
}
#sidebar .sidebar-header {
  padding: 20px;
  background: white;
}
#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid white;
  margin-top: 15vh;
  list-style: none;
  position: fixed;
}

#sidebar ul li a {
  padding: 10px;
  display: block;
}

#sidebar ul li .menuItems:hover {
  color: #747883;
  background-color: #efefef;
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

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  background-color: #f5f5f5;
}
#dropdownMenu2 {
  background-color: #0077b6;
  border: none;
  border-radius: 19px;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
  margin-top: 29px;
  box-shadow: 2px 3px #d9d9d9;
  width: 200px;
}
#dropDownItems {
  border: none;
  border-radius: 33px;
  box-shadow: 2px 3px #d9d9d9;
  font-weight: lighter;
  border-radius: 19px;
}

#dropButtons {
  font-weight: lighter;
  color: #747883;
}
#dropButton:active{
  color: #c94514;
}
@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>