<template>
  <div class="profile-detail">
    <div class="user">
      <div class="user-info">
        <h1 class="user-name">{{ user.name }}</h1>
        <h3 class="user-city">{{ user.address.city }}</h3>

        <ul class="user-detail">
          <li><span>Username</span>{{ user.username }}</li>
          <li>
            <span>Email</span>
            <a :href="'mailto:' + user.email">{{ user.email }}</a>
          </li>
          <li>
            <span>Phone </span>
            <a :href="'tel:' + user.phone">{{ user.phone }}</a>
          </li>
          <li>
            <span>Website </span>
            <a
              :href="'http://' + user.website"
              class="website"
              target="_blank"
              >{{ user.website }}</a
            >
          </li>
          <li><span>Company</span>{{ user.company.name }}</li>
        </ul>
      </div>
      <div class="user-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6349269.872648198!2d30688870413138527!3d39.01007955707402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v161426170668!5m2!1str!2str"
          width="100%"
          height="350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="last-post">
      <h3 class="last-post-title">{{ posts[posts.length - 1].title }}</h3>
      <div class="last-post-body">
        {{
          posts[0].body.length > 200
            ? posts[0].body.slice(0, 200) + "..."
            : posts[0].body
        }}
      </div>
      <router-link tag="a" :to="'/post/' + posts[posts.length - 1].id"
        >Show More</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetail",
  data() {
    return {
      user: null,
      posts: []
    };
  },
  created() {
    this.$store.getters.getUsers.forEach(user => {
      if (user.id == this.$route.params.id) {
        this.user = user;

        this.$store.getters.getPosts.forEach(post => {
          if (post.userId == this.user.id) {
            this.posts.push(post);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  padding-bottom: 50px;
  .user-info {
    .user-name {
      font-size: 35px;
      font-weight: 500;
    }
    .user-city {
      font-size: 20px;
      font-weight: 300;
    }
    .user-detail {
      margin-top: 60px;
      color: #525f7f;
      li {
        margin: 5px 0;
        font-weight: 600;
        span {
          display: inline-block;
          min-width: 95px;
          margin-right: 5px;
          color: #adb5bd;
          font-size: 14px;
          font-weight: 400;
        }
        a.website {
          color: #18a0fb;
        }
      }
    }
  }
  .user-map {
    width: 600px;
    margin-left: auto;
  }
}
.last-post {
  border-top: 1px solid #e9ecef;
  text-align: center;
  padding: 80px 60px 50px 60px;

  &-title,
  &-body {
    font-weight: 300;
    line-height: 35px;
  }
  a {
    display: inline-block;
    margin-top: 30px;
    color: #4a90e2;
  }
}

@media (max-width: 1115px) {
  .user {
    flex-direction: column-reverse;
    .user-name,
    .user-city {
      text-align: center;
    }
    .user-detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .user-map {
      width: 100%;
      margin-bottom: 25px;
    }
  }
}

@media (max-width: 700px) {
  .user .user-detail {
    display: block;
    width: max-content;
    margin: 0 auto;
  }
  .last-post {
    padding: 40px 10px 10px 10px;
  }
}

@media (max-width: 370px) {
  .user .user-info .user-detail li {
    margin: 0 0 15px 0;
    span {
      display: block;
    }
  }
}
</style>
