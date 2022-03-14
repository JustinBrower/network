<template>
  <div class="container-fluid bg-primary">
    <div class="row justify-content-center">
      <div class="col-3 bg-light">
        <ProfileUser />
      </div>
      <div class="col-6">
        <Create />
      </div>
      <div class="col-3">
        <div class="row" v-for="b in billboards" :key="b.index"></div>
        <Billboard :billboard="b" />
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
import { logger } from "../utils/Logger";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await postsService.getAllPosts();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      posts: computed(() => AppState.posts),
      billboards: computed(() => AppState.billboards),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
