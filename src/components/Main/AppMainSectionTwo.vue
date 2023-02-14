<script>

export default {
  name: 'AppMainSectionTwo',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
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

      </div>

    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  padding: 4rem 0;
  border: 2px solid red;
  background-color: $light-color-three;
  .container {
    @include mainContainer;
  }
}

header {
  text-align: center;

  .sectionTitle {
    @include sectionTitle;
    font-family: 'Rossela';
  }

  .sectionSubTitle {
    @include sectionSubTitle;
  }
}
</style>