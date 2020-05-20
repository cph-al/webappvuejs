<template>
  <div class="container">
    <h2>{{sUser.name}}</h2>
  </div>
</template>
<script>
export default {
  name: "SelectedUser",
  data() {
    return {
      userID: this.$route.params.user_id,
      sUser: []
    };
  },
  
};
</script>
<style>
</style>