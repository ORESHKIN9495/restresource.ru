import axios from "axios";

const state = () => ({
  data: {},
});

const getters = {
  data: (state: { data: object }) => state.data,
};

const actions = {
  async getUserData({ commit }: { commit: any }) {
    await axios
      .get("https://retoolapi.dev/kDIGl3/users")
      .then((response) => response.data)
      .then((data) => commit("getData", data));
  },
};

const mutations = {
  getData: (state: { data: object }, data: object) => {
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
