<script setup lang="ts">
import TheButton from "./TheButton.vue";
</script>

<template>
  <section>
    <div>
      <p
        v-text="
          `Have you taken a look at our Signature Series yet? Every Friday we release a brand new masterclass from one of our chefs, where they'll show you how to recreate their favourite dishes at home – exclusively for Great British Chefs Club member`
        "
      />

      <TheButton title="Watch now" :d="true" />
    </div>

    <div>
      <h2 v-text="`Latest recipe videos`" />

      <p v-text="`Robert Chambers' Sheep's Milk Ricotta Tortellini`" />

      <p v-text="`Budgie Montoya's Lechon Belly`" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  align-items: flex-end;
  background-image: url("https://media-cdn.greatbritishchefs.com/media/zdzhpomd/img87140.whqc_1049x437q90.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border: 8px solid #bba250;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  height: 500px;
  padding: 40px;
  position: relative;

  @media only screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 10px;

    div {
      &:last-child {
        display: none;
      }
    }
  }

  &::before {
    background: rgba(0, 0, 0, 0.469);
    content: "";
    inset: 0;
    position: absolute;
  }

  div {
    display: grid;
    gap: 20px;
    z-index: 1;
  }

  h2 {
    color: var(--scheme-v1);
    border-bottom: 1px solid var(--scheme-v3);
    padding-bottom: 10px;
  }
}
</style>
