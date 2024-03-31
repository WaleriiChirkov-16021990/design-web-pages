<template>
  <div class="news__items center">
    <div v-for="item in getListOfCards" :key="item" class="article-card__item">
      <img :src="item.src" :alt="item.alt" class="article-card__item-image">
      <div class="article-card__item-tagbox">
        <p class="article-card__item-tag">{{ item.tag }}</p>
      </div>
      <div class="item-content">
        <p class="item-content__title">{{ item.title }}</p>
        <div class="item-content__box">
          <p class="item-content__date">{{ item.date }}</p>
          <router-link to="/blogdetails" class="item-content__button">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import '@/assets/css/styleComponents/blog_article_card_comp.css'

export default {
  name: 'BlogArticleCardComp',

  props: {
    item: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(['getListOfCards'])
  }
}
</script>

<style src="@\assets\css\styleComponents\blog_article_card_comp.css">

</style>
