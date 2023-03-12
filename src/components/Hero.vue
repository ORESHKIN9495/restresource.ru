<script setup lang="ts">
import TheButton from "./TheButton.vue";
</script>

<template>
  <section class="hero">
    <article>
      <h1 v-text="`Le Gruyère`" />

      <p
        v-text="
          `Швейцария известна широким ассортиментом удивительных сыров, но если
        есть один, который особенно захватил мир, то это Грюйер.`
        "
      />

      <p v-text="`Новости за неделю на Ресторанном`" />

      <TheButton :c="true" />
    </article>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background-image: url("../assets/image/vadim-markin-BFtIlGdWKbk-unsplash.jpg");
  background-position: 50% 80%;
  background-size: cover;
  height: 900px;
  overflow: hidden;
  position: relative;

  &::before {
    background: #24242490;
    content: "";
    inset: 0;
    position: absolute;
  }

  article {
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
