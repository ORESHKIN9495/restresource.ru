<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <h2>Pretty in pink</h2>

  <section>
    <ArticleCard @click="router.push({ path: '/restresource.ru/recipe' })" />
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
