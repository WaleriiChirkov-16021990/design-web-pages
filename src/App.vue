<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--    <router-view/>-->
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp'
import FooterComp from '@/components/FooterComp'
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">
</style>
