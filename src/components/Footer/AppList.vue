<script>

export default {
  name: 'AppList',
  components: {
  },
  props: {
    list: Object
  }
}
</script>


<template>
  <div class="listContainer">

    <h4 class="title">{{ list.title }}</h4>

    <ul>
      <li v-for="listItem in list.elements" :class="(listItem.type == 'icon') ? ('icon') : ('')">
        <a href="">

          <span v-if="listItem.type != 'icon'">
            {{ listItem }}
          </span>

          <span v-else>
            <font-awesome-icon :icon="`fa-brands fa-${listItem.name}`" />
          </span>

        </a>
      </li>
    </ul>

  </div> <!-- /container-->
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.title {
  font-size: $fs-s;
  color: $dark-color-one;
  text-transform: capitalize;
  margin-bottom: 1rem;
}

ul {
  list-style: none;

  li {
    margin-bottom: 0.75rem;

    a {
      @include secondaryText;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.1s;

      &:hover {
        color: $hover-color;
      }
    }

    &.icon {
      display: inline-block;
      width: fit-content;

      margin-right: 2rem;

      a {
        font-size: 1.25rem;
      }
    }
  }
}
</style>