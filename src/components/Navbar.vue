<template>
    <div>
        <b-navbar type="success" variant="light">
            <b-navbar-brand :to="{name: 'Index'}">Web application with bootstrap and Vue CLI</b-navbar-brand>
        </b-navbar>
    </div>
</template>
<script>

export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
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