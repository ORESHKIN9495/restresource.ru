import axios from "axios";

const state = () => ({
  data: {},
});

const getters = {
  data: (state: { data: object }) => state.data,
};

const actions = {
  async getData({ commit }: { commit: any }, data: object) {
    await axios
      .get("https://oreshkin.dev/base.json")
      .then((response) => response.data)
      .then((data) => commit("setData", data));
  },
};

const mutations = {
  setData: (state: { data: object }, data: object) => {
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
