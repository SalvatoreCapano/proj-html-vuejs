<script>

export default {
  name: 'AppNewsletter'
}
</script>


<template>
  <section>
    <div class="container">

      <h4>Newsletter to get in touch</h4>

      <form @submit.prevent="">
        <div class="inputContainer">
          <input type="mail" placeholder="Your e-mail">
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="icon" />
        </div>
      </form>

    </div> <!-- /container-->
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  background-color: $newsletter-color;
  padding: 2.5rem 0;

  background-image:
    url(../../assets/images/background/artist-shape-color-paint-top-left.png),
    url(../../assets/images/background/artist-shape-color-paint-bottom-right.png);

  background-position: left, right;

  background-repeat: no-repeat;

  .container {
    @include mainContainer;
    @include flexRowCenterGap(8rem);
    max-width: 1250px;
    padding: 0 2rem;
  }
}

h4 {
  width: 250px;
  text-align: end;
  font-size: 2rem;
  color: $light-color-one;
  font-weight: 500;
  font-family: 'Times New Roman', Times, serif;
}

form {
  flex-grow: 1;

  div {

    display: flex;
    align-items: center;
    border-bottom: 2px solid $neutral-color-two;

    &:focus-within {
      border-color: $cta-color;
    }
  }

  input {
    padding: 0.75rem 0;
    flex-grow: 1;
    background: none;
    border: none;

    font-size: 1.25rem;
    color: $light-color-one;

    &:focus {
      outline: none;
    }
  }

  .icon {
    color: $light-color-one;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>