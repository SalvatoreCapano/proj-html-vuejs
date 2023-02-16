<script>

import AppCarouselClick from './AppCarouselClick.vue'
import AppSectionHeading from '../AppSectionHeading.vue'

export default {
  name: 'AppMainSectionTwo',
  components: {
    AppCarouselClick,
    AppSectionHeading
  }
}
</script>

<template>
  <section>
    <div class="container">

      <!-- Headings della sezione -->
      <AppSectionHeading 
        :title="'testimonials'" 
        :subtitle="'Why do people love me?'"/>

      <div class="carouselContainer">
        <AppCarouselClick/>
      </div> <!-- /carouselContainer-->

    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  padding: 4rem 0;
  background-color: $light-color-three;
  .container {
    @include mainContainer ($mainContainerWidth);
    max-width: 1700px;
  }
}
</style>