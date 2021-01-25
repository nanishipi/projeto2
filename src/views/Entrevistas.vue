<template>
  <div class="page">
    <b-col md="12">
      <b-col md="12">
        <p id="title" class="mb-5">Minhas Entrevistas</p>
      </b-col>
      <b-col md="12">
        <b-row>
          <b-col cols="8" class="mb-3">
            <label class="position-relative d-block input">
              <b-icon
                icon="search"
                class="position-absolute h-100 text-muted ml-2"
              ></b-icon>
              <b-input
                style="padding-left: 30px"
                v-model="search"
                placeholder="Search"
                type="text"
                class="input"
              ></b-input>
            </label>
          </b-col>
          <b-col md="2">
            <b-form-select v-model="cargo" :options="cargos"></b-form-select>
          </b-col>
          <b-col md="2">
            <b-button
              id="agendar"
              type="submit"
              @click="$bvModal.show('agendar_modal')"
              >Agendar Entrevista</b-button
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col v-for="interview in interviews" :key="interview.id" cols="12">
            <b-card class="mt-5 interviewCard">
              <b-col md="3">
                <p class="cardIdentification">
                  <b-icon
                    style="color: #0077b6"
                    icon="mic-fill"
                    aria-hidden="true"
                  ></b-icon>
                  Entrevista
                </p>
              </b-col>
              <b-col md="12">
                <b-row>
                  <b-col class="fw-bolder" md="8">
                    <div class="title">{{ interview.title }}</div>
                    <b-col class="text-muted" md="12">
                      <p class="participants">Data: {{ interview.date }}</p>
                    </b-col>
                    <b-col class="text-muted" md="12">
                      <p class="participants">Hora: {{ interview.time }}</p>
                    </b-col>
                    <b-col class="text-muted" md="12">
                      <p class="participants">
                        Nº participantes: {{ interview.participant }}
                      </p>
                    </b-col>
                  </b-col>
                  <b-col md="4">
                    <div class="d-flex justify-content-end">
                      <b-button class="btnOpenInt" href="#" variant="primary"
                        >Opções</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <div>
        <b-modal id="agendar_modal" size="lg" hide-footer hide-header>
          <div class="d-flex justify-content-center">
            <b-col md="8">
              <p id="title" class="mb-5">Agendar Entrevista</p>
              <b-form-group
                id="input-group-3"
                label="Tópico da entrevista"
                label-for="input-3"
                class="mb-4 label"
              >
                <b-form-input
                  id="input-3"
                  class="input"
                  v-model="form.topico"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-input-group>
                <b-form-input
                  v-model="form.utilizador"
                  list="my-list-id"
                  placeholder="Selecione Utilizador"
                  class="input"
                ></b-form-input>
                <b-input-group-append>
                  <b-button
                    @click="selectedUser()"
                    class="input"
                    variant="light"
                    ><b-icon-plus id="plus"
                  /></b-button>
                </b-input-group-append>
              </b-input-group>
              <datalist id="my-list-id">
                <option v-for="user in users" :key="user.name">
                  {{ user.name }}
                </option>
              </datalist>

              <p id="SelectedUsers" class="mt-4">Users Selecionados:</p>
              <b-col
                v-for="(user1, index) in selectedUsersArr"
                :key="user1.name"
              >
                <div class="userSel" @click="deleteSel(index)">
                  {{ user1.name }}
                </div>
              </b-col>

              <b-form-datepicker
                id="date"
                class="input mt-4"
                placeholder="Data Entrevista"
                v-model="form.data"
              ></b-form-datepicker>
              <b-form-timepicker
                class="input mt-4"
                v-model="form.hora"
              ></b-form-timepicker>
              <div class="d-flex justify-content-center">
                <b-button
                  id="agendar"
                  @click="criarAgenda()"
                  class="mt-4"
                  type="submit"
                  >Agendar</b-button
                >
              </div>
            </b-col>
          </div>
        </b-modal>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",

      selectedUsersArr: [],
      form: {
        topico: "",
        utilizador: "",
        data: this.now(),
        hora: "00:00:00",
      },
      cargo: null,
      cargos: [
        { value: null, text: "Cargos" },
        { value: 1, text: "Docente" },
        { value: 2, text: "Professor" },
        { value: 3, text: "CCA" },
        { value: 4, text: "Entidade Externa" },
      ],
      users: this.$store.getters.getUsers,
      interviews: [
        {
          id: 1,
          date: "13/02/2021",
          title: "Entrevista sobre o projeto de estágio",
          participant: 6,
          time: "10:55",
        },
        {
          id: 2,
          date: "15/02/2030",
          title: "Entrevista Entrega Final",
          participant: 4,
          time: "22:55",
        },
        {
          id: 3,
          date: "15/02/2030",
          title: "Entrevista Entrega Final",
          participant: 4,
          time: "13:55",
        },
      ],
    };
  },
  methods: {
    criarAgenda() {},
    now() {
      let today = new Date().toISOString().slice(0, 10);
      return today;
    },
    deleteSel(index) {
      this.selectedUsersArr = this.selectedUsersArr.filter(
        (user) => user.name != this.selectedUsersArr[index].name
      );
    },
    selectedUser() {
      console.log(
        this.users.filter((user) => user.name == this.form.utilizador)
      );
      if (this.users.filter((user) => user.name == this.form.utilizador)[0]) {
        let a = {
          value: this.users.filter(
            (user) => user.name == this.form.utilizador
          )[0].name,
          name: this.users.filter(
            (user) => user.name == this.form.utilizador
          )[0].name,
        };
        this.selectedUsersArr.push(a);
      }
    },
  },
};
</script>


<style scoped >
.userSel {
  color: #707070;
}
.userSel:hover {
  background-color: #efefef;
}
#plus {
  color: black;
}
#SelectedUsers {
  color: #707070;
  display: inline-block;
  font-size: 5;
  font-weight: lighter;

  border-bottom: 1px solid #c94514;
}
.label {
  color: #707070;
  text-align: left;
}

.title {
  font-weight: 500;
}
.participants {
  margin: 0px;
}
.btnOpenInt {
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 19px;
  width: 159px;
  font-size: 14px;
}
.interviewCard {
  background-color: white;
  font-size: 17px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 36px;
  box-shadow: 2px 3px #d9d9d9;
}
.page {
  background-color: #f5f5f5;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
#agendar {
  background-color: #0077b6;
  width:100%;
  height: 40px;
  border-radius: 18px;
  font-weight: lighter;
  font-size: 17px;
  border: none;
}
</style>