<script>

import AppNewsletter from './AppNewsletter.vue'
import AppList from './AppList.vue'
import AppImageContainer from '../AppImageContainer.vue'

export default {
  name: 'AppFooter',
  components: {
    AppNewsletter,
    AppList,
    AppImageContainer
  },
  data() {
    return {
      footerListsData: [
        {
          title: 'address',
          elements: [
            '382 NE 191st St # 87394 Miami, FL 33179-3899',
            '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
            'support@maxcoach.com',
            {
              type: 'icon',
              name: 'twitter'
            },
            {
              type: 'icon',
              name: 'facebook-f'
            },
            {
              type: 'icon',
              name: 'instagram'
            },
            {
              type: 'icon',
              name: 'linkedin'
            },
          ]
        },
        {
          title: 'explore',
          elements: [
            'Start here',
            'Success Story',
            'Blog',
            'Courses',
            'Contact Us'
          ]
        },
        {
          title: 'information',
          elements: [
            'Membership',
            'Purchase guide',
            'Privacy Policy',
            'Terms of Services'
          ]
        }
      ],
      instagramData: [
        {
          imgUrl: 'blog/artist-blog-03-480x356.jpeg',
          link: 'https://www.instagram.com/'
        },
        {
          imgUrl: 'events/artist-event-03-250x300.jpg',
          link: 'https://www.instagram.com/'
        },
        {
          imgUrl: 'events/artist-event-02-250x300.jpg',
          link: 'https://www.instagram.com/'
        },
      ]
    }
  }
}
</script>


<template>
  <footer>
    <!-- Sezione Newsletter -->
    <AppNewsletter />

    <!-- Sezione links -->
    <section class="listsSection">

      <div class="container large">

        <AppList v-for="list in footerListsData" :list="list" />

        <!-- Lista post Instagram -->
        <div class="listContainer instagramList">

          <h4 class="title">Instagram</h4>
          <span>
            <a href="https://www.instagram.com/">@maxcoach</a>
          </span>

          <ul>

            <li v-for="item in instagramData">
              <a :href="item.link" target="_blank">

                <AppImageContainer :imgUrl="`../../src/assets/images/${item.imgUrl}`" />

              </a>
            </li>

          </ul>

        </div>

      </div>

      <div class="rights">
        &#169; 2020 MaxCoach. All Rights Reserved
      </div>

    </section>

    <button class="returnTopBtn">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
      </a>
    </button>

  </footer>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

footer {
  position: relative;
}

.listsSection {
  padding: 5rem 0 3rem;

  .container {
    @include flexRowSpaceBtwn;
    align-items: flex-start;

    margin-bottom: 4rem;
  }
}

.listContainer.instagramList {
  .title {
    font-size: $fs-s;
    color: $dark-color-one;
    text-transform: capitalize;
    margin-bottom: 1rem;
    display: inline-block;
    margin-right: 10px;
  }

  span {
    font-size: $fs-xs;

    a {
      text-decoration: none;
      color: $cta-color;
    }
  }


  ul {
    list-style: none;
    @include flexRowCenterGap(1rem);

    li {
      margin-bottom: 0.75rem;


      a {
        text-decoration: none;
        color: $neutral-color-one;
        font-size: $fs-xs;
        font-weight: 500;
        transition: color 0.1s;

        .imgContainer {
          @include imageContainer;
          width: 130px;
          height: 130px;
        }
      }
    }
  }
}

.rights {
  text-align: center;
  font-size: $fs-xs;
  color: $neutral-color-one;
}

.returnTopBtn {

  background: none;
  border: none;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  a {
    display: inline-block;
    height: 60px;
    width: 60px;
    // padding: 10px;
    background-color: $cta-color;

    text-align: center;
    line-height: 60px;
    color: $light-color-one;
    font-size: 1.5rem;


    border-radius: 50%;
  }
}
</style>