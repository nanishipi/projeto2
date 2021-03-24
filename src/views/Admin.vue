<template>
  <div class="page">
    <b-col md="12">
      <b-col md="12">
        <p id="title" class="mb-5">Gestão de Utilizadores</p>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="7" class="mb-3">
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
          <b-col>
            <b-form-select v-model="cargo" :options="cargos"></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-3">
            <div v-if="windSize <= 992">
              <mobileUserCard v-for="user in users" :key="user.id" :propUser="user"/>
            </div>
            <div v-else>
              <desktopUserTable/>
            </div>  
          </b-col>
        </b-row>
      </b-col>
    </b-col>
  </div>
</template>

<script>
import mobileUserCard from '../components/mobileUserCard.vue'
import desktopUserTable from '../components/desktopUserTable.vue'
export default {
   components:{
    mobileUserCard,
    desktopUserTable
  },
  data() {
    return {
      search: "",
      cargo: null,
      cargos: [
        { value: null, text: "Cargos" },
        { value: 1, text: "Docente" },
        { value: 2, text: "Professor" },
        { value: 3, text: "CCA" },
        { value: 4, text: "Entidade Externa" },
      ],
      users: this.$store.getters.getUsers,
      windSize: window.innerWidth
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    edit() {},
    remove() {},
    myEventHandler() {
      this.windSize = window.innerWidth
    }
  },
  computed:{

  }
};
</script>


<style scoped >
/* .table tr.line-break td:first-child,
.table tr.line-break td:last-child {
  width: calc(100% - 10);
} */
.tabledata {
  font-size: 17px;
}
#remove {
  color: #0077b6;
  background-color: white;
  border: none;
}

.head {
  color: #707070;

  font-weight: lighter;

  border-bottom: 1px solid #c94514;

  padding-bottom: 2px;
}
.table {
  background-color: white;
  color: #747883;
  font-weight: lighter;
  border: none;
}
.page {
  background-color: #f5f5f5;
}
.input {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
</style>
