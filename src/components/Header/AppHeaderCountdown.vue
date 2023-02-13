<script>


export default {
  name: 'AppHeaderCountdown',
  data() {
    const now = new Date();
    const dateToCount = new Date("Feb 17, 2023 18:30:00").getTime();
    return {
      difference: dateToCount - now,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    }
  },
  methods: {
    startCountdown() {

      this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);

      let countdown = setInterval(() => {

        if (this.seconds > 0) {
          this.seconds--;
        }
        else if (this.seconds == 0) {
          this.seconds = 60;
        }

        if (this.difference < 0) {
          clearInterval(countdown);
        }
        
      }, 1000)

    }
  },
  computed: {
    calcMinutes() {
      if (this.seconds == 0) {
        if (this.minutes > 1) {
          this.minutes--;
        }
        else if (this.minutes == 1) {
          this.minutes = 60;
        }
      }
      if (this.minutes < 10) return `0${this.minutes}`;
      else return this.minutes;
    },
    calcHours() {
      if (this.minutes == 0) {
        if (this.hours > 0) {
          this.hours--;
        }
        else if (this.hours == 0) {
          this.hours = 23;
        }
      }
      if (this.hours < 10) return `0${this.hours}`;
      else return this.hours;
    },
    calcDays() {
      if (this.hours == 0) {
        if (this.days > 1) {
          this.days--;
        }
        else if (this.days == 1) {
          this.days = 60;
        }
      }
      if (this.days < 10) return `0${this.days}`;
      else return this.days;
    },
  },
  created() {
    this.startCountdown();
  }
}
</script>


<template>

  <section>
    <div class="container">

      <p>Starts TOMORROW! Our biggest event of the year...</p>

      <div class="countdownContainer">

        <font-awesome-icon icon="fa-regular fa-clock" />

        <div class="countdown">

          <span>{{ calcDays }}</span>
          :
          <span>{{ calcHours }}</span>
          :
          <span>{{ calcMinutes }}</span>
          :
          <span>{{ this.seconds }}</span>

        </div> <!-- /countdown-->

      </div> <!-- /countdownContainer-->

    </div> <!-- /container-->
  </section>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

section {
  background-color: $light-color-two;
}

.container {
  @include flexRowCenterGap ($spacing-medium);
  @include mainContainer;
  padding: 0.75rem 0
}

.countdownContainer {
  @include flexRowCenterGap (10px);

  .countdown {
    font-weight: 700;
  }

}
</style>