<script>

import AppHeaderNavbar from './AppHeaderNavbar.vue'
import AppHeaderCountdown from './AppHeaderCountdown.vue'
import AppHeaderHero from './AppHeaderHero.vue'

export default {
  name: 'AppHeader',
  components: {
    AppHeaderNavbar,
    AppHeaderCountdown,
    AppHeaderHero
  }
}
</script>

<template>

  <header>

    <!-- countdown -->
    <AppHeaderCountdown />

    <!-- navbar -->
    <AppHeaderNavbar />
    
    <!-- hero section -->
    <AppHeaderHero />

  </header>

</template>

<style lang="scss" scoped>
</style>