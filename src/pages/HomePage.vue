<template>
  <div class="container-fluid bg-primary">
    <div class="row justify-content-center">
      <div class="col-3 bg-light">
        <div class="row">
          <div class="col-12">
            <Profile />
          </div>
        </div>
      </div>
      <div class="col-6">
        <Create />
      </div>
      <div class="col-3"></div>
    </div>
    <div
      class="row p-3 d-flex justify-content-center"
      v-for="p in posts"
      :key="p.id"
    >
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
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  setup() {
    // I HAVE TRIED EVERYTHING BUT I CANT GET ACCOUNT TO LOAD FAST ENOUGH
    watchEffect(() => {
      AppState.account;
      AppState.profile;
      AppState.posts;
    });
    onMounted(async () => {
      try {
        await postsService.getAllPosts();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
      AppState.profile = AppState.account;
      logger.log("Current Profile is...", AppState.profile);
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
      newer: computed(() => AppState.newerPage),
      older: computed(() => AppState.olderPage),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
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
