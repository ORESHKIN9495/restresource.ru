<script setup lang="ts">
import HeroNav from "../components/HeroNav.vue";
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import Signature from "../components/Signature.vue";
</script>

<template>
  <Hero />

  <div class="container">
    <div class="container__hero">
      <HeroNav />

      <div class="container__grid">
        <h2>I feel it in my fingers</h2>

        <Card :filled="true" :grid="true" :quant="3" />
      </div>
    </div>

    <div class="container__row">
      <h2>Heart-y plates</h2>

      <Card :filled="false" :quant="5" />
    </div>

    <div class="container__row">
      <Signature />
    </div>

    <div class="container__grid">
      <h2>The bright shades of winter</h2>

      <Card :filled="true" :grid="true" :quant="3" />
    </div>

    <div class="container__row">
      <h2>Pretty in pink</h2>

      <Card :filled="false" :quant="5" />
    </div>

    <div class="latest">
      <h2>Latest from Great British Chefs</h2>

      <div class="latest__grid">
        <Card :filled="false" :quant="3" />
        <Card :filled="false" :quant="2" />
        <Card :filled="false" :quant="3" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1360px;
  margin: auto;
  padding: 20px;

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 80px 0;
  }

  &__hero {
    display: flex;
    gap: 20px;
  }
}

.latest {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

<!-- 
@media only screen and (max-width: 860px) {
  div {
    &:first-child {
      grid-template-columns: 1fr;
    }

    button {
      max-width: 100%;
    }
  }
} -->
