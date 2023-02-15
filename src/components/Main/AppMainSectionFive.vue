<script>

import AppImageContainer from '../AppImageContainer.vue'
import AppSectionHeading from '../AppSectionHeading.vue'

export default {
  name: 'AppMainSectionFive',
  components: {
    AppImageContainer,
    AppSectionHeading
  },
  data() {
    return {
      eventsData: [
        {
          imgUrl: 'artist-event-04-250x300.jpg',
          date: 'NOV 22, 2020',
          title: 'Storytelling Workshop',
          location: 'Texas, US'
        },
        {
          imgUrl: 'artist-event-03-250x300.jpg',
          date: 'OCT 10, 2020',
          title: 'Painting Art Contest 2020',
          location: 'New York, US'
        },
        {
          imgUrl: 'artist-event-02-250x300.jpg',
          date: 'NOV 23, 2020',
          title: 'International Art Fair 2020',
          location: 'Hamburg, Germany'
        },
        {
          imgUrl: 'artist-event-01-250x300.jpg',
          date: 'DEC 15, 2020',
          title: 'Street Performance: Call for Artist',
          location: 'Illinois, US'
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
      <AppSectionHeading 
        :title="'upcoming events'" 
        :subtitle="`Let's Work Together`"/>

      <div class="cardsContainer">

        <div class="card" v-for="item in eventsData">

          <AppImageContainer :imgUrl="`../../src/assets/images/events/${item.imgUrl}`" />

          <div class="infoContainer">
            <div class="date">
              {{ item.date }}
            </div>

            <div class="title">
              {{ item.title }}
            </div>

            <div class="location">
              <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
              <span>
                {{ item.location }}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div> <!-- /container-->
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  padding: 4rem 0;
  background-color: $light-color-one;
  position: relative;

  background-image:
    url(../../assets/images/background/artist-shape-01.png),
    url(../../assets/images/background/maxcoach-shape-13.png);
  background-position: top 40% right;
  background-size: 300px, 200px;
  background-repeat: no-repeat;

  &::before {
    content: 'events';

    position: absolute;
    top: 30rem;
    left: -12rem;
    transform: rotate(90deg);

    font-size: 9rem;
    font-weight: bold;
    text-transform: capitalize;
    color: transparent;

    -webkit-text-stroke: 3px $light-color-four;
  }

  &::after {
    content: '';

    position: absolute;
    left: -20rem;
    bottom: 0;
    width: 600px;
    height: 600px;

    transform: rotate(-90deg);

    background-image: url(../../assets/images/background/artist-shape-02.png);
    background-repeat: no-repeat
  }

  .container {
    padding: 0;
  }
}

header {
  text-align: center;
  margin-bottom: 4.5rem;

  .sectionTitle {
    @include sectionTitle;
    font-family: 'Rossela';
  }

  .sectionSubTitle {
    @include sectionSubTitle;
  }
}

.cardsContainer {
  @include flexRowCenterGap(1rem);
  gap: 4rem 1rem;
  flex-wrap: wrap;
}

.card {
  width: calc((100% - 1rem) / 2);
  height: 300px;

  display: flex;
  align-items: center;

  .imgContainer {
    @include imageContainer;
    width: unset;
    height: 100%;
  }

  .infoContainer {
    padding: 0 2rem;

    .date {
      color: $neutral-color-one;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    .title {
      color: $dark-color-one;
      line-height: 1.4em;
      font-size: $fs-md;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    .location {
      color: $neutral-color-one;
      font-size: $fs-xs;

      .icon {
        margin-right: 5px;
      }
    }
  }
}

.card:nth-child(n+3) {
  flex-direction: row-reverse;
}
</style>