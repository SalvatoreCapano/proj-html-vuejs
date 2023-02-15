<script>

import AppNewsletter from './AppNewsletter.vue'
import AppList from './AppList.vue'

export default {
  name: 'AppFooter',
  components: {
    AppNewsletter,
    AppList,
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
          imgUrl: '../../assets/images/blog/artist-blog-03-480x356.jpeg',
          link: 'https://www.instagram.com/'
        },
        {
          imgUrl: '../../assets/images/events/artist-event-03-250x300.jpg',
          link: 'https://www.instagram.com/'
        },
        {
          imgUrl: '../../assets/images/events/artist-event-02-250x300.jpg',
          link: 'https://www.instagram.com/'
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
  <footer>
    <!-- Sezione Newsletter -->
    <AppNewsletter />

    <!-- Sezione links -->
    <section class="listsSection">

      <div class="container">

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
                <div class="imgContainer">
                  <img :src="getImagePath(item.imgUrl)" alt="">
                </div>
              </a>
            </li>

          </ul>

        </div>

      </div>

      <div class="rights">
        &#169; 2020 MaxCoach. All Rigths Reserved
      </div>

    </section>

  </footer>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.listsSection {
  padding: 5rem 0 3rem;

  .container {
    @include mainContainer;
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
          width: 130px;
          height: 130px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
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
</style>