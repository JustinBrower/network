<template>
  <div
    v-if="post.imgUrl != null"
    class="col-12 post-size bg-grey d-flex justify-content-center"
  >
    <img class="img-fluid image-post" :src="post.imgUrl" alt="broke :(" />
  </div>
  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <div class="post-size bg-light d-flex justify-content-start p-2">
        <div
          v-if="account.id == post.creatorId"
          @click="deletePost"
          class="mdi mdi-trash-can"
        ></div>
        <router-link
          :to="{ name: 'Profile', params: { creatorId: post.creatorId } }"
        >
          <div class="col-4 d-flex justify-content-start">
            <img
              class="profile-pic"
              :src="post.creator.picture"
              alt="profile_picture"
            />
            <p class="p-2">{{ post.creator.name }}</p>
          </div>
        </router-link>
        <div
          class="d-flex col-8 bg-info align-items-center justify-content-center"
        >
          <p>{{ post.body }}</p>
          <div
            @click="setLike"
            class="
              p-1
              likes-size
              d-flex
              justify-content-end
              align-items-end
              hoverable
            "
          >
            <p class="mdi mdi-heart">
              {{ post.likes.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { computed } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { watchEffect } from "@vue/runtime-core";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    watchEffect(() => {
      props.post.likes;
    });
    return {
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id);
        } catch (error) {
          Pop.toast(error.message, error);
        }
      },
      async setLike() {
        try {
          await postsService.setLike(props.post.id);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-pic {
  width: 100px;
  height: 100px;
}
.post-size {
  height: 25vh;
  width: 100vh;
}
.image-post {
  width: auto;
  height: 100%;
}
.likes-size {
  width: 3rem;
  height: auto;
}
</style>