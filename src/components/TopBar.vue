<template>
  <div>
    <b-col class="d-flex justify-content-end" cols="12">
      <p class="d-flex align-items-center mt-2" id="date">{{ new Date().toJSON().slice(0,10).replace(/-/g,'/') }}</p>

      <div id="backNotButton" class="d-flex justify-content-end">
        <b-button
          v-b-modal.notificationModal
          id="roundBackNotification"
          variant="light"
          ><b-icon icon="bell" aria-hidden="true"></b-icon
        ></b-button>
      </div>
      <div>
        <div>
          <b-modal id="notificationModal" size="lg" hide-header hide-footer>
            <b-col md="12">
              <b-row>
                <b-col md="6">
                  <p id="title">Notificações</p>
                </b-col>
                <b-col class="d-flex justify-content-end" md="6">
                   <b-button variant="light" class="closeModal">X</b-button>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="12">
        <div v-for="notify in getNotification" :key="notify.id">
        <ul v-if="notify.username == $store.getters.getLoggedUser.name" class="list-unstyled">
          <div class="mt-5">
            <b-media tag="li">
              <template #aside>
                <b-img class="userPhoto" :src="notify.userSendPhoto" width="64"></b-img>
              </template>
                <p class="mt-0 mb-1 username">{{notify.userSend}}</p>
                <p class="mb-0 message">
                 {{notify.message}}
                </p>
              </b-media>
            </div>
            </ul>
          </div>
            </b-col>
          </b-modal>
        </div>
      </div>
      <div id="userAvatar" class="d-flex justify-content-end">
        <div class="dropdown">
          <b-button
            id="roundBackNotification"
            variant="light"
            data-bs-toggle="dropdown"
            ><b-icon icon="person" aria-hidden="true"></b-icon
          ></b-button>
          <ul id="dropDownItems" class="dropdown-menu" aria-labelledby="">
            <b-col class="d-flex justify-content-center" md="12">
              <p class="dropName">Olá {{ getUserName }}</p>
            </b-col>
            <b-col class="d-flex justify-content-center" md="12">
              <li>
                <router-link class="menuItems" :to="{ name: 'profile' }"><button id="dropButtons" class="dropdown-item" type="button">Ver Perfil</button></router-link>
              </li>
            </b-col>
            <b-col class="d-flex justify-content-center" md="12">
              <router-link
                class="menuItems"
                @click.native="logout"
                :to="{ name: 'login' }"
                ><li>
                  <button id="dropButtons" class="dropdown-item" type="button">
                    Logout
                  </button>
                </li></router-link
              >
            </b-col>
          </ul>
        </div>
      </div>
    </b-col>
  </div>
</template>
<script>
//import warning from '../components/warning.vue'
export default {
  name: "TopBar",
  components: {
    //warning
  },
  computed: {
    getUserName() {
      return this.$store.getters.getLoggedUser.name;
    },
    getNotification(){
      return this.$store.getters.getNotification;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap");
.modal-content {
  background-color: red !important;
}
#roundBackNotification {
  background-color: white;
  border-radius: 999px;
  box-shadow: 2px 3px #d9d9d9;
  font-size: 19px;
  width: 49px;
  height: 49px;
}
.userPhoto{
  border-radius: 999px;
  border: none;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
}
.username{
  font-size: 19px;
  color: #767676;
  font-family: "Rubik", sans-serif;
  font-weight: lighter;
}
.message{
  color: #757070;
}
.closeModal{
  background-color: white;
  border: none;
  border-radius: 99px;
  width: 39px;
  height: 39px;
  color: #757070;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
}
#roundBackUserPhoto {
  background-color: red;
  border-radius: 999px;
  box-shadow: 2px 3px #d9d9d9;
  border: none;
  font-size: 19px;
}
#backNotButton {
  margin-left: 19px;
}
.dropName {
  font-weight: lighter;
  border-bottom: 1px solid #c94514;
}
#notification {
}
#userAvatar {
  margin-left: 19px;
}
#dropDownItems {
  border: none;
  border-radius: 19px;
  box-shadow: 2px 3px #d9d9d9;
}
#date {
  color: #747883;
}
</style>