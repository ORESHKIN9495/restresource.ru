import axios from "axios";

const state = () => ({
  data: {},
});

const getters = {
  data: (state: { data: object }) => state.data,
};

const actions = {
  async ingredData({ commit }: { commit: any }, data: object) {
    await axios
      .get("https://oreshkin.dev/ingredients.json")
      .then((response) => response.data)
      .then((data) => commit("ingredientData", data));
  },

  async equipdData({ commit }: { commit: any }, data: object) {
    await axios
      .get("https://oreshkin.dev/ingredients.json")
      .then((response) => response.data)
      .then((data) => commit("equipmentData", data));
  },
};

const mutations = {
  ingredientData: (state: { data: object }, data: object) => {
    state.data = data;
  },

  equipmentData: (state: { data: object }, data: object) => {
    state.data = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
