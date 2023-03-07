<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import ArticleCard from "../components/ArticleCard.vue";
import Ingredients from "../components/Ingredients.vue";
import RecipeMethod from "../components/RecipeMethod.vue";
import ChefCard from "../components/ChefCard.vue";

import { useStore } from "vuex";

const store = useStore();

const data = computed(() => store.getters["base/data"]);

const change = ref(true);

onMounted(() => {
  store.dispatch("base/getData");
});
</script>

<template>
  <section v-for="item in data">
    <div>
      <h1 v-text="item.title" />

      <p>by <router-link to="#" v-text="item.author" /></p>
    </div>

    <div>
      <picture>
        <img src="../assets/image/ben-koorengevel-Vd0_Htlb-Kk-unsplash.jpg" />
      </picture>

      <article>
        <span>
          <p v-text="`Petit four`" />
          <p v-text="`challenging`" />
          <p v-text="item.views" />
        </span>

        <p v-text="item.time" />

        <p v-text="item.description" />

        <p v-text="`First published in 2015`" />
      </article>
    </div>

    <div>
      <button @click="change = !change">
        Related Recipes
        <svg
          v-if="change == true"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
        >
          <path d="M5 15v2h22v-2Zm0 0" />
        </svg>

        <svg
          v-else
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
        >
          <path d="M15 5v10H5v2h10v10h2V17h10v-2H17V5Zm0 0" />
        </svg>
      </button>

      <div v-if="change">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>

    <div>
      <Ingredients />
      <RecipeMethod />
      <ChefCard />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 20px 0;

  div {
    margin: 0 auto;
    max-width: 1360px;
    text-align: center;

    h1 {
      color: var(--scheme-v2);
      font-size: 30px;
    }

    p {
      color: var(--scheme-v2);
    }

    &:nth-child(2) {
      display: flex;
      gap: 20px;
      text-align: left;

      @media only screen and (max-width: 1080px) {
        flex-direction: column;
      }

      picture {
        flex: 1;
      }

      article {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;

        span {
          display: flex;
          gap: 20px;
        }
      }
    }

    &:nth-child(3) {
      display: flex;
      background: #f9f9f9;
      border-bottom: 1px solid var(--scheme-v3);
      border-top: 1px solid var(--scheme-v3);
      justify-content: center;
      max-width: 100%;
      padding: 40px 0;
      position: relative;
      width: 100%;

      button {
        align-items: center;
        background: var(--scheme-v1);
        border: 1px solid var(--scheme-v3);
        color: var(--scheme-v2);
        cursor: pointer;
        display: flex;
        gap: 20px;
        justify-content: center;
        max-width: 280px;
        position: absolute;
        top: -15px;
      }
    }

    &:nth-child(4) {
      display: flex;
      gap: 20px;

      @media only screen and (max-width: 1080px) {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
