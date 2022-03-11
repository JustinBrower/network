<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="p in posts" :key="p.id" class="p-3 justify-content-center">
        <Post :post="p" />
      </div>
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
    };
  },
};
</script>


<style lang="scss" scoped>
</style>