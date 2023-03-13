<script setup lang="ts">
import { ref } from "vue";

import NavModal from "./NavModal.vue";

import SearhModal from "./SearhModal.vue";

import recipe from "../http/recipe/recipe.json";
import cook from "../http/recipe/cook.json";

const showModal = ref(false);

const showSearch = ref(false);

const product = ref();
</script>

<template>
  <nav>
    <ul>
      <li @click="(showModal = !showModal), (product = recipe)">
        Рецепты <i class="icon-menu-down" />
      </li>

      <li v-text="`Готовые решения`" />

      <li v-text="`Информационная база`" />

      <li @click="(showModal = !showModal), (product = cook)">
        Как готовить <i class="icon-menu-down" />
      </li>
    </ul>

    <form action="#">
      <input
        type="text"
        placeholder="Найти"
        @focus="showSearch = true"
        @focusout="showSearch = false"
      />

      <i class="icon-search-solid" />

      <SearhModal v-if="showSearch" />
    </form>

    <NavModal v-if="showModal" :props="product" @close="showModal = false" />
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;

  ul {
    align-items: baseline;
    display: flex;
    gap: 20px;
    margin: 0 auto 0 0;

    i {
      vertical-align: sub;
    }
  }

  form {
    align-items: center;
    border-left: 2px solid var(--scheme-v3);
    display: flex;
    height: 100%;
    position: relative;
    max-width: 400px;
    width: 100%;

    input {
      padding: 0 20px;
    }
  }

  @media only screen and (max-width: 1167px) {
    form {
      border: none;

      input {
        display: none;
      }
    }
  }

  .icon-search-solid {
    color: var(--scheme-v3);
    padding-right: 20px;
    margin: 0 0 0 auto;
  }
}
</style>
