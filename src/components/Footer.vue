<template>
  <div>
    <b-navbar fixed="bottom" type="success" variant="dark">
      <div class="mb-2 float: right">
        <b-avatar icon="people-fill"></b-avatar>
        <b-avatar icon="star-fill"></b-avatar>
        <b-avatar icon="music-note"></b-avatar>
        <b-avatar icon="star-fill"></b-avatar>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style>
.navbar {
  min-height: 80px;
}
.navbar-brand {
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
}
</style>