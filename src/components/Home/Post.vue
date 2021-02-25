<template>
  <div class="post" v-if="post">
    <transition name="fade">
      <div class="error-modal" v-if="errorModal != null">
        {{ errorModal }}
      </div>
    </transition>
    <transition name="fade">
      <div class="success-modal" v-if="successModal != null">
        {{ successModal }}
      </div>
    </transition>

    <div class="post-detail">
      <span class="post-detail-id">{{ post.id }}</span>
      <h3 class="post-detail-title">
        {{ post.title }}
      </h3>
    </div>
    <div class="post-actions">
      <router-link tag="a" :to="'/post/' + post.id" class="detail-btn">
        DETAY
      </router-link>
      <button class="edit-btn" @click="postEditModal = true">DÜZENLE</button>
      <button class="delete-btn" @click="postDeleteModal = true">SİL</button>
    </div>
    <PostEditModal
      :post="post"
      v-if="postEditModal"
      @visibility="postEditModal = $event"
      @successModal="successModal = $event"
      @errorModal="errorModal = $event"
    />
    <PostDeleteModal
      :post="post"
      v-if="postDeleteModal"
      @visibility="postDeleteModal = $event"
      @errorModal="errorModal = $event"
    />
  </div>
</template>

<script>
import PostEditModal from "@/components/Home/PostEditModal.vue";
import PostDeleteModal from "@/components/Home/PostDeleteModal.vue";
export default {
  name: "Post",
  data() {
    return {
      postEditModal: false,
      postDeleteModal: false,
      successModal: null,
      errorModal: null
    };
  },
  components: { PostEditModal, PostDeleteModal },
  props: {
    post: {
      required: true
    }
  },
  watch: {
    postEditModal() {
      if (this.postEditModal) {
        document.addEventListener("keydown", e => {
          if (e.keyCode == 27) {
            this.postEditModal = false;
          }
        });
      }
    },
    postDeleteModal() {
      if (this.postDeleteModal) {
        document.addEventListener("keydown", e => {
          if (e.keyCode == 27) {
            this.postDeleteModal = false;
          }
        });
      }
    },
    successModal() {
      setTimeout(() => {
        this.successModal = null;
      }, 5000);
    },
    errorModal() {
      setTimeout(() => {
        this.errorModal = null;
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0;
  font-size: 14px;

  &:first-child {
    padding-top: 10px;
  }

  &:last-child {
    padding-bottom: 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(#000, 10%);
  }

  &-detail {
    flex: 3;
    line-height: 20px;
    &-id {
      font-weight: bold;
    }
    &-title {
      display: inline-block;
      margin-left: 10px;
      font-weight: 300;
    }
  }

  &-actions {
    flex: 1;
    display: flex;
    justify-content: space-between;
    button,
    a {
      padding: 12px 21px;
      font-weight: 700;
      color: white;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08),
        0px 4px 4px rgba(50, 50, 93, 0.11);
      border-radius: 3px;
    }
    .detail-btn {
      background: #5e72e4;
    }
    .edit-btn {
      background: #2dce89;
    }
    .delete-btn {
      background: #fb6340;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  top: 10px;
  transition: 500ms;
}
.fade-enter,
.fade-leave-to {
  top: -50px;
}

@media (max-width: 1250px) {
  .post {
    flex-direction: column;
    &-detail-id {
      display: block;
      text-align: center;
    }
    &-actions {
      margin-top: 25px;
      button,
      a {
        margin: 0 15px;
      }
    }
  }
}

@media (max-width: 650px) {
  .post {
    &-actions {
      width: 100%;
      margin-top: 25px;
      flex-direction: column;
      button,
      a {
        text-align: center;
        padding: 12px 0;
        width: 100%;
        margin: 5px 0;
      }
    }
  }
}
</style>
