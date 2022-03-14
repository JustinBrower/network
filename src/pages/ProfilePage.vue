<template>
  <div class="container-fluid bg-primary">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <Create v-if="account.id == $route.params.creatorId" />
      </div>
    </div>
    <div
      class="row p-3 d-flex justify-content-center"
      v-for="p in posts"
      :key="p.id"
    >
      <Post :post="p" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      if (route.name == "Profile") {
        try {
          logger.log("route.params is...", route.params.creatorId);
          await postsService.getPostsById(route.params.creatorId);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      }
    });
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>