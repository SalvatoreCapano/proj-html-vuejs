<script>

import AppHeaderNavbar from './AppHeaderNavbar.vue'

export default {
  name: 'AppHeader',
  components: {
    AppHeaderNavbar
  }
}
</script>

<template>

  <header>

    <!-- countdown -->
    <div>countdown</div>

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