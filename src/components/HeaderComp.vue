<template>
  <header class="header">
    <div class="container header__flex">
      <router-link to="/" >
        <img  src="../assets/img/Logo.svg" alt="logo">
      </router-link>
      <NavigationComp  />
    </div>
  </header>
</template>

<script>
import NavigationComp from './NavigationComp.vue'
import '@/assets/css/styleComponents/header_comp.css'

export default {
  name: 'HeaderComp',
  components: {
    NavigationComp
  }
}
</script>

<style>

</style>
