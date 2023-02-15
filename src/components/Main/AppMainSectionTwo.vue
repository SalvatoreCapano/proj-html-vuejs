<script>

import AppCarouselClick from './AppCarouselClick.vue'

export default {
  name: 'AppMainSectionTwo',
  components: {
    AppCarouselClick
  }
}
</script>

<template>
  <section>
    <div class="container">

      <!-- Headings della sezione -->
      <header>
        <h2 class="sectionTitle">testimonials</h2>

        <h3 class="sectionSubTitle">
          Why do people love me?
        </h3>
      </header>

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

header {
  text-align: center;
  margin-bottom: 2.5rem;
  .sectionTitle {
    @include sectionTitle;
    font-family: 'Rossela';
  }

  .sectionSubTitle {
    @include sectionSubTitle;
  }
}
</style>