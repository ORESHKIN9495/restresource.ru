<script setup lang="ts"></script>

<template>
  <nav>
    <h3>Recommended this week on Great British Chefs</h3>

    <ul>
      <li>Northern Italian cooking</li>
      <li>The Signature Series</li>
      <li>Oven-ready</li>
      <li>Dumpling delights</li>
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
