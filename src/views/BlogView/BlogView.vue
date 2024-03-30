<template>
  <div>
    <section class="intro">
      <div class="intro__content">
        <div class="intro__title-content">
          <h2 class="intro__heading">Articles & News</h2>
          <ul class="intro__breadcrumbs">
            <li class="intro__breadcrumbs-item">
              <router-link to="/" class="intro__breadcrumbs-link">Home</router-link>
            </li>
            <li class="intro__breadcrumbs-item">
              <a href="#" class="intro__breadcrumbs-link">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="post center">
      <div v-for="item in getlistOfLatestPosts" :key="item" class="post__content">
        <h2 class="post__heading">Latest Post</h2>
        <div class="post__subcontent-box">
          <img :src="item.src" :alt="item.alt">
          <article class="post__subcontent">
            <div class="post__subcontent-container">
              <h3 class="post__subcontent-heading">{{ item.title }}</h3>
              <p class="post__subcontent-text">{{ item.firstparagraph }}</p>
              <p class="post__subcontent-text">{{ item.secondparagraph }}</p>
            </div>
            <div class="post__subtitle-box">
              <p class="post__subcontent-subtitle">{{ item.date }}</p>
              <router-link to="/blogdetails" class="post__button">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="news center">
      <div class="news__content">
        <h2 class="news__heading">Articles & News</h2>
        <div class="news__items">
          <BlogArticleCardComp />
        </div>
        <PaginationComp :totalNumberPaginationPages="setTotalNumberOfPages()"
                        :currentPage="currentPage"  @pagechanged="changeCurrentPage" />
      </div>
    </section>
  </div>
</template>

<script>
import BlogArticleCardComp from '../components/BlogArticleCardComp.vue';
import PaginationComp from '../components/PaginationComp.vue';
import { mapGetters } from 'vuex';
import '@/assets/css/styleViews/blog_view.css'


export default {
  name: 'BlogView',

  components: {
    BlogArticleCardComp,
    PaginationComp
  },
  data() {
    return {
      currentPage: 1,
      limitOfCardsPerPage: 6,
    };
  },
  methods: {
    setTotalNumberOfPages() {
      return Math.ceil(this.getListOfCards.length / this.limitOfCardsPerPage);
    },
    paginateListOfCards(listOfCards) {
      let page = this.currentPage;
      let perPage = this.limitOfCardsPerPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return listOfCards.slice(from, to);
    },
    changeCurrentPage(page) {
      console.log(page)
      this.currentPage = page;
    }
  },
  computed: {
    ...mapGetters(['getListOfCards', 'getlistOfLatestPosts']),
    displayedCards() {
      return this.paginateListOfCards(this.getListOfCards);
    }
  }
};
</script>

<style>

</style>
