<template>
  <div>
    <b-card class="mt-3 mobileUsersCard" style="max-width: 20rem">
      <b-col md="12">
        <div class="d-flex justify-content-center">
          <b-img
            class="userAvatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTa17JCRyLEx_6KHJYWq-j3DTmkfnV013Hmov_rcZucXHHJkoSFY8Rfslwq-gNYAsK2c&usqp=CAU"
            width="64"
            height="64"
            alt="placeholder"
          ></b-img>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <p>{{ propUser.name }}</p>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <p>{{ propUser.email }}</p>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <p>40190044</p>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <p>{{ propUser.selected }}</p>
        </div>
        
        <div class="d-flex justify-content-center mt-2">
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
            ><b-icon-trash-fill
              style="width: 23px; height: 23px; color: #c61616"
            />
          </b-button>
        </div>
      </b-col>
    </b-card>
  </div>
</template>
<script>
export default {
  props:{
    propUser: Object
  }
}
</script>
<style scoped>
.userAvatar {
  border-radius: 100%;
}
.mobileUsersCard{
  border: none;
  font-weight: lighter;
}
.btn {
  color: #0077b6;
  background-color: white;
  border: none;
  padding: 0px;
}
.divisionCard{
  background-color: #c94514;
  width: 50px;
}
</style>