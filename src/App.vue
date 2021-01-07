<template>
  <div id="app">
    <div class="wrapper">
      <SideBarMenu />
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SideBarMenu from "./components/SideBarMenu.vue";
export default {
  components: {
    SideBarMenu,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap");

#content {
  background-color: #f5f5f5;
}
#app {
  font-family: "Rubik", sans-serif;
}
#col2 {
  background-color: chartreuse;
  height: 100vh;
}
</style>
