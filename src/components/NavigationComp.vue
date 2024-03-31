<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="navigation__item">
        <router-link to="/" class="nav__link">Home</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/project" class="nav__link">Project</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/blog" class="nav__link">Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import '@/assets/css/styleComponents/navigation_comp.css'

export default {
  name: 'NavigationComp'
}
</script>

<style>

</style>
