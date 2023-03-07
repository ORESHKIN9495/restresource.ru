<script setup lang="ts">
import ArticleCard from "../components/ArticleCard.vue";
import article from "../http/article/article.json";
</script>

<template>
  <section v-for="item in article">
    <h1 v-text="item.title" />

    <div></div>

    <span>
      <p v-text="item.description" />
    </span>

    <div>
      <article>
        <h3 v-text="`Social Media`" />

        <p v-text="item.social" />

        <p v-text="`See all Ramael's recipes`" />
      </article>

      <p v-text="item.article.first" />
    </div>

    <div>
      <ArticleCard />

      <ArticleCard />
    </div>

    <div>
      <p v-text="item.article.last" />

      <p v-text="`You may also like`" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;

  h1 {
    font-size: 30px;
    text-align: center;
  }

  p {
    color: var(--scheme-v2);
  }

  picture {
    height: 600px;
  }

  span {
    border-bottom: 1px solid #ccc;

    p {
      margin: auto;
      max-width: 1200px;
      padding-bottom: 20px;
      text-align: center;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 20px auto;
    max-width: 1360px;

    &:nth-child(2) {
      background-image: url("../assets/image/ca-creative-uaMwBQ_wjng-unsplash.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 600px;
      max-width: 100%;
      width: 100%;
    }

    &:nth-child(4) {
      display: grid;
      grid-template-columns: 280px 1fr;

      @media only screen and (max-width: 790px) {
        grid-template-columns: 1fr;
      }
    }

    &:nth-child(5) {
      display: flex;
      flex-direction: row;
      gap: 20px;
      width: 100%;

      @media only screen and (max-width: 790px) {
        flex-direction: column;
      }
    }
  }

  article {
    display: grid;
    gap: 20px;
    height: fit-content;

    h3 {
      border-bottom: 1px solid var(--scheme-v3);
      color: var(--scheme-v3);
      padding-bottom: 20px;
    }
  }
}
</style>
