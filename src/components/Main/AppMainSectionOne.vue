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

      <!-- Headings della sezione -->
      <header>
        <h2 class="sectionTitle">artist coaching</h2>
  
        <h3 class="sectionSubTitle">
          I understand what it takes to create. <br>
          I can help you with:
        </h3>
      </header>

      <!-- Container delle 4 cards -->
      <div class="cardsContainer">

        <div class="card" v-for="item in cardsData">

          <div class="imgContainer">
            <img :src="getImagePath(`../../assets/images/mainSection/mainSectionOne/${item.imgUrl}`)" alt="">
          </div>

          <h5 class="title">{{ item.title }}</h5>

          <p class="description">{{ item.description }}</p>

        </div> <!-- /card-->

      </div> <!-- /cardsContainer-->

      <!-- Citazione + CTA -->
      <div class="ctaContainer">

        <div class="quote">
          <p>
            I coach and mentor <br>
            visual artists, like <br>
            you, to Create Like <br>
            You Mean It
          </p>
          <span>
            Martin Garrix
          </span>
        </div>

        <div class="cta">

          <p>
            As a coach and mentor, my ultimate goal is to motivate visual artists towards inspired action.
            I help you get back on track to being the productve, creative, meaningful and authentic artist
            you truly want to be.
            I support artists in crafting and living a creative life as well as feeling good about themselves and their art.
          </p>

          <p>
            As an artist and an educator for nearly 30 years, I understand what it takes to create.
          </p>

          <button class="ctaButton">
            <a href="#">
              Get Started Today
            </a>
          </button>

        </div>

      </div> <!-- /ctaContainer-->


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
    max-width: 1250px;
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
  @include flexRowSpaceBtwn;
  margin-bottom: 10rem;

  .card {
    flex-basis: 20%;
    align-self: flex-end;

    &:nth-child(even) {
      position: relative;
      top: 1.5rem;
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
      color: $dark-color-one;
      font-size: 0.8rem;
      line-height: 1.8em;
    }
  }
}

.ctaContainer {
  @include flexRowSpaceBtwn;

  > * {
    width: 50%;
  }

  .quote {
    text-align: center;
    padding-right: 10%;
    position: relative;
    
    p {
      font-size: $fs-xxl;
      font-weight: 600;
      color: $dark-color-one;
      
      margin-bottom: 2rem;
    }

    span {
      @include sectionTitle;
      font-family: 'Rossela';
    }

    &::before {
      content: '';
      position: absolute;
      top: -60px;
      left: 40%; //50% - padding 10%
      transform: translateX(-50%);
      width: 50px;
      height: 50px;

      background-image: url(../../assets/images/mainSection/mainSectionOne/artist-quote-icon.png);
      background-repeat: no-repeat;
      background-position: center;
    } 
  }

  .cta {
    p {
      font-size: $fs-s;
      color: $dark-color-one;
      line-height: 1.8em;
      margin-bottom: 1.5rem;
    }

    .ctaButton {
      @include ctaButton ($cta-color-light, $cta-color, 1rem, 2rem);
    }
  }
}
</style>