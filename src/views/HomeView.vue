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
    <div class="container">
      <HomeNav />

      <ArticleCardContainer />
    </div>

    <ArticleCardContainerH />

    <Signature />

    <ArticleCardContainer />

    <LoadMore />
  </section>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  gap: 80px;
  margin: auto;
  max-width: 1360px;
}

.container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;

  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
}
</style>
