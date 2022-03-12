<template>
  <div class="post-size bg-light justify-content-center">
    <router-link
      :to="{ name: 'Profile', params: { creatorId: post.creatorId } }"
    >
      <div class="col-4">
        <img
          class="profile-pic pe-2"
          :src="post.creator.picture"
          alt="profile_picture"
        />
        <p>{{ post.creator.name }}</p>
      </div>
    </router-link>

    <div class="d-flex col-8 align-items-top justify-content-center">
      <img class="img-fluid" :src="post.imgUrl" alt="" />
      <div
        v-if="account.id == post.creatorId"
        @click="deletePost"
        class="mdi mdi-trash-can"
      ></div>
      <p>{{ post.body }}</p>
      <div class="d-flex justify-content-end pe-4">
        <p class="mdi mdi-heart pe-1"></p>
        <p>{{ post.likes.length }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id);
        } catch (error) {
          Pop.toast(error.message, error);
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
  height: auto;
}
.post-size {
  height: 25vh;
  width: 100vh;
}
.image-post {
  width: auto;
  height: auto;
}
</style>