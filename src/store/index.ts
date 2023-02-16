import { createStore } from "vuex";

import base from "../store/modules/base";
import ingredients from "../store/modules/ingredients";
import method from "../store/modules/method";

const Store = createStore({
  modules: {
    base,
    ingredients,
    method,
  },
});

export default Store;
