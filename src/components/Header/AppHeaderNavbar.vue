<script>


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
        },
      ]
    }
  }
}
</script>


<template>

  <section>
    <div class="container">

      <div class="logoContainer">

        <a href="#">
          <img src="../../assets/images/dark-logo.png" alt="MaxCoach">
        </a>

      </div> <!-- /logoContainer-->

      <nav>
        <ul>

          <li v-for="item in this.navbarItems">
            <a href="#">
              <span>{{ item.name }}</span>
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
            </a>
          </li>

        </ul>
      </nav>

      <div class="socialLinks">
        <ul>

          <li v-for="item in this.socialLinks">
            <a :href="item.link" target="_blank">
              <font-awesome-icon :icon="`fa-brands fa-${item.name}`" class="icon"/>
            </a>
          </li>

        </ul>
      </div> <!-- /socialLinks-->

    </div> <!-- /container-->
  </section>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  background-color: $light-color-one;
}
.container {
  @include flexRowSpaceBtwn;
  @include mainContainer;
  padding: 1.25rem 0
}
.logoContainer {
  height: 30px;
  padding: 2px 0;

  a {
    display: inline-block;
    height: 100%;

    img {
      max-height: 100%;
      display: block;
    }
  }
}

nav, .socialLinks {
  ul {
    @include flexRowCenterGap ($spacing-medium);
    list-style: none;

    li a {
      color: $dark-color-one;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1rem;

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

nav ul li a {

  > * {
    vertical-align: middle;
  }

  span {
    margin-right: 5px;
  }
  .icon {
    font-size: 0.55rem;

  }
}
</style>