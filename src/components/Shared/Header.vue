<template>
  <header>
    <nav class="wrapper">
      <router-link tag="a" to="/" class="logo">
        <icon name="logo" />
      </router-link>
      <router-link tag="a" to="/" class="posts-link">Posts</router-link>
      <router-link tag="a" to="" class="login-link">Login</router-link>
    </nav>
    <div class="circle n1"></div>
    <div class="circle n2"></div>
    <div class="circle n3"></div>
    <div class="circle n4"></div>
    <div class="circle n5"></div>
    <div class="circle n6"></div>
    <div class="circle big"></div>
  </header>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(340.03deg, #8ddad5 8.42%, #00cdac 91.45%);
  height: 580px;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 90%, 0 100%, 0% 50%);
  position: relative;
  overflow: hidden;
  nav {
    padding-top: 30px;
    display: flex;
    align-items: center;

    *::selection {
      background: none;
    }

    .posts-link,
    .login-link {
      font-size: 14px;
      font-weight: 500;
    }

    .posts-link {
      margin-left: 50px;
      color: #fff;
    }

    .login-link {
      margin-left: auto;
      width: 99px;
      height: 43px;
      display: grid;
      place-content: center;
      background: #fff;
      color: #5e72e4;
      border-radius: 4px;
      box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11),
        0px 1px 3px rgba(0, 0, 0, 0.08);
    }
  }

  .circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(#fff, 10%);
    position: absolute;

    &.n1 {
      top: 0;
      left: -4.03%;
    }

    &.n2 {
      top: 46.42%;
      left: -0.42%;
    }

    &.n3 {
      top: 7.03%;
      left: 55.69%;
    }

    &.n4 {
      top: 4.61%;
      left: 83.47%;
    }

    &.n5 {
      top: 37.61%;
      left: 86.11%;
    }

    &.n6 {
      top: 35.5%;
      left: 82.5%;
    }

    &.big {
      width: 200px;
      height: 200px;
      left: 10.76%;
      top: 25.5%;
    }
  }
}

@media (max-width: 900px) {
  nav {
    .posts-link {
      margin-left: 15px !important;
    }
  }
}

@media (max-width: 450px) {
  nav {
    .posts-link {
      display: none;
    }
  }
}
</style>
