<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

defineEmits(["close"]);

interface Change {
  props: any;
}

defineProps<Change>();
</script>

<template>
  <div>
    <i class="icon-close" @click="$emit('close')" />

    <ul v-for="(i, index) in props">
      <p v-text="index" />

      <router-link to="/restresource.ru" custom v-slot="{ navigate }">
        <li v-for="v in i.product" @click="navigate" v-text="v" />
      </router-link>
    </ul>
  </div>
</template>

<style scoped lang="scss">
div {
  background: var(--scheme-v1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  height: 600px;
  inset: 102px 0 0 0;
  overflow-y: scroll;
  position: absolute;
  padding: 40px;

  i {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 28px;
  }

  ul {
    border-bottom: 1px solid var(--scheme-v3);
    display: grid;
    gap: 5px;
    padding-bottom: 40px;

    p {
      font-weight: 400;
      margin-bottom: 10px;
    }

    li {
      position: relative;

      &:hover {
        transform: translateX(10px);

        &::before {
          content: "—";
          position: absolute;
          margin: auto 0 auto -20px;
        }
      }
    }
  }
}
</style>
