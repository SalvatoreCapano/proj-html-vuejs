<script>
import { register } from 'swiper/element/bundle';
register();

import AppImageContainer from '../AppImageContainer.vue'
import AppCardTypeOne from '../AppCardTypeOne.vue'

export default {

  name: 'AppCarousel3D',
  components: {
    AppImageContainer,
    AppCardTypeOne
  },
  data() {
    return {
      blogsData: [
        {
          role: 'artist',
          imgUrl: 'artist-blog-02-500x680.jpg',
          title: 'Connection Between Self-Portraits and Identity',
          date: 'May 15, 2020',
          views: 397
        },
        {
          role: 'artist',
          imgUrl: 'artist-blog-01-480x356.jpg',
          title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
          date: 'May 15, 2020',
          views: 603
        },
        {
          role: 'artist',
          imgUrl: 'artist-blog-03-480x356.jpeg',
          title: "Brush Strokes Energize Trees in Paintings",
          date: 'May 15, 2020',
          views: 688
        }
      ]
    }
  },
  setup() {
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
    };

    const onSlideChange = (e) => {
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange
    };
  }
}
</script>


<template>

  <!-- :freeMode="true" -->
  <swiper-container id="loopCarousel"
    :loop="true" 
    :rewind="true" 
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }" 
    :slides-per-view="3" 
    :space-between="spaceBetween" 
    :centered-slides="true" 
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @progress="onProgress" 
    @slidechange="onSlideChange">
    <swiper-slide v-for="item in blogsData" class="slide">

      <!-- v-for="item in coursesData"  -->
      <AppCardTypeOne 
        :imgUrl="`../../src/assets/images/blog/${item.imgUrl}`" 
        :tag="`${ item.role }`"
        :title="item.title"
        :iconOne="'calendar'"
        :iconOneType="'regular'"
        :secondaryInfoOne="`${item.date}`"
        :iconTwo="'eye'"
        :secondaryInfoTwo="`${item.views} views`"
      />

    </swiper-slide>

  </swiper-container>

</template>


<style lang="scss">
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

#loopCarousel.swiper-initialized {
  height: 700px;
}
// Slides standard
.slide {
  cursor: grab;
  transition: all 0.2s;

  .card {
    transition: all 0.2s;
    box-shadow: 0px 8px 18px 2px #00000050;
    height: 420px;

    flex-shrink: unset;

    .imgContainer {
      height: 55%;
    }
    .infoContainer {
      .tag {
        font-size: $fs-md;
      }
    }
  }
}

// Slides active
.slide.swiper-slide-active {
  flex-grow: 1 !important;

  .card {
    height: 700px !important;
    width: 100% !important;
    position: relative;

    .imgContainer {
      height: 100% !important;
    }

    .infoContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      padding: 3rem 1.25rem !important;
      z-index: 3;
      background: none !important;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.9009804605435925) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: -1;
      }

      .tag {
        color: $light-color-one;
      }

      .title {
        color: $light-color-one;
        font-size: $fs-l;
        font-weight: 700;
      }

      >div:last-child {
        span {
          color: $light-color-one;
        }
      }
    }
  }
}

.swiper-slide-prev {
  transform: translateY(150px);
  flex-basis: 30% !important;
  padding-right: 1rem;
  padding-left: 0;
}

.swiper-slide-next {
  transform: translateY(40px);
  flex-basis: 30%;
  padding-left: 1rem;
  padding-right: 0;
  margin-right: 0 !important;
}
</style>