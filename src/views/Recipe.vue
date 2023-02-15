<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Card.vue";
import Ingredients from "../components/Ingredients.vue";
import RecipeMethod from "../components/RecipeMethod.vue";
import ChefCard from "../components/ChefCard.vue";

import base from "../base.json";

const change = ref(true);

const bases = ref();

base.forEach((el) => {
  bases.value = el;
});
</script>

<template>
  <section class="recipe">
    <div>
      <h1>{{ bases.title }}</h1>
      <p>
        by <router-link to="#">{{ bases.author }}</router-link>
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
          <p>{{ bases.views }}</p>
        </span>

        <p>{{ bases.time }}</p>

        <p>
          {{ bases.description }}
        </p>

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
        <Card :quant="5" />
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
    text-align: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1360px;

    h1 {
      font-size: 30px;
    }

    &:nth-child(2) {
      display: flex;
      gap: 20px;
      text-align: left;

      article {
        display: flex;
        flex-direction: column;
        gap: 20px;

        span {
          display: flex;
          gap: 20px;
        }
      }
    }

    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      background: #f9f9f9;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      text-align: left;
      max-width: 100%;
      padding: 40px 0;
      position: relative;
      align-items: center;

      span {
        display: block;
        max-width: 1360px;
        margin: 0 auto;
        padding: 0;
      }

      button {
        background: #fff;
        border: 1px solid #ccc;
        color: #000;
        cursor: pointer;
        display: flex;
        gap: 20px;
        padding: 10px;
        position: absolute;
        top: -15px;
      }
    }

    &:nth-child(4) {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
