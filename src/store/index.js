import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL: "https://jsonplaceholder.typicode.com",
    users: null,
    posts: null,
    pageLoaded: true
  },
  mutations: {
    initPosts(state, posts) {
      state.posts = posts;
    },
    initUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    fetchPosts(context) {
      axios
        .get(this.state.baseURL + "/posts")
        .then(res => {
          if (res.data.length > 0) {
            context.state.pageLoaded = true;
            context.commit("initPosts", res.data);
          }
        })
        .catch(() => {
          console.clear();
          context.state.pageLoaded = false;
        });
    },
    fetchUsers(context) {
      axios
        .get(this.state.baseURL + "/users")
        .then(res => {
          if (res.data.length > 0) {
            context.state.pageLoaded = true;
            context.commit("initUsers", res.data);
          }
        })
        .catch(() => {
          console.clear();
          context.state.pageLoaded = false;
        });
    }
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getUsers(state) {
      return state.users;
    }
  }
});
