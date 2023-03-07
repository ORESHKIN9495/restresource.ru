<script setup lang="ts"></script>

<template>
  <nav>
    <h3 v-text="`Recommended this week on Great British Chefs`" />

    <ul>
      <li v-text="`Northern Italian cooking`" />
      <li v-text="`The Signature Series`" />
      <li v-text="`Oven-ready`" />
      <li v-text="`Dumpling delights`" />
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: grid;
  gap: 20px;
  height: fit-content;

  h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }

  ul {
    display: grid;
    gap: 10px;
  }

  @media only screen and (max-width: 990px) {
    h3 {
      border: none;
      padding: 0;
      text-align: center;
    }

    ul {
      display: flex;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 770px) {
    h3 {
      text-align: left;
    }

    ul {
      display: grid;
    }
  }
}
</style>
