<script setup lang="ts">
import { ref } from "vue";

import cook from "../http/recipe/cook.json";

const product = ref(cook.Мясо.product);
</script>

<template>
  <ul class="popular">
    <h3 v-text="`POPULAR`" />

    <li v-for="i in product">
      <router-link to="/restresource.ru" v-text="i" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.popular {
  background: var(--scheme-v1);
  border: 2px solid var(--scheme-v3);
  border-top: 0;
  display: grid;
  gap: 0;
  top: 52px;
  left: -2px;
  right: 0;
  position: absolute;
  z-index: 999;

  h3 {
    text-align: center;
    padding: 10px 0;
  }

  li {
    border-top: 1px solid #ccc;
    padding: 10px;
  }
}
</style>
