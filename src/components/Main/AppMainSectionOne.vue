<script>

  export default {
      name: 'AppMainSectionOne',
      components: {
      },
      data () {
        return {
          cardsData: [
            {
              imgUrl: 'artist-box-image-01.png',
              title: 'online courses',
              description: 'Online art coaching now offers you a very powerful way to redesign your artist mind.'
            },
            {
              imgUrl: 'artist-box-image-02.png',
              title: 'one to one',
              description: 'Getting the necessary clarity about the current state to help you improve your ability.'
            },
            {
              imgUrl: 'artist-box-image-03.png',
              title: 'anywhere',
              description: 'Access to valuable and portable program which allow you to setup and live anywhere you want.'
            },
            {
              imgUrl: 'artist-box-image-04.png',
              title: 'on time',
              description: "Punctuality is our top priority because it's an essential criteria to assess a program quality."
            },
          ]
        }
      },
      methods: {
        getImagePath (img) {
          return new URL (img, import.meta.url).href;
        }
      }
  }
</script>

<template>
  <section>
    <div class="container">

      <header>
        <h2 class="sectionTitle">artist coaching</h2>
  
        <h3 class="sectionSubTitle">
          I understand what it takes to create. <br>
          I can help you with:
        </h3>
      </header>

      <div class="cardsContainer">

        <div class="card" v-for="item in cardsData">

          <div class="imgContainer">
            <img :src="getImagePath(`../../assets/images/mainSection/mainSectionOne/${item.imgUrl}`)" alt="">
          </div>

          <h5 class="title">{{ item.title }}</h5>

          <p class="description">{{ item.description }}</p>
        </div> <!-- /card-->

      </div> <!-- /cardsContainer-->


    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {

  padding: 4rem 0;
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

.cardsContainer {
  @include flexRowCenterGap(1.75rem);
  margin-bottom: 5rem;

  .card {
    flex-basis: 20%;
    align-self: flex-end;

    &:nth-child(odd) {
    }
    &:nth-child(even) {
      position: relative;
      top: 1rem;
    }
    .imgContainer {
      margin-bottom: $spacing-small;
      img {
        display: block;
      }
    }
    .title {
      font-size: 1rem;
      font-weight: 500;
      color: $dark-color-one;
      text-transform: capitalize;

      margin-bottom: $spacing-small;
    }
    .description {
      color: $neutral-color-one;
      font-size: 0.85rem;
    }
  }
}
</style>