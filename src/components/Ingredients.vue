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
    <h2>Ingredients</h2>

    <div v-for="items in data">
      <ul v-for="i in items.components">
        <h3>{{ i.title }}</h3>

        <li v-for="v in i.components">{{ v.weight }} {{ v.title }}</li>
      </ul>
    </div>

    <div>
      <button>SAVE RECIPE</button>
      <button>PRINT RECIPE</button>
      <button>SHOPPING LIST</button>
    </div>

    <div class="equip" v-for="item in data">
      <h2>Equipment</h2>

      <ul>
        <li v-for="i in item.components">{{ i.title }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border: 1px solid #ccc;
  display: grid;
  flex: 100%;
  gap: 40px;
  height: 100%;
  padding: 20px;
  text-align: left;

  h3 {
    color: #47af9d;
    text-transform: uppercase;
  }

  div {
    display: grid;
    gap: 20px;

    ul {
      border-bottom: 1px solid #ccc;
      display: grid;
      gap: 20px;
      padding: 0 0 20px;

      &:last-child {
        border: none;
        padding: 0;
      }
    }

    button {
      border: 1px solid #ccc;
      background: #fff;
      color: #ccc;
      cursor: pointer;
      font-weight: 400;
      padding: 20px;
    }
  }
}
</style>
