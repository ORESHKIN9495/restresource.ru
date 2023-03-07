<script setup lang="ts">
import { defineProps } from "vue";

interface Button {
  title?: string;
  a?: boolean;
  b?: boolean;
  c?: boolean;
  d?: boolean;
  e?: boolean;
  f?: boolean;
}

defineProps<Button>();
</script>

<template>
  <button :class="{ a: a, b: b, c: c, d: d, e: e, f: f }">
    {{ title }}
    <svg v-if="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.696 15.74">
      <path
        fill="#fff"
        d="M35.321.499a.671.671 0 0 0-.906-.44l-9.509 3.958-8.377 3.517c-5.66 2.2-12 5.276-12 5.276A13.857 13.857 0 0 0 0 15.669c2.491.44 9.057-1.319 9.057-1.319 3.623-1.1 16.3-5.716 16.3-5.716a.3.3 0 0 0 0-.44 2.085 2.085 0 0 1 .226-2.858 5.561 5.561 0 0 1 2.038-.22s3.4-.22 5.208-1.979c0 0 .679-.66 1.132-.66a.48.48 0 0 1 .453.44s0 .22.226 0 .679-.44.906-.879a1.356 1.356 0 0 0-.225-1.539"
      />
    </svg>

    <svg v-if="c" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
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
    background: var(--scheme-v2);
    padding: 0;
    max-width: 200px;

    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  &.b {
    background: #bba250;
    padding: 0;
    max-width: 200px;

    svg {
      max-width: 20px;
      margin-right: 10px;
    }
  }

  &.c {
    background: var(--scheme-v3);
    max-width: 280px;
  }

  &.d {
    border: 1px solid var(--scheme-v1);
    max-width: 280px;

    @media only screen and (max-width: 1080px) {
      max-width: 100%;
    }
  }
  &.e {
    border: 1px solid var(--scheme-v6);
    text-transform: uppercase;
  }

  &.f {
    background: var(--scheme-v3);
    text-transform: uppercase;
  }
}
</style>
