<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section>
    <h2 v-text="`Pretty in pink`" />

    <div>
      <ArticleCard @click="router.push({ path: '/restresource.ru/recipe' })" />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 20px;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
