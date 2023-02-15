<script>
import { register } from 'swiper/element/bundle';
register();

import AppImageContainer from '../AppImageContainer.vue'

export default {

  name: 'AppCarousel3D',
  components: {
    AppImageContainer
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

  <!-- :navigation="true"  -->
  <swiper-container 
    :rewind="true" 
    :loop="true" 
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

      <div class="slideInner">

        <AppImageContainer :imgUrl="`../../src/assets/images/blog/${item.imgUrl}`" />

        <div class="infoContainer">

          <span class="tag">
            {{ item.role }}
          </span>

          <h4 class="title">
            {{ item.title }}
          </h4>

          <div>
            <span>
              <font-awesome-icon icon="fa-regular fa-calendar" class="icon" />
              {{ item.date }}
            </span>

            <span>
              <font-awesome-icon icon="fa-regular fa-eye" class="icon" />
              {{ item.views }} views
            </span>
          </div>

        </div> <!-- /infoContainer-->
      </div> <!-- /slideInner-->


    </swiper-slide>

  </swiper-container>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.swiper-initialized {
  height: 700px;
}

// Slides standard
.slide {
  padding: 0 6.5rem;

  cursor: grab;

  .slideInner {
    transition: all 0.2s;
    box-shadow: 0px 8px 18px 2px #00000050;
    height: 420px;
  }

  .imgContainer {
    @include imageContainer;
    height: 55%;
  }

  .infoContainer {
    background-color: $light-color-one;
    padding: 2rem 1rem;

    .tag {
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 1rem;
      display: inline-block;
    }

    .title {
      line-height: 1.4em;
      font-size: $fs-md;
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
}

// Slides active
.slide.swiper-slide-active {
  padding: 0;

  .slideInner {
    height: 700px;
    width: 520px !important;
    position: relative;

    .imgContainer {
      height: 100%;
    }

    .infoContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      padding: 3rem 2rem;
      z-index: 3;
      background: none;

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
}

.swiper-slide-next {
  transform: translateY(40px);
}
</style>