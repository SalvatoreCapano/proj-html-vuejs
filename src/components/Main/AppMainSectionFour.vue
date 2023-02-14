<script>

import AppCarousel3D from './AppCarousel3D.vue'

export default {
  name: 'AppMainSectionFour',
  components: {
    AppCarousel3D
  }
}
</script>

<template>
  <section>
    <div class="container">

      <!-- Headings della sezione -->
      <header>
        <h2 class="sectionTitle">articles and tips</h2>

        <h3 class="sectionSubTitle">
          Latest from the Blog
        </h3>
      </header>

      <div class="carouselContainer">
        <AppCarousel3D/>
      </div> <!-- /carouselContainer-->

      <div class="ctaContainer">
        <p>
          Get into details now?
          <a href="#">
            View all posts
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </a>
        </p>
      </div>

    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  min-height: 100vh;
  padding: 5rem 0 4rem;
  background-color: $light-color-two;

  background-image: 
    url(../../assets/images/background/maxcoach-shape-14-1536x343.png),
    url(../../assets/images/background/circle.svg),
    url(../../assets/images/background/shape_01.svg),
    url(../../assets/images/background/maxcoach-shape-05.png);

  background-position: 
    top 5rem left,
    top 5rem left 15rem,
    bottom 3rem right 35rem,
    top 12rem left 37rem;

  background-size: auto, 100px, 250px, auto;

  background-repeat: no-repeat;
  .container {
    @include mainContainer;
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

.carouselContainer {
  margin-bottom: 5rem;
}

.ctaContainer {
  font-size: $fs-s;
  color: $neutral-color-one;
  font-weight: 500;

  text-align: center;

  a {
    color: $cta-color;
  }
}
</style>