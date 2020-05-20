<template>
  <div class="container">
    <button v-if="!selected" @click="goBack()">Back</button>
      <div class="selectedUser" v-if="!selected">
        <h2>Additional Information</h2>
        <ul class="aInfo">
          <label for="username">Username:</label>
          <li>{{this.sUser.username }}</li>
          <label for="Name">Name:</label>
          <li>{{this.sUser.name}}</li>
          <label for="phone">Phone:</label>
          <li>{{this.sUser.phone}}</li>
          <label for="Email">Email:</label>
          <li>{{this.sUser.email}}</li>
          <label for="Adress">Adress:</label>
          <li>{{this.sUser.address.street}}, {{this.sUser.address.suite}}</li>
          <li>{{this.sUser.address.zipcode}} | {{this.sUser.address.city}}</li>
          <label for="website">Website:</label>
          <li>{{this.sUser.website}}</li>
          <label for="Company">Company:</label>
          <li>{{this.sUser.company.name}}</li>
          <p> - {{this.sUser.company.catchPhrase}}</p>
        </ul>    
  </div>
    <b-table v-if="selected"
      borderless
      hover
      :items="users"
      :fields="fields"
      :key="users.user"
      @row-clicked="viewUser"
    ></b-table>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Index",
  data() {
    return {
      selected: true,
      fields: ["name", "username", "email"],
      users: [],
      sUser: []
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {
    viewUser(t) {
      this.sUser = t;
      this.selected = false
      
    },
    goBack() {
      this.selected = true
    }
  }
};
</script>
<style>
.container {
  padding: 20px 20px;

}
.hidden {
  display: none;
}
.aInfo {
  list-style: none;
}
label {
  font-size: 0.6rem;
  font-style: oblique;
  margin-bottom: 0.2rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
li {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>