<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step === 1" @click="step++">다음</li>
        <li v-if="step === 2" @click="publish()">공유</li>
      </ul>
      <img src="./assets/logo.png" class="logo" @click="step = 0" />
    </div>

    <Container
      :postsData="postsData"
      :step="step"
      :imgUrl="uploadImgUrl"
      :filter="uploadFilter"
      @content="uploadContent = $event"
    />
    <button v-if="step === 0" @click="clickedMore">더보기</button>

    <!-- <h4>methods : 함수 사용할 때마다 실행됨</h4>
    <p>{{ now() }} {{ counter }}</p>
    <button @click="counter++">버튼</button>
    <h4>
      computed : 처음 실행한 함수의 값을 간직함<br />
      (데이터처럼 쓰이기 때문에 함수가 아님()쓰지 않음)
    </h4>
    <p>{{ now2 }} {{ counter }}</p>
    <button @click="counter++">버튼</button>

    <h4>Vuex mutations</h4>
    <div style="display: flex">
      <p style="margin-right: 10px">
        안녕 {{ $store.state.name }}{{ $store.state.age }}
      </p>
      <p style="margin-right: 10px">안녕 {{ name }}{{ age }}{{ likes }}</p>
      <p>{{ nameInStore }}</p>
    </div>
    <button @click="$store.commit('changeName')">이름변경버튼</button>
    <button @click="changeName()">이름변경버튼2</button>
    <button @click="$store.commit('changeAge', 10)">나이증가버튼</button>
    <button @click="changeAge(10)">나이증가버튼2</button>

    <h4>Vuex actions</h4>
    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button>
    <button @click="getData()">더보기버튼2</button> -->

    <div class="footer">
      <ul class="footer-button-plus">
        <!-- multiple: 여러개업로드가능, accept="image/*" : input에서 이미지만선택가능하게 제한 -->
        <input @change="uploadImg" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postingData from "./assets/postingData.js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      step: 3,
      postsData: postingData,
      moreCount: 0,
      uploadImgUrl: "",
      uploadUserName: "Cho Seoeun",
      uploadDate: "",
      uploadContent: "",
      uploadFilter: "",
      counter: 0,
    };
  },
  mounted() {
    this.emitter.on("filter", (name) => {
      this.uploadFilter = name;
    });
  },
  components: {
    Container,
  },
  // computed : 처음 데이터 계산결과 저장공간, return 필수 / vuex의 데이터를 꺼내쓸때 좋음
  computed: {
    now2() {
      return new Date();
    },
    // name() {
    //   return this.$store.state.name;
    // },
    ...mapState(["name", "age", "likes"]),
    ...mapState({ nameInStore: "name" }),
  },
  methods: {
    now() {
      return new Date();
    },
    ...mapMutations(["changeName", "changeAge"]),
    ...mapActions(["getData"]),
    clickedMore() {
      this.axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
        .then((res) => {
          this.postsData.push(res.data);
          this.moreCount++;
        })
        .catch((err) => err);
    },
    uploadImg(e) {
      let file = e.target.files;
      if (!file[0].type.includes("image")) alert("이미지만 업로드 가능합니다.");
      else {
        this.uploadImgUrl = URL.createObjectURL(file[0]);
        this.step++;

        let today = new Date();
        let month = today.toLocaleString("en-US", { month: "short" });
        let day = today.getDay();
        this.uploadDate = month + " " + day;
      }

      // 업로드한 파일을 띄워주는 방법
      // 방법1 FileReader() : 파일을 글자로 변환해줌
      // 방법2 URL.createObjectURL() : 이미지의 가상 URL을 생성해줌
    },
    uploadPost() {
      this.step = 0;
    },
    publish() {
      let uploadData = {
        name: this.uploadUserName,
        userImage: "https://picsum.photos/100?random=6",
        postImage: this.uploadImgUrl,
        likes: 0,
        date: this.uploadDate,
        liked: false,
        content: this.uploadContent,
        filter: this.uploadFilter,
      };
      this.postsData.unshift(uploadData);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
  cursor: pointer;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
