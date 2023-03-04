<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";
</script>

<template>
  <h2>Pretty in pink</h2>

  <section>
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 40px;
  grid-template: auto / repeat(5, 1fr);
}
</style>
