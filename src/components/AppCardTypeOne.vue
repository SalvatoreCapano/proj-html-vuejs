<script>

import AppImageContainer from './AppImageContainer.vue'

export default {
    name: 'AppCardTypeOne',
    components: {
        AppImageContainer
    },
    data() {
        return {
        }
    },
    props: {
        imgUrl: {
            type: String,
            default: ''
        },
        tag: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: 'Failed Loading Title'
        },
        iconOne: {
            type: String,
            default: ''
        },
        iconOneType: {
            type: String,
            default: 'regular'
        },
        secondaryInfoOne: {
            type: String,
            default: ''
        },
        iconTwo: {
            type: String,
            default: ''
        },
        secondaryInfoTwo: {
            type: String,
            default: ''
        }
    }
}
</script>


<template>
    <div class="card">

        <AppImageContainer :imgUrl="imgUrl" />

        <div class="infoContainer">

            <span class="tag">
                {{ tag }}
            </span>

            <h4 class="title">
                {{ title }}
            </h4>

            <div>
                <span>
                    <font-awesome-icon :icon="`fa-${iconOneType} fa-${iconOne}`" class="icon" />
                    {{ secondaryInfoOne }}
                </span>

                <span>
                    <font-awesome-icon :icon="`fa-regular fa-${iconTwo}`" class="icon" />
                    {{ secondaryInfoTwo }}
                </span>
            </div>

        </div> <!-- /infoContainer-->

    </div> <!-- /card-->
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.card {
    flex-shrink: 0;
    position: relative;

    .imgContainer {
        @include imageContainer;
    }

    .infoContainer {
        padding: 1.7rem;
        background-color: $light-color-one;

        .tag {
            font-size: $fs-md;
            font-weight: 500;
            text-transform: uppercase;
            color: $neutral-color-one;

            margin-bottom: 1.5rem;
            display: inline-block;

        }

        .title {
            font-size: $fs-md;
            font-weight: 600;
            color: $dark-color-one;
            line-height: 1.4em;

            margin-bottom: 1.25rem;
        }

        >div:last-child {
            span {
                font-size: $fs-xs;
                color: $neutral-color-one;

                .icon {
                    margin-right: 5px;
                }

                &:first-child {
                    margin-right: 20px;
                }
            }
        }
    }

    &:hover {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            background-color: #bcbcbc35;
            transition: all 0.05s;
        }
    }
}
</style>