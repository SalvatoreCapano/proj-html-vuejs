<script>

export default {
    name: 'AppImageContainer',
    props: {
        imgUrl: String
    },
    methods: {
        getImagePath(url) {
            return new URL(url, import.meta.url).href;
        }
    }
}
</script>


<template>
    <div class="imgContainer">
        <img :src="getImagePath(imgUrl)" alt="alt">
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.imgContainer {
    @include imageContainer;
}
</style>