<script>

import AppCTAButton from '../AppCTAButton.vue'
import AppImageContainer from '../AppImageContainer.vue'

export default {
  name: 'AppMainSectionOne',
  components: {
    AppCTAButton,
    AppImageContainer
  },
  data() {
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
  }
}
</script>

<template>
  <section>
    <div class="container small">

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

          <AppImageContainer :imgUrl="`../../src/assets/images/mainSection/mainSectionOne/${item.imgUrl}`" />

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
            I support artists in crafting and living a creative life as well as feeling good about themselves and their
            art.
          </p>

          <p>
            As an artist and an educator for nearly 30 years, I understand what it takes to create.
          </p>

          <AppCTAButton :text="'get started today'" :type="'light'" />

        </div> <!-- /cta-->

      </div> <!-- /ctaContainer-->

      <div class="videoThumbnailContainer">

        <div class="videoThumbnail">
          <img src="../../assets/images/mainSection/mainSectionOne/artist-video-poster.jpg" alt="">
        </div> <!-- /videoThumbnail-->

      </div> <!-- /videoContainer-->


    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  padding: 4rem 0;

  background-image:
    url(../../assets/images/background/artist-shape-01.png),
    url(../../assets/images/background/maxcoach-shape-14.png),
    url(../../assets/images/background/maxcoach-shape-13.png),
    url(../../assets/images/background/shape_03.svg),
    url(../../assets/images/background/wave.svg);

  background-position:
    top 5rem left,
    top 5rem left,
    top 15% right -2rem,
    top 15% right 12rem,
    bottom left;

  background-repeat: no-repeat;
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

.cardsContainer {
  @include flexRowSpaceBtwn;
  margin-bottom: 10rem;

  .card {
    flex-basis: 25%;
    align-self: flex-end;
    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:nth-child(even) {
      position: relative;
      top: 1.5rem;
    }

    .imgContainer {
      margin-bottom: $spacing-small;
      max-width: 130px;
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
  margin-bottom: 9rem;

  >* {
    width: 50%;
  }

  .quote {
    text-align: center;
    padding-right: 10%;
    position: relative;

    p {
      font-size: $fs-xxl;
      font-weight: 700;
      color: $dark-color-one;
      line-height: 1.5em;

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
      margin-bottom: 1.75rem;
    }
  }
}

.videoThumbnailContainer {
  margin-bottom: 2rem;
  position: relative;

  padding: 2rem 0;

  background-image:
    url(../../assets/images/background/maxcoach-shape-05.png),
    url(../../assets/images/background/shape_01.svg),
    url(../../assets/images/background/maxcoach-shape-12.png);

  background-size:
    auto, 200px, auto, 150px;

  background-position:
    top left 5rem,
    top left,
    bottom right;

  background-repeat: no-repeat;

  &::after {
    content: url(../../assets/images/background/circle.svg);
    position: absolute;

    top: 30%;
    right: 1rem;

    width: 140px;
  }

  .videoThumbnail {
    width: 960px;
    margin: 0 auto;

    overflow: hidden;
    border-radius: 8px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &::after {
      content: url(../../assets/images/mainSection/mainSectionOne/icon-youtube-play.png);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      transition: background-color 0.03s;
      cursor: pointer;
    }

    &:hover::before {
      background-color: rgba($color: #000000, $alpha: 0.3);
    }
  }

}
</style>