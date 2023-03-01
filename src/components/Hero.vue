<script setup lang="ts">
import TheButton from "./TheButton.vue";
</script>

<template>
  <section class="hero">
    <div>
      <h1>Le Gruyère</h1>

      <p>
        Швейцария известна широким ассортиментом удивительных сыров, но если
        есть один, который особенно захватил мир, то это Грюйер.
      </p>

      <p>Новости за неделю на Ресторанном</p>

      <TheButton title="" :c="true" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background-image: url("../assets/image/vadim-markin-BFtIlGdWKbk-unsplash.jpg");
  background-size: cover;
  background-position: center 82%;
  background-repeat: no-repeat;
  height: 900px;
  position: relative;

  &::before {
    background: #24242490;
    content: "";
    inset: 0;
    position: absolute;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    margin: auto;
    max-width: 1360px;
    position: relative;

    h1 {
      color: #fff;
      font-size: 60px;
      margin: auto 0 0;
    }

    p {
      color: #fff;
      font-size: 28px;
      max-width: 630px;

      &:nth-child(3) {
        font-size: 20px;
        margin: auto 0 0;
        max-width: 300px;
      }
    }
  }
}
</style>
