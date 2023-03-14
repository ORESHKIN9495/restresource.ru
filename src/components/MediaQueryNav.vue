<script setup lang="ts">
import { defineEmits } from "vue";

defineEmits(["close"]);
</script>

<template>
  <section>
    <ul>
      <li>Рецепты <i class="icon-menu-down" /></li>

      <li v-text="`Готовые решения`" />

      <li v-text="`Информационная база`" />

      <li>Как готовить <i class="icon-menu-down" /></li>
    </ul>

    <div>
      <router-link
        to="/restresource.ru/signin"
        v-text="`Войти`"
        @click="$emit('close')"
      />
      <router-link
        to="/restresource.ru/membership"
        v-text="`Регистрация`"
        @click="$emit('close')"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: var(--scheme-v1);
  display: grid;
  gap: 20px;
  inset: 102px 0 0 0;
  padding: 20px;
  position: sticky;
  z-index: 999;

  ul {
    li {
      border-bottom: 1px solid var(--scheme-v3);
      padding: 20px 0;
      font-weight: 400;
    }
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;

    a {
      background: var(--scheme-v3);
      padding: 18px 40px;
      text-align: center;
      max-width: 200px;
      width: 100%;
    }
  }
}
</style>
