import { defineStore } from "pinia";

import axios from "axios";

export const useDataStore = defineStore("base", {
  state: () => ({ data: {} }),

  getters: {
    propData: (state) => state.data,
  },

  actions: {
    async getData() {
      await axios
        .get("https://oreshkin.dev/base.json")
        .then((response) => (this.data = response.data));
    },
  },
});
