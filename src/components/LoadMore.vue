<script setup lang="ts">
import Card from "../components/Card.vue";
</script>

<template>
  <section class="latest">
    <h2>Latest from Great British Chefs</h2>

    <div>
      <Card :filled="false" :quant="3" />
      <Card :filled="false" :quant="2" />
      <Card :filled="false" :quant="3" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.latest {
  display: flex;
  flex-direction: column;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
