<script>

import AppCTAButton from '../AppCTAButton.vue'
import AppSectionHeading from '../AppSectionHeading.vue'
import AppCardTypeOne from '../AppCardTypeOne.vue'

export default {
  name: 'AppMainSectionThree',
  components: {
    AppCTAButton,
    AppSectionHeading,
    AppCardTypeOne
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
  }
}
</script>

<template>
  <section>
    <div class="container large">

      <AppSectionHeading 
        :title="'artist coaching'" 
        :subtitle="'Latest online courses'"/>

      <div class="cardsContainer">

        <AppCardTypeOne 
          v-for="item in coursesData" 
          :imgUrl="`../../src/assets/images/mainSection/mainSectionThree/${item.imgUrl}`" 
          :tag="`$ ${ item.price }`"
          :title="item.title"
          :iconOne="'file-lines'"
          :iconOneType="'regular'"
          :secondaryInfoOne="`${item.lessons}`"
          :iconTwo="'user'"
          :secondaryInfoTwo="`${item.currentStudents} students`"
          />

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
}

.cardsContainer {
  @include flexRowCenterGap (1.5rem);
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  .card {
    width: calc((100% - 4.5rem) / 4) !important;

    .infoContainer {
      .tag {
        color: $cta-color !important;
      }

    }
  }

}

.ctaButton {
  display: block;
  margin: 0 auto;
}
</style>