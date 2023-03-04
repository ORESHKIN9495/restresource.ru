<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

defineEmits(["close"]);

interface Change {
  props: any;
}

defineProps<Change>();
</script>

<template>
  <section>
    <i class="icon-close" @click="$emit('close')" />

    <div>
      <ul v-for="(i, index) in props">
        <p>{{ index }}</p>

        <router-link to="/restresource.ru" custom v-slot="{ navigate }">
          <li v-for="v in i.product" @click="navigate">
            {{ v }}
          </li>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background: #e2e2e2;
  left: 0;
  position: fixed;
  padding-left: calc(29px + 12.2%);
  padding-right: calc(29px + 12.2%);
  top: 92px;
  width: 100%;
  z-index: 99;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    margin: 40px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &:nth-child(-n + 5) {
      border-bottom: 1px solid var(--scheme-v3);
      padding-bottom: 40px;
    }

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

  .icon-close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 28px;
  }
}
</style>
