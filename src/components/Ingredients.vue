<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useStore } from "vuex";

const store = useStore();

const data = computed(() => store.getters["ingredients/data"]);

onMounted(() => {
  store.dispatch("ingredients/ingredData");
  store.dispatch("ingredients/equipdData");
});
</script>

<template>
  <section>
    <h2 v-text="`Ingredients`" />

    <div v-for="items in data">
      <ul v-for="i in items.components">
        <h3 v-text="i.title" />

        <li v-for="v in i.components">{{ v.weight }} {{ v.title }}</li>
      </ul>
    </div>

    <div>
      <button v-text="`SAVE RECIPE`" />
      <button v-text="`PRINT RECIPE`" />
      <button v-text="`SHOPPING LIST`" />
    </div>

    <div class="equip" v-for="item in data">
      <h2 v-text="`Equipment`" />

      <ul>
        <li v-for="i in item.components" v-text="i.title" />
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border: 1px solid var(--scheme-v3);
  display: grid;
  flex: 100%;
  gap: 40px;
  height: fit-content;
  padding: 20px;
  text-align: left;

  h2 {
    color: var(--scheme-v2);
  }

  h3 {
    color: #47af9d;
    text-transform: uppercase;
  }

  div {
    display: grid;
    gap: 20px;

    ul {
      border-bottom: 1px solid var(--scheme-v3);
      display: grid;
      gap: 20px;
      padding: 0 0 20px;

      &:last-child {
        border: none;
        padding: 0;
      }
    }

    button {
      border: 1px solid var(--scheme-v3);
      background: var(--scheme-v1);
      color: var(--scheme-v3);
      cursor: pointer;
      font-weight: 400;
      padding: 20px;
    }
  }
}
</style>
