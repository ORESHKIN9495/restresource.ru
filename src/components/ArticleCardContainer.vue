<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section>
    <h2>The bright shades of winter</h2>

    <div>
      <ArticleCard
        anotation
        @click="router.push({ path: '/restresource.ru/article' })"
      />
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
    gap: 20px;
    grid-template: auto / 1fr 400px;

    article {
      &:first-child {
        grid-row: span 2;
      }
    }
  }

  @media only screen and (max-width: 770px) {
    div {
      grid-template-columns: 1fr;
    }
  }
}
</style>
