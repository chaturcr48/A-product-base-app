<template>
  <div>
    <div v-if="showQuestions">
      <v-toolbar color="purple white--text" prominent>
        <v-toolbar-title>
          <v-row class="pb-0">
            <v-col cols="12">
              Countdown Timer:
            </v-col>
          </v-row>
          <v-row class="text-caption pt-0">
            <v-col cols="4">
              Minutes Remaining:
            </v-col>
            <v-col cols="2">
              {{ " " + minutesCountdown }}
            </v-col>
            <v-col cols="4">
              Seconds Remaining:
            </v-col>
            <v-col cols="2">
              {{ " " + secondsCountdown }}
            </v-col>
          </v-row>
        </v-toolbar-title>
      </v-toolbar>
      <div>
        <v-card flat tile>
          <v-window v-model="onboarding" vertical>
            <v-window-item
              v-for="(question, index) in QuestionsArray.slice(1)"
              :key="index"
            >
              <v-card>
                <v-card-title class="pb-0"
                  >{{ index + 1 }}) {{ question['A'] }}</v-card-title
                >
                <v-card-text class="pb-0">
                  <v-radio-group v-model="question.answerSelected">
                    <v-radio
                      @click="showValue(options, index)"
                      v-for="(options, index) in QuestionsArray.slice(2)"
                      :key="index"
                      :label="options[index]"
                      :value="options"
                      color="purple"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
              <v-container class="text-center" v-show="index == 9">
                <v-btn
                  class="text-center white--text"
                  color="purple"
                  block
                  @click="checkScore"
                >
                  Submit Test</v-btn
                >
              </v-container>
            </v-window-item>
          </v-window>

          <v-card-actions class="justify-space-between">
            <v-btn
              text
              @click="prev"
              class="yellow white-
            text"
            >
              Previous
            </v-btn>
            <v-item-group v-model="onboarding" class="text-center" mandatory>
              <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
                <v-btn
                  :input-value="active"
                  icon
                  @click="toggle"
                  color="purple"
                >
                  <v-icon>mdi-numeric-{{ n }}-box</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
            <v-btn text @click="next" class="green white--text">
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div class="text-center" v-else>
      <v-overlay>
        <v-card color="purple white--text">
          <v-card-title>Time is Over !</v-card-title>
          <v-card-text>Your score is : {{ score }}/10</v-card-text>
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
      secondsCountdown: "",
      showQuestions: true,
      // QuestionsArray: [
      //   {
      //     question: "1+1= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "2",
      //   },
      //   {
      //     question: "1+2= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "3",
      //   },
      //   {
      //     question: "1+3= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "4",
      //   },
      //   {
      //     question: "1+4= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "5",
      //   },
      //   {
      //     question: "1+1= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "2",
      //   },
      //   {
      //     question: "1+2= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "3",
      //   },
      //   {
      //     question: "1+3= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "4",
      //   },
      //   {
      //     question: "1+4= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "5",
      //   },
      //   {
      //     question: "1+1= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "2",
      //   },
      //   {
      //     question: "1+2= ?",
      //     optionsArray: ["2", "3", "4", "5"],
      //     answerSelected: "",
      //     correctAnswer: "3",
      //   },
      // ],
      QuestionsArray:[],
      score: 0,
      onboarding: 0,
      length: 10,
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
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
      this.QuestionsArray.map((questions, index) => {
        if (index === answerIndex) {
          questions.answerSelected === answerSelected;
        }
      });
    },
    checkScore() {
      this.QuestionsArray.map((questions) => {
        if (questions.correctAnswer === questions.answerSelected) {
          this.score++;
        }
      });
      this.showQuestions = false;
    },
    getQuestions: async function(){
      let questions=await axios.get("https://frendy-quiz-app.herokuapp.com/");
      for(let question of questions.data){
        this.QuestionsArray.push(question);
      }
      console.log(this.QuestionsArray);
    }
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
  },
  created(){
    this.getQuestions();
  }
};
</script>
