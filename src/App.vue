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
  }
};
</script>


<template>

  <div class="wrapper">

    <AppHeader />

    <AppMain />

    <AppFooter />

  </div> <!-- /wrapper-->

</template>


<style lang="scss">
@use './styles/main.scss' as *;
// .wrapper.menuMobileOpen {
//   overflow: hidden;
// }
</style>