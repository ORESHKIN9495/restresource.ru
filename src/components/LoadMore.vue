<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import { ref } from "vue";

const more = ref(false);
</script>

<template>
  <section class="latest">
    <h2>Latest from Great British Chefs</h2>

    <div>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>

    <div>
      <ArticleCard />
      <ArticleCard />
    </div>

    <div>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>

    <span v-if="more">
      <div>
        <ArticleCard />
        <ArticleCard />
      </div>

      <div>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </span>

    <button @click="more = true">LOAD MORE...</button>
  </section>
</template>

<style scoped lang="scss">
.latest {
  display: grid;
  gap: 20px;

  div {
    display: flex;
    gap: 20px;
  }

  button {
    font-size: 28px;
    color: var(--scheme-v2);
  }
}
</style>
