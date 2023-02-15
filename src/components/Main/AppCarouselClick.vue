<script>
import { register } from 'swiper/element/bundle';
register();

import AppImageContainer from '../AppImageContainer.vue'

export default {

  name: 'AppCarouselClick',
  components: {
    AppImageContainer
  },
  data() {
    return {
      testimonialsData: [
        {
          name: 'Mina Hollace',
          role: 'Freelancer',
          pictureUrl: 'artist-testimonial-avatar-01.jpg',
          title: 'High level of efficiency and scientific teaching methods',
          text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.'
        },
        {
          name: 'Madley Pondor',
          role: 'IT Specialist',
          pictureUrl: 'artist-testimonial-avatar-02.jpg',
          title: 'Professional team of specialists and passionate mentors at reach',
          text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professionals when dealing with students.'
        },
        {
          name: 'Florence Themes',
          role: 'Multimedia Admin',
          pictureUrl: 'artist-testimonial-avatar-04.jpg',
          title: "It's a choice of quality for people with special needs",
          text: "I am a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me."
        },
        {
          name: 'Jack Sparrow',
          role: 'Pirate',
          pictureUrl: 'artist-testimonial-avatar-03.jpg',
          title: 'This is the day you will always remember as the day you almost caught Captain Jack Sparrow',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas quam vel eros tempor, vitae viverra odio molestie. Aaaargh!'
        }
      ]
    }
  },
  setup() {
    const spaceBetween = 50;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
    };

    const onSlideChange = (e) => {
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  }
}
</script>


<template>

  <!-- :rewind="true" -->
  <!-- :loop="true" -->
  <!-- :navigation="true"  -->
  <swiper-container :effect="coverflow" :coverflowEffect="{
    rotate: 0,
    slideShadows: true
  }" :slides-per-view="3" :space-between="spaceBetween" :centered-slides="true" :pagination="{
  clickable: true,
}" :breakpoints="{
  768: {
    slidesPerView: 3,
  },
}" @progress="onProgress" @slidechange="onSlideChange">
    <swiper-slide v-for="item in testimonialsData" class="slide">

      <header>
        <h4 class="title">{{ item.title }}</h4>

        <p class="text">{{ item.text }}</p>
      </header>

      <div class="testimonialData">

        <AppImageContainer :imgUrl="`../../src/assets/images/testimonials/${item.pictureUrl}`" />

        <div class="textContainer">

          <h5 class="name">{{ item.name }}</h5>
          <span class="role">{{ item.role }}</span>

        </div> <!-- /textContainer -->

      </div> <!-- /testimonialData -->
    </swiper-slide>

  </swiper-container>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.slide {
  height: 420px;
  background-color: $light-color-one;
  padding: 2.5rem 2.75rem;

  opacity: 0.5;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: grab;

  &.swiper-slide-active {
    opacity: 1 !important;
  }

  .title {
    font-size: $fs-md;
    color: $dark-color-one;
    line-height: 1.75em;
    margin-bottom: 1.25rem;
  }

  .text {
    font-size: $fs-s;
    font-weight: 500;
    color: $neutral-color-one;
    line-height: 1.75em;
    margin-bottom: 2rem;
  }

  .testimonialData {
    @include flexRowCenterGap(1.5rem);
    justify-content: flex-start;

    .imgContainer {
      @include imageContainer;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      overflow: hidden;
    }

    .textContainer {
      .name {
        font-size: $fs-s;
        color: $dark-color-one;
        margin-bottom: 0.75rem;
      }

      .role {
        font-size: $fs-s;
        color: $neutral-color-one;
      }
    }
  }
}
</style>