<template>
  <div class="post-edit-modal-container">
    <div class="post-edit-modal">
      <div class="post-edit-modal-header">
        <span>Düzenle</span>
        <button @click="visibilityStatus">
          <icon name="close" />
        </button>
      </div>
      <form class="post-edit-modal-form">
        <div class="input-box">
          <span>Title</span>
          <input type="text" v-model="editData.title" />
        </div>
        <div class="input-box">
          <span>Body</span>
          <textarea v-model="editData.body"></textarea>
        </div>
        <div class="send-btn">
          <button @click.prevent="editPost(post.id)">GÜNCELLE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostEditModal",
  data() {
    return {
      visibility: true,
      editData: {
        title: this.post.title,
        body: this.post.body
      }
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
    editPost(id) {
      axios
        .put(this.$store.state.baseURL + "/posts/" + id, {
          title: this.editData.title,
          body: this.editData.body
        })
        .then(res => {
          if (res.status == 200) {
            this.$store.state.posts.forEach(post => {
              if (post.id == id) {
                post.title = res.data.title;
                post.body = res.data.body;
                this.$emit(
                  "successModal",
                  "Gönderi başarılı bir şekilde düzenlendi!"
                );
                this.visibilityStatus();
              }
            });
          } else {
            this.$emit(
              "errorModal",
              "Gönderiyi düzenlerken bir hata oluştu, lütfen tekrar deneyin!"
            );
          }
        })
        .catch(() => {
          console.clear();
          this.$emit(
            "errorModal",
            "Gönderiyi düzenlerken bir hata oluştu, lütfen tekrar deneyin!"
          );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-edit-modal-container {
  width: 100%;
  height: 100vh;
  background: rgba(black, 0.2);
  position: fixed;
  top: 0;
  left: 0;

  .post-edit-modal {
    width: 500px;
    height: 421px;
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
      margin-bottom: 15px;

      span {
        color: #32325d;
        font-size: 16px;
      }
    }
    &-form {
      .input-box {
        padding: 5px 24px;

        span {
          display: block;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.43;
          color: #525f7f;
          padding: 5px 0;
        }
        input,
        textarea {
          width: 100%;
          height: 45px;
          border-radius: 4px;
          border: 1px solid #cad1d7;
          outline: none;
          padding: 12px 7px 11px 13px;
          font-weight: 400;
          font-size: 14px;
          color: #8898aa;
        }

        textarea {
          resize: none;
          height: 110px;
          margin-bottom: 20px;
        }
      }
      .send-btn {
        padding: 25px;
        border-top: 1px solid #e9ecef;
        button {
          width: 120px;
          height: 45px;
          background: #11cdef;
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
}

@media (max-width: 600px) {
  .post-edit-modal-container .post-edit-modal {
    width: calc(100% - 50px);
  }
}
</style>
