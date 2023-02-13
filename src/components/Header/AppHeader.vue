<script>

import AppHeaderNavbar from './AppHeaderNavbar.vue'
import AppHeaderCountdown from './AppHeaderCountdown.vue'

export default {
  name: 'AppHeader',
  components: {
    AppHeaderNavbar,
    AppHeaderCountdown
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
    <div>hero section</div>

  </header>

</template>

<style lang="scss" scoped>
header {
  background-color: bisque;
  border: 2px solid green;
}
</style>