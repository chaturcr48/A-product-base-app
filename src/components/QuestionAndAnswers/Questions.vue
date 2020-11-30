<template>
  <div>
    <div v-if="showQuestions">
      <v-toolbar color="purple white--text">
        <v-toolbar-title>
          <v-row class="pb-0">
            <v-col cols="12">
              Countdown Timer:{{
                " " + minutesCountdown + ":" + secondsCountdown
              }}
            </v-col>
          </v-row>
        </v-toolbar-title>
      </v-toolbar>
      <div>
        <v-card flat tile>
          <v-window v-model="onboarding" vertical>
            <v-window-item
              v-for="(question, index) in QuestionsArrayNew"
              :key="index"
            >
              <v-card>
                <v-card-title class="pb-0"
                  >{{ index + 1 }}) {{ question.A }}</v-card-title
                >
                <v-card-text class="pb-0">
                  <v-radio-group v-model="question.answerSelected">
                    <v-radio
                      @click="showValue(options, index)"
                      v-for="(options, indexOptions) in optionsArray"
                      :key="indexOptions"
                      :label="String(question[options])"
                      :value="String(question[options])"
                      color="purple"
                    ></v-radio>
                  </v-radio-group>
                  <div v-if="question.answerSelected">
                    Your answer is :
                    <span
                      v-if="question.answerSelected === question.B"
                      class="green--text"
                      >Correct</span
                    >
                    <span v-else class="red--text">Wrong</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>

          <v-card-actions class="justify-space-between">
            <v-item-group v-model="onboarding" class="text-center" mandatory>
              <v-item v-for="n in length" :key="n" v-slot="{ active }">
                <v-btn :input-value="active" icon color="purple">
                  <v-icon>mdi-numeric-{{ n }}-box</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
            <div v-if="currentQuestion === 4">
              <v-btn
                class="text-center white--text"
                color="purple"
                block
                @click="checkScore"
              >
                Submit Test</v-btn
              >
            </div>
            <div v-else>
              <v-btn text @click="next" class="green white--text">Next </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div class="text-center" v-else>
      <v-overlay>
        <v-card color="purple white--text">
          <v-card-title>{{ popup.mainLine }}</v-card-title>
          <v-card-text>{{ popup.multipleLine }}</v-card-text>
          <v-card-subtitle class="pt-0"
            ><v-btn block class="text-center purple--text pt-0" color="white"
              >Thank You!</v-btn
            ></v-card-subtitle
          >
        </v-card>
      </v-overlay>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Questions",
  data() {
    return {
      getMinutes: 1,
      minutesCountdown: "",
      getSeconds: 0,
      popup: {},
      secondsCountdown: "",
      showQuestions: true,
      QuestionsArray: [],
      QuestionsArrayNew: [],
      optionsArray: ["C", "D", "E", "F"],
      answerDetails: {
        name: "",
        mobileNumber: "",
      },
      score: 0,
      onboarding: 0,
      length: 4,
      currentQuestion: 0,
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    getCurrentCountdown() {
      this.secondsCountdown = 60 - this.getSeconds;
      this.minutesCountdown = 10 - this.getMinutes;
      if (this.secondsCountdown === 0 && this.minutesCountdown === 0) {
        this.showQuestions = false;
        this.checkScore();
      }
    },
    showValue(answerSelected, answerIndex) {
      this.QuestionsArrayNew.map((questions, index) => {
        if (index === answerIndex) {
          questions.answerSelected === answerSelected;
          let newQuestion = questions.A;
          if (
            this.answerDetails[`${newQuestion}`] &&
            this.currentQuestion < 4
          ) {
            this.next();
          } else {
            if (this.currentQuestion < 4) {
              this.currentQuestion++;
              console.log(this.currentQuestion);
              this.answerDetails[`${newQuestion}`] = questions.answerSelected;
            }
          }
        }
      });
      console.log(this.answerDetails);
    },
    checkScore: async function() {
      this.QuestionsArrayNew.map((questions) => {
        if (questions.B == questions.answerSelected) {
          this.score++;
        }
      });
      let response = await this.submitAnswers();
      console.log(response);
      if (response === 402) {
        this.popup.mainLine = "Can't Submit because you have already submitted";
        this.popup.multipleLine = "Try Again Later";
      } else {
        this.popup.mainLine = "Thanks for submitting";
        this.popup.multipleLine = `Your score is ${this.score}/10`;
      }
      this.showQuestions = false;
      await this.getLoginDetails();
      console.log(this.answerDetails);
    },
    getQuestions: async function() {
      let questions = await axios.get("https://frendy-quiz-app.herokuapp.com/");
      for (let question of questions.data) {
        this.QuestionsArray.push(question);
      }
      this.QuestionsArray.map((question, index) => {
        if (index !== 0) {
          this.QuestionsArrayNew.push(question);
        }
      });
      console.log(this.QuestionsArrayNew);
      //   console.log(this.QuestionsArray);
    },
    getLoginDetails: function() {
      this.$root.$on("loginDetails", (name, number) => {
        console.log(name, number);
        this.answerDetails.name = name;
        this.answerDetails.mobileNumber = number;
      });
    },
    submitAnswers: async function() {
      let response = await axios.post(
        "https://frendy-quiz-app.herokuapp.com/answer/submit",
        { data: this.answerDetails }
      );
      return response.data.status;

      // console.log(response);
    },
  },
  mounted() {
    setInterval(() => {
      this.getCurrentCountdown();
      if (this.secondsCountdown === 0) {
        this.getSeconds = 0;
        this.getMinutes++;
      }
      this.getSeconds++;
    }, 1000);
    this.getLoginDetails();
  },
  created() {
    this.getQuestions();
  },
};
</script>
