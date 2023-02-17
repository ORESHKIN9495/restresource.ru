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
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 0 0 20%;

  h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media only screen and (max-width: 860px) {
    & {
      align-items: center;
      flex-direction: row;
      flex: 100%;
      flex-wrap: wrap;
      justify-content: center;

      h3 {
        border: none;
        padding: 0;
      }

      ul {
        flex-direction: row;
      }
    }
  }
}
</style>
