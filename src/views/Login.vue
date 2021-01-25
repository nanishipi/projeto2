<template>
  <div class="page">
    <p id="title" class="ml-5">Login</p>
    <div class="d-flex justify-content-center">
      <b-col class="align-content-center " cols="6">
        <div id="form" class="mt-5">
          <b-form @submit.prevent="login">
            <div class="text-center mb-4">
              <b-avatar size="139" icon="person-fill"></b-avatar>
            </div>

            <b-form-group id="input-group-1" label="Email" label-for="input-1">
              <b-form-input
                id="input-1"
                class="input"
                v-model="email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                class="input"
                type="password"
                v-model="password"
                required
              ></b-form-input>
            </b-form-group>
             <div v-if="catchAlert.alert" class="d-flex justify-content-center mt-5">
              <b-alert id="alertMessage" show variant="danger">{{catchAlert.alert}}</b-alert>
            </div>
            <div class="d-flex justify-content-center mt-5">
              <b-button id="sumbitBtn" type="submit">Entrar</b-button>
            </div>
          </b-form>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        email: "",
        password: "",
        catchAlert:{
          alert: ""
        }
    };
  },
  methods: {
       login() {
            try {
                // Chamar a ação login que está na Store
                //this.$store.dispatch('login',{username: this.username, password: this.password})
                this.$store.dispatch('login',this.$data)
                // Saltar para a view Home
                this.$router.push({name:'forum'})

            } catch (error) {
              this.catchAlert.alert = error  
            }
        }
  },
};
</script>


<style scoped>
.page {
  background-color: #f5f5f5;
}
#sumbitBtn {
  background-color: #0077b6;
  width: 269px;
  height: 39px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 19px;
  border: none;
}
#alertMessage{
  background-color: #f5f5f5;
  color: red;
  border: none;
  font-size: 19px;
}

.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
.b-avatar {
  background-color: #eaeaea;
  color: #b3b3b3;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
}
#title {
  color: #707070;
  display: inline-block;
  font-size: 30px;
  font-weight: lighter;

  border-bottom: 1px solid #c94514;
  padding-bottom: 2px;
}
</style>