<template>
  <div :class="{ close: close }" class="sticky-offer">
    <div class="sticky-offer__container">
      <div class="sticky-offer__text">Your plan is ready</div>
      <button @click="click" class="sticky-offer__btn">
        Get my plan
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({

  }),
  props: {
      close: Boolean,
  },
  methods:{
     click(){
         this.$emit("click");
     } 
  }
};
</script>
<style lang="scss" scoped>
@import "src/theme/variables.scss";
.sticky-offer {
  opacity: 1;
  background-color: #15276c;
  position: fixed;
  // padding: 24px;

  z-index: 5;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.3s ease, transform 0.3s ease,
    -webkit-transform 0.3s ease;
  &.close {
    transform: translateY(200px);
    opacity: 0;
  }
  &__container {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @include mobile-point(sm) {
      width: 560px;
    }
    @include mobile-point(md) {
      width: 80%;
      padding: 30px;
    }
  }
  &__text {
    color: #fff;
    font-size: 14px;
    @include mobile-point(md) {
      font-size: 20px;
    }
  }
  &__btn {
    @extend %send-btn;
  }
}
</style>