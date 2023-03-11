import axios from "axios";

const state = () => ({
  data: {},
});

const getters = {
  data: (state: { data: object }) => state.data,
};

const actions = {};

const mutations = {
  postData: (state: { data: object }, data: object) => {
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
