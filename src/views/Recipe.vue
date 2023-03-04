<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Card from "../components/Card.vue";
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
  <section class="recipe" v-for="item in data">
    <div>
      <h1>{{ item.title }}</h1>

      <p>
        by <router-link to="#">{{ item.author }}</router-link>
      </p>
    </div>

    <div>
      <picture>
        <img
          src="https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.jpg"
          fetchpriority="high"
          data-v-4722e620="" />
        <div></div
      ></picture>

      <article>
        <span>
          <p>Petit four</p>
          <p>challenging</p>
          <p>{{ item.views }}</p>
        </span>

        <p>{{ item.time }}</p>

        <p>{{ item.description }}</p>

        <p>First published in 2015</p>
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

      <span v-if="change">
        <Card :quant="5" collection="recipe" />
      </span>
    </div>

    <div>
      <Ingredients />
      <RecipeMethod />
      <ChefCard />
    </div>
  </section>
</template>

<style scoped lang="scss">
.recipe {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 150px 0;

  div {
    margin: 0 auto;
    max-width: 1360px;
    text-align: center;
    width: 100%;

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
      display: grid;
      background: #f9f9f9;
      border-bottom: 1px solid var(--scheme-v3);
      border-top: 1px solid var(--scheme-v3);
      text-align: left;
      max-width: 100%;
      padding: 40px 0;
      position: relative;
      justify-items: center;

      span {
        display: block;
        max-width: 1360px;
        margin: 0 auto;
        width: 100%;
      }

      button {
        background: var(--scheme-v1);
        border: 1px solid var(--scheme-v3);
        color: var(--scheme-v2);
        cursor: pointer;
        display: flex;
        gap: 20px;
        justify-content: center;
        max-width: 200px;
        padding: 10px;
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
