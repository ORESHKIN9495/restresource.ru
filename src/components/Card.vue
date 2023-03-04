<script setup lang="ts">
import { defineProps, ref } from "vue";

import { useRouter } from "vue-router";

import cards from "../http/cards.json";

const router = useRouter();

interface Recipe {
  filled?: boolean;
  grid?: boolean;
  quant?: number;
  collection?: string;
}

const props = defineProps<Recipe>();

const ad = cards.cards.filter((i) => i.collection == props.collection);
</script>

<template>
  <section
    class="card"
    :class="{ grid: grid }"
    @click="router.push({ path: `/restresource.ru/${collection}` })"
  >
    <div v-for="(card, index) in ad.slice(0, quant)">
      <picture>
        <img :srcset="card.image" alt="a duck is swimming in a pond with ice" />

        <span class="overlay">
          <i class="icon-suit-heart" /> <i class="icon-menu" />
        </span>
      </picture>

      <div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.by }}</p>
      </div>

      <p v-if="filled ? index === 0 : ''">{{ card.descr }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  div {
    display: grid;
    gap: 10px;

    img {
      width: 100%;
      height: 100%;
    }

    p {
      color: #3e3e3e;
      font-size: 14px;
    }
  }

  picture {
    position: relative;
    transition: 0.3s ease-in-out;

    span {
      align-items: end;
      background: rgba(0, 0, 0, 0.571);
      display: flex;
      gap: 10px;
      inset: 0;
      opacity: 0;
      position: absolute;
      padding: 20px;
      transition: 0.2s ease-in-out;

      &:hover {
        opacity: 1;
      }

      i {
        border: 1px solid #ffffff;
        color: #ffffff;
        font-size: 16px;
        padding: 10px;
        transition: 0.3s ease-in-out;

        &:hover {
          background: rgba(255, 255, 255, 0.308);
        }
      }
    }
  }

  &.grid {
    grid-template-columns: repeat(3, 1fr);

    div {
      &:first-child {
        grid-area: 1 / 1 / 3 / 3;
      }
    }

    @media only screen and (max-width: 860px) {
      & {
        grid-template-columns: 1fr;

        div {
          &:first-child {
            grid-area: unset;
          }
        }
      }
    }
  }
}
</style>
