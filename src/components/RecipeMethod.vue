<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useStore } from "vuex";

const store = useStore();

const data = computed(() => store.getters["method/data"]);

onMounted(() => {
  store.dispatch("method/getData");
});
</script>

<template>
  <section class="method" v-for="items in data">
    <h2 v-text="`Method`" />

    <div v-for="(item, index) in items.steps">
      <span v-text="index + 1" />

      <p v-text="item.description" />

      <ul>
        <li v-for="i in item.components">{{ i.weight }} {{ i.title }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.method {
  display: grid;
  gap: 20px;
  text-align: left;

  h2 {
    border-bottom: 1px solid var(--scheme-v3);
    color: var(--scheme-v2);
    font-size: 20px;
    font-weight: 400;
    padding: 0 0 20px;
  }

  p {
    color: var(--scheme-v2);
  }

  div {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 20px;
  }

  span {
    color: #47af9d;
    font-size: 30px;
    grid-area: 1 / 1 / 3 / 2;
  }

  ul {
    border: 1px solid var(--scheme-v3);
    display: grid;
    gap: 10px;
    padding: 20px;
  }
}
</style>
