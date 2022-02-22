<template>
  <section class="books">
    <div class="books__wrapper">
      <div
        :style="{
          transform: `translate(${-pageY/speed}%)`,
        }"
        class="books__row books__row-1"
      >
        <img class="book" src="@/assets/books/row_1/b1.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b2.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b3.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b4.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b5.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b6.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b7.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b8.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b9.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b10.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b11.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b12.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b13.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b14.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b15.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b16.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b1.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b2.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b3.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b4.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b5.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b6.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b7.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b8.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b9.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b10.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b11.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b12.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b13.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b14.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b15.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_1/b16.jpg" alt="book" />
      </div>
      <div
        :style="{
          transform: `translate(${pageY/speed}%)`,
        }"
        class="books__row books__row-2"
      >
        <img class="book" src="@/assets/books/row_2/b1.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b2.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b3.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b4.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b5.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b6.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b7.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b8.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b9.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b10.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b11.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b12.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b13.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b14.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b15.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b16.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b17.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b1.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b2.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b3.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b4.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b5.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b6.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b7.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b8.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b9.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b10.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b11.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b12.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b13.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b14.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b15.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b16.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_2/b17.jpg" alt="book" />
      </div>
      <div
        :style="{
          transform: `translate(${-pageY/speed}%)`,
        }"
        class="books__row books__row-3"
      >
        <img class="book" src="@/assets/books/row_3/b1.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b2.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b3.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b4.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b5.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b6.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b7.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b8.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b9.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b10.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b11.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b12.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b13.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b14.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b15.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b16.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b17.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b1.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b2.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b3.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b4.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b5.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b6.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b7.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b8.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b9.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b10.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b11.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b12.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b13.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b14.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b15.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b16.jpg" alt="book" />
        <img class="book" src="@/assets/books/row_3/b17.jpg" alt="book" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    speed: 50
  }),
    props:{
        pageY: Number
    }
};
</script>
<style lang="scss" scoped>
@import "src/theme/variables.scss";
.books {
  background-color: #fcf3ea;
  padding-top: 50px;
  padding-bottom: 50px;
  &__wrapper {
    overflow: hidden;
  }
  &__row {
    display: flex;
    margin-bottom: 30px;
  }
  .book {
    display: block;
    background-color: #fcf3ea;
    box-shadow: 0 2px 3px #ccada6;
    margin-right: 25px;
    width: 60px;
    height: 90px;
    @include mobile-point(md) {
      width: 112px;
      height: 172px;
    }
  }
  &__row-1 {
    padding-top: 5px;
    .book {
      transform: translateX(0px) rotate(-4deg) translateZ(0px);

    }
  }
  &__row-2 {
    .book {
      transform: translateX(-1000px) rotate(4deg) translateZ(0px);
    }
  }
  &__row-3 {
    .book {
      transform: translateX(0px) rotate(-4deg) translateZ(0px);
    }
  }
}
</style>