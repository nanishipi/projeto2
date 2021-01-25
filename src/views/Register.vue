<template>
  <div class="page">
    <p id="title" class="ml-5">Criar a sua Conta LTSIW</p>
    <div class="d-flex justify-content-start">
      <user-form />
    </div>
  </div>
</template>

<script>
import userForm from "../components/UserForm.vue";
export default {
  components: {
    userForm,
  },
};
</script>



<style>
#title {
  color: #707070;
  display: inline-block;
  font-size: 30px;
  font-weight: lighter;

  border-bottom: 1px solid #c94514;
  padding-bottom: 2px;
}
.page {
  background-color: #f5f5f5;
  color: #707070;
  font-size: 20px;
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

#textarea {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #e6e6e6;
  border: none;
}
</style>