<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <logo></logo>
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "../../../UI/logo/Logo.vue";
export default {
  components: { Logo },
};
</script>
<style lang="scss" scoped>
@import "src/theme/variables.scss";
.header {
  padding-top: 15px;
  display: flex;
  align-items: center;
  background-color: $title;
  @include mobile-point(md) {
    padding-top: 30px;
  }
  &__wrapper {
    padding-left: 20px;
    padding-right: 20px;
    @include mobile-point(md) {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  &__logo {
    svg {
      width: auto;
      height: 32px;
      @include mobile-point(md) {
        height: 40px;
      }
      @include mobile-point(sm) {
      }
    }
  }
}
</style>