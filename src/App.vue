<template>
  <div id="app">
    <Header />
    <Container>
      <ErrorPage v-if="!this.$store.state.pageLoaded" />
      <div v-else>
        <router-view
          v-if="
            this.$store.state.posts != null && this.$store.state.users != null
          "
        />
        <div v-else class="loader-container">
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Container from "@/components/Shared/Container";
import ErrorPage from "@/views/ErrorPage";
export default {
  name: "App",
  components: { Header, Footer, Container, ErrorPage },
  created() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,300&display=swap");
// RESET
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

body {
  background: #f2f2f2;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

// Loader
.loader-container {
  height: 390px;
  display: grid;
  place-content: center;
  .loader {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100px;

    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #34d2bb;
      animation: bounce 0.5s ease infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.1s;
      }
      &:last-child {
        animation-delay: 0.2s;
      }
    }
  }
}
@keyframes bounce {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-50px);
    opacity: 0.4;
  }
}

// Abstracts
.wrapper {
  max-width: 1300px;
  margin: 0 auto;
}

@media (max-width: 1350px) {
  .wrapper {
    padding: 0 30px;
    max-width: 100%;
  }
}

.success-modal,
.error-modal {
  position: fixed;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);
  z-index: 99;
  padding: 10px 60px;
  font-size: 14px;
  border-radius: 3px;
}
.error-modal {
  background: #f8d7da;
  color: #721c24;
}
.success-modal {
  background: #d4edda;
  color: #155724;
}
</style>
