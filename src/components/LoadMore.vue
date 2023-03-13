<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import { ref } from "vue";

const more = ref(false);
</script>

<template>
  <section class="latest">
    <h2 v-text="`Latest from Great British Chefs`" />

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

    <button @click="more = true" v-text="`LOAD MORE...`" />
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

  @media only screen and (max-width: 770px) {
    display: none;
  }
}
</style>
