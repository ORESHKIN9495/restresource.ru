<script setup lang="ts">
import HomeNav from "../components/HomeNav.vue";
import Hero from "../components/Hero.vue";
import ArticleCardContainerH from "../components/ArticleCardContainerH.vue";
import ArticleCardContainer from "../components/ArticleCardContainer.vue";
import Signature from "../components/Signature.vue";
import LoadMore from "../components/LoadMore.vue";
</script>

<template>
  <Hero />

  <section class="main">
    <div>
      <HomeNav />

      <div class="container">
        <ArticleCardContainer />
      </div>
    </div>

    <div class="container">
      <ArticleCardContainerH />
    </div>

    <Signature />

    <div class="container">
      <ArticleCardContainer />
    </div>

    <LoadMore />
  </section>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  gap: 80px;
  margin: auto;
  max-width: 1360px;

  div {
    display: flex;
    gap: 20px;
  }

  .container {
    display: grid;
    gap: 20px;
  }
}
</style>
