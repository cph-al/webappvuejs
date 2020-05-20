<template>
    <div class="container">
        <b-table borderless hover 
        :items="users" 
        :fields="fields" 
        :key="users.user"
        @row-clicked="viewUser">
        <router-link :to="{ name: 'SelectedUser'}">
            <i>Details</i>
        </router-link>
        </b-table>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'MiddleSection',
    data() {
        return {
            fields: ['name', 'username','email'],
            users: [],
            sUser: []
        }
    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            this.users = response.data
        })
    },
    methods: {
        viewUser(t) {
            this.sUser = t
            this.$router.push({name: 'SelectedUser'})
        },
    }
}
</script>
<style>
.container {
    padding: 20px;
    margin: 20px;
}
</style>