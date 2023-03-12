import axios from "axios";

import router from "../../router";

const state = () => ({
  data: false,
});

const getters = {
  data: (state: { data: boolean }) => state.data,
};

const actions = {
  // async postUserData({ commit }: { commit: any }, user: object) {
  //   await axios.post("https://retoolapi.dev/kDIGl3/users", user);
  // },

  async getUserData({ commit }: { commit: any }, data: any) {
    await axios
      .get("https://retoolapi.dev/kDIGl3/users")
      .then((response) => response.data)
      .then((r) => {
        if (r.some((e: any) => e.email === data.email)) {
          if (r.some((e: any) => e.password === data.password)) {
            commit("setData", true);

            router.push({ path: "/restresource.ru" });
          } else {
            console.log("Не верная комбинация");
          }
        } else {
          console.log("Не верная комбинация");
        }
      });
  },
};

const mutations = {
  setData: (state: { data: boolean }, data: boolean) => {
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
