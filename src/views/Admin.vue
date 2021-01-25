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
            <b-table-simple class="table input" borderless hover>
              <b-tr class="head">
                <b-th class="text-center">Nome</b-th>
                <b-th class="text-center">Número</b-th>
                <b-th class="text-center">Email</b-th>
                <b-th class="text-center">Cargo</b-th>
                <b-th class="text-center">Ações</b-th>
              </b-tr>
              <b-tr
                v-for="user in users"
                :key="user.id"
                class="text-center tabledata"
              >
                <b-td>{{ user.name }}</b-td>
                <b-td>{{ user.numero }}</b-td>
                <b-td>{{ user.email }}</b-td>
                <b-td>{{ user.selected }}</b-td>
                <b-td>
                  <b-button
                    class="btn_edit"
                    variant="#0077B6"
                    font-color="#0077B6"
                    @click="edit()"
                    ><b-icon-pencil-square
                      class="btn mr-4"
                      style="width: 23px; height: 23px"
                  /></b-button>
                  <b-button id="remove" class="btn" @click="remove()"
                    ><b-icon-trash-fill style="width: 23px; height: 23px" />
                  </b-button>
                </b-td>
              </b-tr>
            </b-table-simple>
          </b-col>
        </b-row>
      </b-col>
    </b-col>
  </div>
</template>

<script>
export default {
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
      users: this.$store.getters.getUsers
    };
  },
  methods: {
    edit() {},
    remove() {},
  },
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
  color: #dc3545;
  background-color: white;
  border: none;
}

.btn {
  color: #0077b6;
  background-color: white;
  border: none;
  padding: 0px;
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