<template>
  <div class="error-page">
    <h1>
      <span>5</span>
      <span>0</span>
      <span>0</span>
    </h1>
    <button @click="getData">Tekrar Dene</button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    getData() {
      this.$store.dispatch("fetchPosts");
      this.$store.dispatch("fetchUsers");
    }
  }
};
</script>

<style lang="scss" scoped>
.error-page {
  height: 390px;
  display: grid;
  place-content: center;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 400px;
    opacity: 0.7;
    animation: textShadow 5s ease infinite;
  }

  button {
    margin: 0 auto;
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 3px;
    background: #42d3bf;
    z-index: 5;
  }
}

@keyframes textShadow {
  0%,
  100% {
    text-shadow: 5px 5px 0px rgba(0, 0, 0, 0.5),
      10px 10px 0px rgba(0, 0, 0, 0.3), 15px 15px 0px rgba(0, 0, 0, 0.2),
      20px 20px 0px rgba(0, 0, 0, 0.1);
  }
  25% {
    text-shadow: 5px -5px 0px rgba(0, 0, 0, 0.5),
      10px -10px 0px rgba(0, 0, 0, 0.3), 15px -15px 0px rgba(0, 0, 0, 0.2),
      20px -20px 0px rgba(0, 0, 0, 0.1);
  }
  50% {
    text-shadow: -5px -5px 0px rgba(0, 0, 0, 0.5),
      -10px -10px 0px rgba(0, 0, 0, 0.3), -15px -15px 0px rgba(0, 0, 0, 0.2),
      -20px -20px 0px rgba(0, 0, 0, 0.1);
  }
  75% {
    text-shadow: -5px 5px 0px rgba(0, 0, 0, 0.5),
      -10px 10px 0px rgba(0, 0, 0, 0.3), -15px 15px 0px rgba(0, 0, 0, 0.2),
      -20px 20px 0px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 860px) {
  .error-page h1 {
    font-size: 300px;
  }
}
@media (max-width: 650px) {
  .error-page h1 {
    font-size: 250px;
  }
}
@media (max-width: 550px) {
  .error-page {
    button {
      margin-top: 200px;
    }
    h1 {
      font-size: 150px;
      top: 45%;
    }
  }
}
@media (max-width: 350px) {
  .error-page h1 {
    font-size: 100px;
  }
}
</style>
