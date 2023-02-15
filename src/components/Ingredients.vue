<script setup lang="ts">
import ingredients from "../ingredients.json";
import equipment from "../equipment.json";
</script>

<template>
  <section>
    <h2>Ingredients</h2>

    <div v-for="items in ingredients">
      <ul v-for="i in items.components">
        {{
          i.title
        }}
        <li v-for="v in i.components">{{ v.weight }} {{ v.title }}</li>
      </ul>
    </div>

    <div>
      <button>SAVE RECIPE</button>
      <button>PRINT RECIPE</button>
      <button>SHOPPING LIST</button>
    </div>

    <div class="equip" v-for="item in equipment">
      <h2>Equipment</h2>

      <ul>
        <li v-for="i in item.components">{{ i.title }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: left;
  padding: 20px;
  color: #ccc;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    ul {
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: #47af9d;
      text-transform: uppercase;
      padding: 20px 0;

      li {
        color: #000;
        text-transform: lowercase;
      }
    }

    .equip {
      ul {
        border: none;
        padding: 0;
      }
    }

    button {
      border: 1px solid #ccc;
      background: #fff;
      color: #ccc;
      cursor: pointer;
      font-weight: 400;
      padding: 20px;
    }
  }
}
</style>
