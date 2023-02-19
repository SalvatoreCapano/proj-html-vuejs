<script>

import { store } from '../../store';

export default {
  name: 'AppHeaderNavbar',
  data() {
    return {
      navbarItems: [
        {
          name: 'home',
          elements: [
            'lorem', 'ipsum', 'dolor', 'sit'
          ]
        },
        {
          name: 'pages',
          elements: [
            'sit', 'amet', 'consectetur'
          ]
        },
        {
          name: 'courses',
          elements: [
            'adipisicing', 'ipsum', 'cupiditate', 'sit'
          ]
        },
        {
          name: 'features',
          elements: [
            'lorem', 'ipsum', 'dolor'
          ]
        },
        {
          name: 'blog',
          elements: [
            'quia', 'beatae', 'distinctio'
          ]
        },
        {
          name: 'shop',
          elements: [
            'lorem', 'ipsum', 'dolor'
          ]
        },
      ],
      socialLinks: [
        {
          name: 'twitter',
          link: 'https://twitter.com/?lang=en'
        },
        {
          name: 'facebook-f',
          link: 'https://www.facebook.com/'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/'
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/'
        }
      ],
      store
    }
  },
  methods: {
    blockMenuMobile() {
      if (store.menuOpen == false) {
        document.documentElement.style.overflow = "auto"
      }
      else {
        document.documentElement.style.overflow = "hidden"
      }
    }
  }
}
</script>


<template>
  <section>
    <div class="container large">

      <div class="logoContainer">

        <a href="#">
          <img src="../../assets/images/dark-logo.png" alt="MaxCoach">
        </a>

      </div> <!-- /logoContainer-->

      <font-awesome-icon icon="fa-solid fa-bars" id="menuBtn"
        @click="(store.menuOpen = !store.menuOpen), blockMenuMobile()" />

      <!-- <nav class="navbar"> -->
      <nav class="navbar" :class="(store.menuOpen) ? ('active') : ('')">
        <ul>

          <li v-for="item in this.navbarItems">
            <a href="#">
              <span>{{ item.name }}</span>
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
            </a>
          </li>

        </ul>
      </nav> <!-- /navbar-->

      <nav class="socialLinks">
        <ul>

          <li v-for="item in this.socialLinks">
            <a :href="item.link" target="_blank">
              <font-awesome-icon :icon="`fa-brands fa-${item.name}`" class="icon" />
            </a>
          </li>

        </ul>
      </nav> <!-- /socialLinks-->

    </div> <!-- /container-->
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

// Responsive | Mobile First
#menuBtn {
  font-size: 1.5rem;
  color: $dark-color-one;

  padding: 5px 0px 5px 10px;
  cursor: pointer;
  transition: color 0.1s;

  &:active {
    color: $neutral-color-one;
  }
}

@media screen and (max-width:960px) {
  .navbar {
    width: 100%;
    height: calc(100vh - 76px);
    height: calc(100svh - 76px);
  
    position: absolute;
    top: 100%;
    right: -100%;
    transition: right 0.2s;
  
    ul {
      list-style: none;
      height: 100%;
  
      display: flex;
      flex-direction: column;
  
      background-color: $light-color-three;
  
      li {
        flex-grow: 1;
        flex-shrink: 1;
  
        max-height: 75px;
  
        display: flex;
        justify-content: center;
        align-items: center;
  
        a {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 2.5rem;
  
          color: $dark-color-one;
          text-decoration: none;
          text-transform: capitalize;
  
          &:active {
            color: $neutral-color-one;
          }
        }
  
        &:hover {
          background-color: $light-color-two;
        }
      }
    }
    &.active {
      right: 0;
    }
  }

}


.socialLinks {
  display: none;
}

section {
  background-color: $light-color-one;
  position: relative;

  .container {
    @include flexRowSpaceBtwn;
    padding: 1rem 0;
  }
}


.logoContainer {
  height: 40px;

  a {
    display: inline-block;
    height: 100%;
    padding: 8px 0;

    img {
      max-height: 100%;
      display: block;
    }
  }
}

@media screen and (min-width:960px) {

  #menuBtn {
    display: none
  }

  .navbar,
  .socialLinks {
    position: static;

    ul {
      @include flexRowCenterGap ($spacing-medium);
      list-style: none;

      li a {
        color: $dark-color-one;
        text-decoration: none;
        text-transform: capitalize;
        transition: 0.1s;

        &:hover {
          color: $hover-color;
        }

        &:active {
          color: $active-color;
        }
      }
    }
  }

  .navbar ul li a {

    >* {
      vertical-align: middle;
    }

    span {
      margin-right: 5px;
      font-size: $fs-s;
    }

    .icon {
      font-size: 0.5em;
    }
  }

  .socialLinks {
    display: block;

    ul li a {
      font-size: 1rem;
    }
  }
}
</style>