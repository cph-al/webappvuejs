<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
    
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Index from '@/components/MiddleSection'
import Footer from '@/components/Footer'
import SelectedUser from '@/components/SelectedUser'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    SelectedUser
  }
}
</script>

<style>

</style>
