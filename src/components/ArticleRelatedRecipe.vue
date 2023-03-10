<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";
</script>

<template>
  <section class="related">
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </section>
</template>

<style lang="scss" scoped>
.related {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
