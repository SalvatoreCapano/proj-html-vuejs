<script>

import AppCTAButton from '../AppCTAButton.vue'

export default {
  name: 'AppMainSectionThree',
  components: {
    AppCTAButton
  },
  data() {
    return {
      coursesData: [
        {
          imgUrl: 'artist-course-08-480x480.jpg',
          price: '18.00',
          title: 'The Acrylic Painting Academy',
          lessons: 4,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-07-480x480.jpg',
          price: '21.00',
          title: 'Drawing and Shading: Complete Course',
          lessons: 14,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-06-480x480.jpg',
          price: '19.00',
          title: 'The Color Theory for Digital Artist',
          lessons: 7,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-05-480x480.jpg',
          price: '35.00',
          title: 'Ultimate Guide to Digital Sketching for Beginners',
          lessons: 14,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-04-480x480.jpg',
          price: '19.00',
          title: 'Portrait Drawing The Smart Way',
          lessons: 2,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-03-480x480.jpg',
          price: '19.00',
          title: 'Mastering Watercolor Painting for Beginners',
          lessons: 9,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-02-480x480.jpg',
          price: '25.00',
          title: 'The Art & Science of Drawing',
          lessons: 4,
          currentStudents: 50
        },
        {
          imgUrl: 'artist-course-01-480x480.jpg',
          price: '22.00',
          title: 'The Colored Pencil Drawing Course',
          lessons: 6,
          currentStudents: 50
        },
      ]
    }
  },
  methods: {
    getImagePath(img) {
      return new URL(img, import.meta.url).href;
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
          Latest online courses
        </h3>
      </header>

      <div class="cardsContainer">

        <div class="card" v-for="item in coursesData">

          <div class="imgContainer">
            <img :src="getImagePath(`../../assets/images/mainSection/mainSectionThree/${item.imgUrl}`)"
              :alt="item.title">
          </div> <!-- /imgContainer -->

          <div class="infoContainer">

            <span class="price">
              $ {{ item.price }}
            </span>

            <h4 class="title">
              {{ item.title }}
            </h4>

            <div>
              <span>
                <font-awesome-icon icon="fa-regular fa-file-lines" class="icon" />
                {{ item.lessons }} lessons
              </span>

              <span>
                <font-awesome-icon icon="fa-regular fa-user" class="icon" />
                {{ item.currentStudents }} Students
              </span>
            </div>

          </div> <!-- /infoContainer-->

        </div> <!-- /card-->

      </div> <!-- /cardsContainer-->

      <AppCTAButton :text="'view all courses'" :icon="'arrow-right'" :type="'light'"/>

    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  padding: 4rem 0 5rem;
  background-color: $light-color-one;

  position: relative;

  &::before {
    content: 'courses';

    position: absolute;
    top: 35rem;
    right: -15rem;
    transform: rotate(90deg);

    font-size: 9rem;
    font-weight: bold;
    text-transform: capitalize;
    color: transparent;

    -webkit-text-stroke: 3px $light-color-four;
  }

  .container {
    @include mainContainer;
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

.cardsContainer {
  @include flexRowCenterGap (1.5rem);
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  .card {
    width: calc((100% - 4.5rem) / 4);
    flex-shrink: 0;
    position: relative;

    .imgContainer {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .infoContainer {
      padding: 1.7rem;

      .price {
        color: $cta-color;
        font-weight: 700;
        margin-bottom: 1.5rem;
        display: inline-block;
      }

      .title {
        font-size: $fs-md;
        color: $dark-color-one;
        font-weight: 600;
        margin-bottom: 1.25rem;
      }

      >div:last-child {
        span {
          font-size: $fs-xs;
          color: $neutral-color-one;

          .icon {
            margin-right: 5px;
          }

          &:first-child {
            margin-right: 20px;
          }
        }
      }
    }

    &:hover {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background-color: #bcbcbc35;
        transition: all 0.05s;
      }
    }
  }
}

.ctaButton {
  display: block;
  margin: 0 auto;
}
</style>