<template>
  <div class="post-detail">
    <h1 class="post-title">{{ post.title }}</h1>
    <div class="post-body">{{ post.body }}</div>
    <div class="post-author">
      <span>Yazar: </span>
      <router-link tag="a" :to="'/profile/' + author.id">{{
        author.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  data() {
    return {
      post: null,
      author: null
    };
  },
  created() {
    if (this.$route.params.id) {
      this.$store.getters.getPosts.forEach(post => {
        if (post.id == this.$route.params.id) {
          this.post = post;

          this.$store.getters.getUsers.forEach(user => {
            if (post.userId == user.id) {
              this.author = user;
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-detail {
  padding: 0 50px;
  min-height: 390px;
  display: grid;
  place-content: center;
  .post-title {
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
  }
  .post-body {
    margin: 30px 0;
    line-height: 27px;
    text-indent: 20px;
    text-align: justify;
  }
  .post-author {
    margin-top: 50px;
    text-align: right;
    span {
      color: rgba(black, 0.6);
    }
  }
}

@media (max-width: 600px) {
  .post-detail {
    padding: 0 10px;
    .post-title {
      font-size: 20px;
    }
    .post-body {
      text-align: center;
      text-indent: 0;
    }
    .post-author {
      margin-top: 15px;
    }
  }
}
</style>
