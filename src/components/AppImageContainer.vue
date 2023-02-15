<script>

export default {
    name: 'AppImageContainer',
    data() {
        return {
            // url: this.imgUrl
        }
    },
    props: {
        imgUrl: String
        // icon: {
        //     type: String,
        //     default: ''
        // },
        // type: {
        //     type: String,
        //     default: 'solid'
        // },
        // isSmall: {
        //     type: Boolean,
        //     default: false
        // }
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
        <!-- <img :src="getImagePath" alt="Image not available"> -->
        <img :src="getImagePath(imgUrl)" alt="alt">
        <!-- <img :src="this.imgUrl" alt=""> -->
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.imgContainer {
    @include imageContainer;
}
</style>