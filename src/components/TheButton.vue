<script setup lang="ts">
import { defineProps } from "vue";

interface Button {
  title: String;
  bkgr?: String;
  color?: String;
  transparent?: Boolean;
}

defineProps<Button>();
</script>

<template>
  <button :class="{ transparent: transparent }">{{ title }}</button>
</template>

<style scoped lang="scss">
button {
  background: v-bind(bkgr);
  border: none;
  color: v-bind(color);
  outline: none;
  padding: 10px 16px;

  &.transparent {
    border: 1px solid #fff;
    background: none;
  }
}
</style>
