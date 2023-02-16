<script>

import AppCTAButton from '../AppCTAButton.vue'

export default {
  name: 'AppHeaderHero',
  components: {
    AppCTAButton
  }
}
</script>


<template>

  <section>
    <div class="container">

      <div class="textContainer">

        <h1 class="sectionTitle">Hello, Im Martin</h1>

        <h2 class="sectionSubTitle">Artist Coaching And Mentoring <br> Might Be for You.</h2>

        <AppCTAButton :text="'get started today'" :type="'solid'" />

      </div> <!-- /textContainer-->

      <div class="canvasContainer">

        <div class="canvas">
          <img src="../../assets/images/heroSection/artist-hero-image-02.jpg" alt="Painting">
        </div> <!-- /canvas-->

        <div class="canvas">
          <img src="../../assets/images/heroSection/artist-hero-image-01.jpg" alt="Painting">
        </div> <!-- /canvas-->

        <div class="canvas">
          <img src="../../assets/images/heroSection/artist-hero-image-04.jpg" alt="Martin">
        </div> <!-- /canvas-->

      </div> <!-- /canvasContainer-->

    </div> <!-- /container-->
  </section>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  margin-top: calc(2rem + 40px + 50px);

  background-color: $light-color-three;
  background-image:
    url(../../assets/images/background/artist-hero-image-03.png),
    url(../../assets/images/background/artist-shape-03.png),
    url(../../assets/images/background/artist-shape-02.png),
    url(../../assets/images/background/artist-shape-01.png),
    url(../../assets/images/background/artist-shape-04.png),
    url(../../assets/images/background/artist-shape-05.png),
    url(../../assets/images//background/maxcoach-shape-12.png),
    url(../../assets/images/background/shape_01.svg),
    url(../../assets/images/background/shape_02.svg);

  background-position:
    bottom 1rem left 26rem,
    top 75% left 20px,
    top 0 left,
    top 0 right 9rem,
    top 5rem right 9rem,
    bottom right 5rem,
    bottom 1rem right 20rem,
    top 50% left,
    bottom 2rem right 23rem;

  background-size: auto, auto, auto, auto, auto, auto, auto, 500px, 200px;
  background-repeat: no-repeat;
}

.container {
  @include flexRowSpaceBtwn;
  @include mainContainer ($mainContainerWidth);

  position: relative;
  height: 75vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  .textContainer {
    text-align: center;

    isolation: isolate;
    z-index: 2;
  }
}

.sectionTitle {
  @include sectionTitle;
  font-size: 3.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem
}

.sectionSubTitle {
  @include sectionSubTitle;
  font-size: $fs-xl;
  font-weight: 700;
  margin-bottom: 2rem
}

.canvasContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .canvas {
    position: absolute;
    box-shadow: 0px 8px 18px 2px #00000050;

    img {
      display: block;
    }
  }

  .canvas:first-child {
    top: 6rem;
    left: 5rem;
  }

  .canvas:nth-child(2) {
    bottom: 2.5rem;
    left: -5rem;
  }

  .canvas:last-child {
    bottom: 2.5rem;
    right: 0;
  }
}
</style>