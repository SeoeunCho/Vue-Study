import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Cho",
      age: 20,
      likes: 0,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "Park";
    },
    changeAge(state, payload) {
      state.age += payload;
    },
  },
});

export default store;
