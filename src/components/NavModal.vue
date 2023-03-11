<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

defineEmits(["close"]);

interface Change {
  props: any;
}

defineProps<Change>();
</script>

<template>
  <section @click="$emit('close')">
    <div>
      <i class="icon-close" @click="$emit('close')" />
      <ul v-for="(i, index) in props">
        <p v-text="index" />

        <router-link to="/restresource.ru" custom v-slot="{ navigate }">
          <li v-for="v in i.product" @click="navigate" v-text="v" />
        </router-link>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  position: sticky;
  padding-left: calc(29px + 12.2%);
  padding-right: calc(29px + 12.2%);
  inset: 90px 0 0 0;
  z-index: 999;

  div {
    background: var(--scheme-v1);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    position: absolute;
    inset: 0;
    padding: 40px;
    height: 600px;
    overflow-y: scroll;

    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;

      border-bottom: 1px solid var(--scheme-v3);
      padding-bottom: 40px;

      p {
        color: var(--scheme-v2);
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

  .icon-close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 28px;
  }
}
</style>
