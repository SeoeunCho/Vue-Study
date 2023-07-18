import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    // Nested routes
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
  // {
  //   // 404페이지 : 위의 주소가 우선순위이기 떄문에 영향없음
  //   path: "/:anything(.*)", // 모든 문자에대해서 체크
  //   component: Home,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
