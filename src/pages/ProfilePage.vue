<template>
  <div class="container-fluid bg-primary">
    <div class="row justify-content-center">
      <div class="col-3 bg-light">
        <Profile />
      </div>
      <div class="col-6">
        <Create v-if="account.id == $route.params.creatorId" />
      </div>
      <div class="col-3 text center"></div>
    </div>
    <div class="row p-3 justify-content-center" v-for="p in posts" :key="p.id">
      <Post :post="p" />
    </div>
  </div>

  <div>
    <button
      :disabled="!newer"
      @click="changePage(newer)"
      class="btn btn-outline-danger me-2"
    >
      Previous
    </button>
    <button
      :disabled="!older"
      @click="changePage(older)"
      class="btn btn-outline-danger"
    >
      Next
    </button>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import { profileService } from "../services/ProfileService";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      if (route.name == "Profile") {
        try {
          await postsService.getPostsById(route.params.id);
          await profileService.getProfileById(route.params.id);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      }
    });
    return {
      async changePage(page) {
        try {
          await postsService.changePage(page);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      newer: computed(() => AppState.newerPage),
      older: computed(() => AppState.olderPage),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-pic {
  width: 100px;
  height: 100px;
}
</style>