<template>
  <div class="loginPage">
    <p id="title" class="ml-5">Login</p>
    <div class="d-flex justify-content-center">
      <b-col class="align-content-center" cols="6">
        <div id="form" class="mt-5">
          <b-form @submit="onSubmit">
            <div class="text-center mb-4">
              <b-avatar size="139" icon="person-fill"></b-avatar>
            </div>

            <b-form-group id="input-group-1" label="Email" label-for="input-1">
              <b-form-input
                id="input-1"
                class="input"
                v-model="form.email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                class="input"
                type="password"
                v-model="form.password"
                required
              ></b-form-input>
            </b-form-group>
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
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>


<style scoped>
.loginPage {
  background-color: #f5f5f5;
}
#sumbitBtn {
  background-color: #0077b6;
  width: 269px;
  height: 48px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 22px;
  border: none;
}

.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
.b-avatar {
  background-color: #eaeaea;
  color: #b3b3b3;
}
#title {
  display: inline-block;
  font-size: 30px;
  font-weight: lighter;

  border-bottom: 1px solid #c94514;
  padding-bottom: 2px;
}
</style>