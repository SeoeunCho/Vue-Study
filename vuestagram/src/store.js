import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Cho",
      age: 20,
      likes: 0,
      liked: false,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "Park";
    },
    changeAge(state, payload) {
      state.age += payload;
    },
    isLiked(state) {
      if (!state.liked) {
        state.likes++;
        state.liked = true;
      } else {
        state.likes--;
        state.liked = false;
      }
    },
  },
});

export default store;
