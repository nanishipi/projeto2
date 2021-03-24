<template>
  <b-table-simple class="table input" borderless hover>
    <b-tr class="head">
      <b-th class="text-center">Nome</b-th>
      <b-th class="text-center">Email</b-th>
      <b-th class="text-center">Cargo</b-th>
      <b-th class="text-center">Ações</b-th>
    </b-tr>
    <b-tr v-for="user in $store.getters.getUsers" :key="user.id" class="text-center tabledata">
      <b-td>{{ user.name }}</b-td>
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
        <b-button id="remove" class="btn mr-4" @click="remove()"
          ><b-icon-trash-fill style="width: 23px; height: 23px" />
        </b-button>
      </b-td>
    </b-tr>
  </b-table-simple>
</template>
<script>
export default {
    props:{
        propUser: Object
    },
};
</script>
<style scoped>
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