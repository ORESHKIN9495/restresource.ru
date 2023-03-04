<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";
</script>

<template>
  <h2>The bright shades of winter</h2>

  <section>
    <ArticleCard anotation />
    <ArticleCard />
    <ArticleCard />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 40px;
  grid-template: auto / 1fr 400px;

  article {
    &:first-child {
      grid-row: 1 / 3;
    }
  }
}
</style>
