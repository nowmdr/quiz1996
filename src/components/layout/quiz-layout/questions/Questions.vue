<template>
  <div class="questions">
    <div v-if="question.img" class="questions__img">
      <img :src="`${question.img}`" alt="question-image" />
    </div>
    <h3 class="questions__title">{{ question.title }}</h3>
    <p v-if="question.description" class="questions__description">
      {{ question.description }}
    </p>
    <div v-if="question.statement" class="questions__statement">
      <p class="questions__statement-text">{{ question.statement.text }}</p>
    </div>
    <ul class="questions__options">
      <li v-for="option in question.options" :key="option.key">
        <div class="check">
          <label class="check-label">
            <input
              class="check-input"
              type="radio"
              :name="`${getQuestions[currentQuestion].title}`"
              :value="`${option.answerTitle || option.text}`"
              @click="nextQuestion"
            />
            <div class="check-box">
              <div :class="{ changed: mode }" class="check-card">
                <img
                  v-if="option.urlImg"
                  class="check-card__img"
                  :src="`${option.urlImg}`"
                  :alt="`${option.text}`"
                />
                <img
                  v-if="option.text == 'Yes'"
                  class="check-card__img img-yes"
                  src="@/assets/emoji/yes-img.svg"
                  :alt="`${option.text}`"
                />
                <img
                  v-if="option.text == 'No'"
                  class="check-card__img img-no"
                  src="@/assets/emoji/no-img.svg"
                  :alt="`${option.text}`"
                />
                <p v-if="option.text" class="check-card__text">
                  {{ option.text }}
                </p>
                <div class="check-card__text-wrapper changed">
                  <h4 v-if="option.answerTitle" class="check-card__title">
                    {{ option.answerTitle }}
                  </h4>
                  <p v-if="option.description" class="check-card__description">
                    {{ option.description }}
                  </p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import "../questions/Questions.scss";
export default {
  data: () => ({
    currentQuestion: 0,
    allQuestions: 0,
    check: false,
    question: {},
    mode: false
  }),
  created() {
    this.currentQuestion = this.getCuerrentQuestion;
    this.allQuestions = this.getQuestions.length;
    this.question = this.getQuestions[this.currentQuestion];
    console.log(this.question);
  },
  computed: {
    getQuestions() {
      return this.$store.getters.questions;
    },
    getCuerrentQuestion() {
      return this.$store.getters.currentQuestion;
    },
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion + 1 < this.allQuestions) {
        this.$store.commit("setCurrentQuestion", ++this.currentQuestion);
      }
    },
  },
  watch: {
    getCuerrentQuestion() {
      this.currentQuestion = this.getCuerrentQuestion;
      this.question = this.getQuestions[this.currentQuestion];
      if(this.question.mode){
        this.mode = true;
      } else{
        this.mode = false;
      }
      console.log(this.mode)
    },
  },
};
</script>
