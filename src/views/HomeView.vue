<script setup lang="ts">
import HomeNav from "../components/HomeNav.vue";
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import Signature from "../components/Signature.vue";
import LoadMore from "../components/LoadMore.vue";
</script>

<template>
  <Hero />

  <section class="home">
    <div class="home__nav">
      <HomeNav />

      <div class="home__grid">
        <h2>I feel it in my fingers</h2>

        <Card :filled="true" :grid="true" :quant="3" collection="article" />
      </div>
    </div>

    <div class="home__row">
      <h2>Heart-y plates</h2>

      <Card :filled="false" :quant="5" collection="recipe" />
    </div>

    <div class="home__row">
      <Signature />
    </div>

    <div class="home__grid">
      <h2>The bright shades of winter</h2>

      <Card :filled="true" :grid="true" :quant="3" collection="article" />
    </div>

    <div class="home__row">
      <LoadMore />
    </div>
  </section>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 1360px;
  margin: 0 auto;
  padding: 40px 0;

  div {
    display: flex;
    gap: 20px;
  }

  &__nav {
    gap: 40px !important;

    @media only screen and (max-width: 860px) {
      flex-wrap: wrap;
    }
  }

  &__grid {
    flex-direction: column;
  }

  &__row {
    flex-direction: column;
  }
}
</style>
