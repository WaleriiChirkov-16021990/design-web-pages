<template>
  <footer class="footer">
    <div class="container footer__flex">
      <div class="footer__interno">
        <img class="footer__interno_img" src="../assets/img/Logo.svg" alt="logo">
        <p class="footer__interno_text">It is a long established fact that a reader will be distracted lookings.</p>
        <div class="footer__interno_seti">
          <a href="упс пути нет">
            <img src="../assets/img/twit.svg" alt="twit">
          </a>
          <a href="упс пути нет">
            <img src="../assets/img/in.svg" alt="in">
          </a>
        </div>
      </div>
      <div class="footer__pages">
        <h3 class="footer__pages_heading">Pages</h3>
        <NavigationComp class="navigation" />
      </div>
      <div class="footer__contact">
        <h3 class="footer__contact_heading">Contact</h3>
        <p class="footer__contact_text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="footer__contact_text">contact@interno.com</p>
        <p class="footer__contact_telephon">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
import NavigationComp from './NavigationComp.vue'
import '@/assets/css/styleComponents/footer_comp.css'

export default {
  name: 'FooterComp',

  components: {
    NavigationComp
  }
}
</script>

<style>

</style>
