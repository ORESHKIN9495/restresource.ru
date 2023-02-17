<script setup lang="ts">
import TheButton from "./TheButton.vue";
</script>

<template>
  <section class="hero">
    <div>
      <h1>Great British Chefs</h1>

      <p>Inspiring food lovers everywhere</p>
    </div>

    <div>
      <p>This week on Great British Chefs</p>

      <TheButton title="" :d="true" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background: #ccc;
  display: flex;
  flex-direction: column;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    max-width: 1360px;
    width: 100%;

    h1 {
      color: #fff;
      font-size: 60px;
    }

    p {
      color: #fff;
    }

    &:last-child {
      margin: auto auto 0;
    }
  }
}
</style>
