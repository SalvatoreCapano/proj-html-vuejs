<script>

export default {
    name: 'AppCTAButton',
    data() {
        return {
        }
    },
    props: {
        text: {
            type: String,
            default: 'Click here'
        },
        icon: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'solid'
        },
        isSmall: {
            type: Boolean,
            default: false
        }
    }
}
</script>


<template>
    <button 
        :class="[
            'ctaButton',
            type,
            (isSmall) ? ('small') : ('')
        ]">
        <a href="##">
            {{ text }}
            <font-awesome-icon :icon="`fa-solid fa-${icon}`" v-if="icon != ''" />
        </a>
    </button>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.ctaButton {
    // Come passare un data ad una variabile sass?
    &.small {
        $spacingX: 32px;
        $spacingY: 8px;

        &.solid {
            @include ctaButton ($cta-color, $light-color-one, $heading-color, $light-color-one, $spacingY, $spacingX);
        }

        &.light {
            @include ctaButton ($cta-color-light, $cta-color, $heading-color-light, $light-color-one, $spacingY, $spacingX);
        }
    }

    &:not(.small) {
        $spacingX: 2rem;
        $spacingY: 1rem;

        &.solid {
            @include ctaButton ($cta-color, $light-color-one, $heading-color, $light-color-one, $spacingY, $spacingX);
        }

        &.light {
            @include ctaButton ($cta-color-light, $cta-color, $heading-color-light, $light-color-one, $spacingY, $spacingX);
        }
    }
}
</style>