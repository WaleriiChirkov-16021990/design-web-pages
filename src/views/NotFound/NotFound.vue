<template>
    <div class="NotFound">
      <div class="not-found center">
        <div v-for="info in notFoundInfo" :key="info.id" class="not-found__content">
          <div class="not-found__content_right">
            <p class="not-found__title">{{ info.title }}</p>
            <p class="not-found__text">{{ info.text }}</p>
            <BlackButtonComp :button-text="buttonText" :link="link" class="button"/>
          </div>
          <div class="not-found__content_left">
            <img class="not-found__image" :src="info.src" :alt="info.alt">
          </div>
        </div>
      </div>
    </div>
</template>

<script >
import BlackButtonComp from '@/components/BlackButtonComp.vue'
import '@/assets/css/styleViews/not_found.css'

export default {

  name: 'NotFound',

  components: {
    BlackButtonComp
  },

  data () {
    return {
      buttonText: 'Back To Home',
      link: '/',
      notFoundInfo: [
        {
          title: '404',
          text: 'We are sorry, but the page you requested was not found',
          src: require('@/assets/img/notFound/not_found_img.png'),
          alt: 'not-found picture'
        }
      ]
    }
  }
}
</script>
<style ></style>
