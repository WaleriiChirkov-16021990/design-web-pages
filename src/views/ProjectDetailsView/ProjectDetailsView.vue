<template>
    <div class="ProjectDetailsView">
      <div class="project-details__intro">
        <div class="project-details__intro-content"></div>
      </div>
      <div class="project-details center">
        <div v-for="info in getProjectInfo" :key="info.id" class="project-details__content">
          <h2 class="project-details__heading">{{ info.heading }}</h2>
          <div class="project-details__text-box">
            <p class="project-details__text">{{ info.firstparagraph }}</p>
            <p class="project-details__text">{{ info.secondparagraph }}</p>
          </div>
          <SliderComp />
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SliderComp from '@/components/SliderComp.vue'
import '@/assets/css/styleViews/project_details_view.css'

export default {
  name: 'ProjectDetailsView',

  components: {
    SliderComp
  },
  computed: mapGetters(['getProjectInfo', 'getSliderPictures'])
}
</script>
<style ></style>
