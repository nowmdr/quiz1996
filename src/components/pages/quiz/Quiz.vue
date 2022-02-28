<template>
  <div class="quiz">
    <quiz-header></quiz-header>
    <main class="quiz__main main">
      <div class="main__container">
        <Progress />
        <questions></questions>
      </div>
    </main>
    <quiz-footer></quiz-footer>
  </div>
</template>
<script>
import Progress from "../../layout/quiz-layout/progress/Progress.vue";
import Questions from '../../layout/quiz-layout/questions/Questions.vue';
import QuizFooter from "../../layout/quiz-layout/quiz-footer/QuizFooter.vue";
import QuizHeader from "../../layout/quiz-layout/quiz-header/QuizHeader.vue";
import "../quiz/Quiz.scss";
export default {
  components: { QuizHeader, QuizFooter, Progress, Questions },
};
</script>