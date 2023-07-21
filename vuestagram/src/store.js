import { createStore } from "vuex";
import postingData from "./assets/postingData";
import axios from "axios";

const store = createStore({
  state() {
    return {
      //   name: "Cho",
      //   age: 20,
      postingData: postingData,
      more: {},
    };
  },

  // mutations : state를 변경할 때 / 동기적
  mutations: {
    // changeName(state) {
    //   state.name = "Park";
    // },
    // changeAge(state, payload) {
    //   state.age += payload;
    // },
    isLiked(state, idx) {
      if (!state.postingData[idx].liked) {
        state.postingData[idx].likes++;
        state.postingData[idx].liked = true;
      } else {
        state.postingData[idx].likes--;
        state.postingData[idx].liked = false;
      }
    },
    setMore(state, data) {
      state.more = data;
    },
  },

  // actions : vuex에서 ajax를 요청하고 싶을때(서버에서 데이터를 받아오고 싶을 때) / 비동기적
  // context = store
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json", (res) => {
        context.commit("setMore", res.data);
      });
    },
  },
});

export default store;
