import axios from "axios";

const state = () => ({
  data: {},
});

const getters = {
  data: (state: { data: object }) => state.data,
};

const actions = {
  async postUserData({ commit }: { commit: any }, user: object) {
    await axios.post("https://retoolapi.dev/kDIGl3/users", user);
  },

  // async deleteData({ commit }: { commit: any }) {
  //   await axios.delete("https://retoolapi.dev/kDIGl3/users/7");
  // },
};

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
