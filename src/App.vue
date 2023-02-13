<script>

import AppHeader from './components/Header/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
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
</style>