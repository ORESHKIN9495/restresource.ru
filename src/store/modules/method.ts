import { defineStore } from "pinia";

import axios from "axios";

export const useMethoData = defineStore("method", {
  state: () => ({ data: {} }),

  getters: {
    propData: (state) => state.data,
  },

  actions: {
    async getData() {
      await axios
        .get("https://oreshkin.dev/method.json")
        .then((response) => (this.data = response.data));
    },
  },
});
