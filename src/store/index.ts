import { createStore } from "vuex";

import base from "../store/modules/base";
import ingredients from "../store/modules/ingredients";
import method from "../store/modules/method";
import signin from "../store/modules/signin";
import signup from "../store/modules/signup";

const Store = createStore({
  modules: {
    base,
    ingredients,
    method,
    signin,
    signup,
  },
});

export default Store;
