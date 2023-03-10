<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section>
    <h2 v-text="`The bright shades of winter`" />

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
    grid-template-columns: repeat(3, 1fr);

    article {
      &:first-child {
        grid-area: 1/ 1 / 3 / 3;
      }
    }
  }

  @media only screen and (max-width: 770px) {
    div {
      grid-template-columns: 1fr;

      article {
        &:first-child {
          grid-area: unset;
        }
      }
    }
  }
}
</style>
