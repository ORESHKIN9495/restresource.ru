import { defineStore } from "pinia";

import axios from "axios";

export const useIngredientsData = defineStore("ingredients", {
  state: () => ({ ingredients: {}, equip: {} }),

  getters: {
    ingData: (state) => state.ingredients,
    equipData: (state) => state.equip,
  },

  actions: {
    async getIngredient() {
      await axios
        .get("https://oreshkin.dev/ingredients.json")
        .then((response) => (this.ingredients = response.data));
    },

    async getEquipments() {
      await axios
        .get("https://oreshkin.dev/equipment.json")
        .then((response) => (this.equip = response.data));
    },
  },
});
