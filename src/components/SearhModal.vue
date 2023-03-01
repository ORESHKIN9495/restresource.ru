<script setup lang="ts">
import { ref } from "vue";
import cook from "../http/recipe/cook.json";
const product = ref(cook.Мясо.product);
</script>

<template>
  <section class="popular">
    <ul>
      <h3>POPULAR</h3>

      <li v-for="i in product">{{ i }}</li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.popular {
  border: 1px solid #ccc;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  ul {
    background: #fff;
    color: #000;

    h3 {
      text-align: center;
      padding: 20px 0;
    }

    li {
      border-top: 1px solid #ccc;
      padding: 20px;
    }
  }
}
</style>
