<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { useMethoData } from "../store/modules/method";

const store = useMethoData();

const bases = computed(() => store.propData);

onMounted(() => {
  store.getData();
});
</script>

<template>
  <section class="method">
    <h2>Method</h2>

    <div v-for="items in bases">
      <div class="row" v-for="(item, index) in items.steps">
        <span>{{ index }}</span>

        <div class="column">
          <p>{{ item.description }}</p>

          <ul>
            <li v-for="i in item.components">{{ i.weight }} {{ i.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.method {
  text-align: left;

  h2 {
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: 400;
    padding: 0 0 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    padding: 20px;

    span {
      color: #47af9d;
      font-size: 30px;
    }

    ul {
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }

    .column {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .row {
      flex-direction: row;
    }
  }
}
</style>
