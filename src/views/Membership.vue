<script setup lang="ts">
import { useRouter } from "vue-router";

import price from "../http/price.json";

const router = useRouter();
</script>

<template>
  <section>
    <h1>Вступайте в наш клуб</h1>

    <p>
      Станьте серебряным или золотым членом клуба Great British Chefs Club
      сегодня и получите неограниченный доступ к более чем 10 000 рецептов,
      функций, руководств и видео, а также множество других преимуществ и
      привилегий. Уже являетесь членом клуба? Зарегистрируйтесь через меню в
      заголовке, а затем вернитесь на эту страницу, чтобы повысить свой статус.
    </p>

    <div>
      <ul v-for="i in price">
        <h2>
          {{ i.title }}

          <p>{{ i.cost }} <small>₽</small></p>
        </h2>

        <h3>Что вы получите:</h3>

        <li v-for="g in i.get">
          {{ g }}
        </li>

        <button
          v-if="i.id === 0"
          @click="router.push({ path: '/restresource.ru/signup' })"
        >
          Регистрация
        </button>

        <button
          v-if="i.id === 1"
          @click="router.push({ path: '/restresource.ru/signup' })"
        >
          Join Silver
        </button>

        <button
          v-else-if="i.id === 2"
          @click="router.push({ path: '/restresource.ru/signup' })"
        >
          Join Gold
        </button>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 40px;
  margin: 20px auto;
  max-width: 1360px;
  text-align: center;

  h1 {
    font-size: 30px;
  }

  h2 {
    text-align: center;

    p {
      font-size: 20px;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media only screen and (max-width: 996px) {
      grid-template-columns: 1fr;
    }

    ul {
      border: 2px solid #739fa5;
      display: flex;
      flex-direction: column;
      gap: 40px;
      height: fit-content;
      list-style: disc;
      padding: 40px;
      text-align: left;

      button {
        background: #739fa5;
        margin: auto auto 0;
      }

      &:nth-child(2) {
        border-color: var(--scheme-v3);

        button {
          background: var(--scheme-v3);
        }
      }

      &:last-child {
        border-color: #bba250;

        button {
          background: #bba250;
        }
      }
    }
  }
}
</style>
