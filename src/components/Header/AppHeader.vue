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

    <div class="fixedHeader">

      <!-- countdown -->
      <AppHeaderCountdown />
  
      <!-- navbar -->
      <AppHeaderNavbar />

    </div> <!-- /fixedHeader-->
    
    <!-- hero section -->
    <AppHeaderHero />

  </header>

</template>

<style lang="scss" scoped>
.fixedHeader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;
}
</style>