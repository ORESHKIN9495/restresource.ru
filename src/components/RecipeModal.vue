<script setup lang="ts">
import { defineEmits } from "vue";

import recipes from "../recipe.json";

const emit = defineEmits(["close"]);
</script>

<template>
  <Teleport to="body">
    <div name="rec" class="modal">
      <i class="icon-close" @click="$emit('close')" />
      <div>
        <ul v-for="(i, index) in recipes">
          <p>{{ index }}</p>
          <li v-for="v in i.product">{{ v }}</li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  background: #e2e2e2;
  left: 0;
  position: fixed;
  padding: 20px 0;
  padding-left: calc(29px + 12.2%);
  padding-right: calc(29px + 12.2%);
  top: 116px;
  width: 100%;
  z-index: 99;

  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    position: relative;
    margin: 40px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &:nth-child(-n + 5) {
      border-bottom: 1px solid #c1c0c1;
      padding-bottom: 40px;
    }

    p {
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
    }

    li {
      position: relative;

      &:hover {
        transform: translateX(10px);

        &::before {
          vertical-align: middle;
          content: "—";
          position: absolute;
          top: 0;
          left: 0;
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
