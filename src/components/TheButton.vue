<script setup lang="ts">
import { defineProps } from "vue";

interface Button {
  title: String;
  a?: Boolean;
  b?: Boolean;
  c?: Boolean;
  d?: Boolean;
  e?: Boolean;
  f?: Boolean;
}

defineProps<Button>();
</script>

<template>
  <button :class="{ a: a, b: b, c: c, d: d, e: e, f: f }">
    {{ title }}

    <svg v-if="d" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <path
        d="M9.879 11.453 16 17.56l6.121-6.106L24 13.332l-8 8-8-8Zm0 0"
        style="stroke: none; fill-rule: nonzero; fill: #fff; fill-opacity: 1"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
button {
  &.a {
    background: #facd02;
    color: #000;

    @media only screen and (max-width: 1280px) {
      display: none;
    }
  }
  &.b {
    background: #000;

    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  &.c {
    background: #bba250;
  }
  &.d {
    background: rgba(255, 255, 255, 0.152);
    border: 1px solid #fff;
    max-width: 200px;
  }
  &.e {
    border: 1px solid #fff;
    max-width: 280px;

    @media only screen and (max-width: 1080px) {
      max-width: 100%;
    }
  }
  &.f {
    border: 1px solid #595959;
    text-transform: uppercase;
  }
}
</style>
