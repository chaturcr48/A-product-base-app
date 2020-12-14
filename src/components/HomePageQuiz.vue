<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="100%"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="white--text"> LOCO <em>quiz</em> </v-card-title>
          <v-card-subtitle class="white--text">
            Here you can earn money by simply giving answers of few questions.
          </v-card-subtitle>
          <v-row class="ml-4">
            <v-btn @click="startQuiz()"> Start Quiz</v-btn>
          </v-row>
        </v-img>
      </v-card>
        <v-card-actions>
          <v-btn color="orange lighten-2" text>Rules of the game </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <ul>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
                <li>write here rules of the game.</li>
              </ul>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-row>

    <v-row justify="space-around" class="mt-3">
      <v-card width="400">
        <v-img
          height="100%"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="white--text"> LOCO <em>quiz</em> </v-card-title>
          <v-row class="ml-4">
            <h1 class="white--text">Next Quiz will start in</h1>
          </v-row>
          <v-row>
            <span class="base-timer white--text ma-auto">{{
              formattedTimeLeft
            }}</span>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="mt-3">
      <v-card width="400">
        <v-img
          height="100%"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="white--text"> LOCO <em>quiz</em> </v-card-title>
          <v-row class="white--text ml-4">
            <h1>Winner of the last quiz</h1>
            <v-btn>Click to see</v-btn>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 2000;

export default {
  data() {
    return {
      timePassed: 0,
      timerInterval: null,
      show:false
    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeLeft() {
      return TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    },
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
    startQuiz(){
      this.$router.push("/loginForQuiz");

    }
  },
};
</script>


<style scoped lang="scss">
.base-timer {
  font-size: 60px;
}
</style>