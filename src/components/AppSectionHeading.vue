<script>

export default {
    name: 'AppSectionHeading',
    data() {
        return {
        }
    },
    props: {
        title: {
            type: String,
            default: 'Section Title'
        },
        subtitle: {
            type: String,
            default: 'Section Sub-title'
        },
        // type: {
        //     type: String,
        //     default: 'solid'
        // },
        // isSmall: {
        //     type: Boolean,
        //     default: false
        // }
    }
}
</script>


<template>
    <header>

        <h2 class="sectionTitle">{{ title }}</h2>

        <h3 class="sectionSubTitle">{{ subtitle }}</h3>

    </header>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
  text-align: center;
  margin-bottom: 2.5rem;

  .sectionTitle {
    @include sectionTitle;
  }

  .sectionSubTitle {
    @include sectionSubTitle;
  }
}
</style>