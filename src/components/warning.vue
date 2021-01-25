<template>
    <b-alert class="alert" show variant="danger">
        {{message}}
    </b-alert>
</template>
<script>
export default {
   props:{
       message: String
   }
}
</script>
<style scoped>
.alert{
    border: none;
    border-radius: 19px;
    box-shadow: 2px 2px 2px 2px #e6e6e6;
    width: 100%;
}
</style>