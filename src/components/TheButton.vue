<script setup lang="ts">
import { defineProps } from "vue";

interface Button {
  title: String;
  bkgr?: String;
  color?: String;
}

defineProps<Button>();
</script>

<template>
  <button>{{ title }}</button>
</template>

<style scoped lang="scss">
button {
  background: v-bind(bkgr);
  color: v-bind(color);
}
</style>
