<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";
import Card from "../components/Card.vue";
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

    <button>LOAD MORE</button>
  </section>
</template>

<style scoped lang="scss">
.latest {
  display: flex;
  flex-direction: column;
  gap: 40px;

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
