import { createStore } from "vuex";
import postingData from "./assets/postingData";

const store = createStore({
  state() {
    return {
      name: "Cho",
      age: 20,
      postingData: postingData,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "Park";
    },
    changeAge(state, payload) {
      state.age += payload;
    },
    isLiked(state, idx) {
      if (!state.postingData[idx].liked) {
        state.postingData[idx].likes++;
        state.postingData[idx].liked = true;
      } else {
        state.postingData[idx].likes--;
        state.postingData[idx].liked = false;
      }
    },
  },
});

export default store;

