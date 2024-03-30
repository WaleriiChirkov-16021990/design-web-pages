import Vue from 'vue'
import Vuex from 'vuex';
import ProjectDetailsModule from './modules/ProjectDetailsModule';
import BlogModule from './modules/BlogModule';
import ProjectModule from './modules/ProjectModule';
import ArticleCardComp from './modules/ArticleCardComp';
import HomeProjectModule from './modules/HomeProjectModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ProjectDetailsModule,
    BlogModule,
    ProjectModule,
    ArticleCardComp,
    HomeProjectModule,
  }
})
