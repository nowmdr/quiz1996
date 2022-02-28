<template>
  <div class="quiz__footer footer">
    <p class="footer__text">© 2021 GTHW App Limited</p>
    <ul class="footer__list">
      <li class="footer__item"><a href="#">Terms & Conditions</a></li>
      <li class="footer__item"><a href="#">Privacy Policy</a></li>
      <li class="footer__item"><a href="#">Money-back guarantee</a></li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "src/theme/variables.scss";
.quiz__footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 40px;
  @include mobile-point(sm) {
      margin-top: 0;
  }
  .footer {
    &__text {
      color: $footer-gray;
      @extend %font-size-small;
    }
    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 5px;
    }
    &__item {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: underline;
        color: $footer-gray;
        @extend %font-size-small;
      }
    }
  }
}
</style>