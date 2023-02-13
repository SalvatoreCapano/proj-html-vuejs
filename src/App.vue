<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

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

  <AppHeader />

  <AppMain />

  <AppFooter />

</template>


<style lang="scss">
@use './styles/main.scss' as *;


// FONT
// div {
//   font-family: 'Rossela';
// }

// @font-face {
//   font-family: "Rossela";
//   src: 
//   local("Rossela"),
//   url(./assets/fonts/Rossela-Demo.ttf) format("truetype");
// }
</style>