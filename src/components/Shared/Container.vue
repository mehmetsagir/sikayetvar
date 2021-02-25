<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  z-index: 5;
  min-height: 450px;
  background: #fff;
  margin: -350px auto 150px;
  border-radius: 4px;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1),
    0px 5px 15px rgba(0, 0, 0, 0.07);
  padding: 30px;
}

@media (max-width: 1350px) {
  .wrapper {
    max-width: 90%;
  }
}
</style>
