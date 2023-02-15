<script>

import AppMainSectionOne from './AppMainSectionOne.vue'
import AppMainSectionTwo from './AppMainSectionTwo.vue'
import AppMainSectionThree from './AppMainSectionThree.vue'
import AppMainSectionFour from './AppMainSectionFour.vue'
import AppMainSectionFive from './AppMainSectionFive.vue'


  export default {
      name: 'AppMain',
      components: {
        AppMainSectionOne,
        AppMainSectionTwo,
        AppMainSectionThree,
        AppMainSectionFour,
        AppMainSectionFive
      }
  }
</script>

<template>
  <main>
    
    <!-- Artist Coaching -->
    <AppMainSectionOne />
    
    <!-- Testimonials -->
    <AppMainSectionTwo />
    
    <!-- Artist Coaching Courses -->
    <AppMainSectionThree />
    
    <!-- Articles and Tips -->
    <AppMainSectionFour />
    
    <!-- Upcoming Events -->
    <AppMainSectionFive />

  </main>
</template>

<style lang="scss" scoped>
// main {
//   border: 2px solid red;
// }
</style>