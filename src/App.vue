<script>

import AppHeader from './components/Header/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
import AppFooter from './components/Footer/AppFooter.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        // now you can: 1 - call code to load more content
        // 2 - display notification or popup
        // 3 - etc etc...
        console.log ("SCROLLATO");
      }
    }
  }
};
</script>


<template>

  <div class="wrapper" @scroll="onscroll">

    <AppHeader />

    <AppMain />

    <AppFooter />

  </div> <!-- /wrapper-->

</template>


<style lang="scss">
@use './styles/main.scss' as *;
.wrapper {
  // overflow-y: scroll;
}
</style>