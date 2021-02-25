<template>
  <div class="post-delete-modal-container">
    <div class="post-delete-modal">
      <div class="post-delete-modal-header">
        <span>Sil</span>
        <button @click="visibilityStatus">
          <icon name="close" />
        </button>
      </div>
      <div class="warning-text">
        <span> {{ post.title }} </span> başlıklı gönderiyi
        <b>silmek istediğinize emin misiniz?</b>
      </div>
      <div class="delete-btn">
        <button @click="deletePost(post.id)">SİL</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostDeleteModal",
  data() {
    return {
      visibility: true
    };
  },
  props: {
    post: {
      required: true
    }
  },
  methods: {
    visibilityStatus() {
      this.visibility = false;
      this.$emit("visibility", this.visibility);
    },
    deletePost(id) {
      axios
        .delete(this.$store.state.baseURL + "/posts/12" + id)
        .then(res => {
          if (res.status == 200) {
            this.$store.state.posts.forEach((post, index) => {
              if (post.id == id) {
                this.$store.state.posts.splice(index, 1);
                this.visibilityStatus();
              }
            });
          } else {
            this.$emit(
              "errorModal",
              "Gönderiyi silerken bir hata oluştu, lütfen tekrar deneyin!"
            );
          }
        })
        .catch(() => {
          console.clear();
          this.$emit(
            "errorModal",
            "Gönderiyi silerken bir hata oluştu, lütfen tekrar deneyin!"
          );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-delete-modal-container {
  width: 100%;
  height: 100vh;
  background: rgba(black, 0.2);
  position: fixed;
  top: 0;
  left: 0;

  .post-delete-modal {
    width: 500px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    &-header {
      height: 60px;
      border-bottom: 1px solid #e9ecef;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: #32325d;
        font-size: 16px;
      }
    }
    .warning-text {
      padding: 24px;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.43;
      span {
        color: #525f7f;
      }
    }
    .delete-btn {
      padding: 25px;
      border-top: 1px solid #e9ecef;
      button {
        width: 120px;
        height: 45px;
        background: #e15939;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08),
          0 4px 6px rgba(50, 50, 93, 0.11);
        border-radius: 4px;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
        letter-spacing: 0.8px;
      }
    }
  }
}

@media (max-width: 600px) {
  .post-delete-modal-container .post-delete-modal {
    width: calc(100% - 50px);
  }
}
</style>
