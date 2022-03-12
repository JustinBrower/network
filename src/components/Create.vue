<template>
  <form @submit.prevent="createPost" class="bg-light p-3 mt-3">
    <div>
      <label for="Text" class="form-label">Text Here...</label>
      <input
        v-model="state.created.body"
        type="text"
        required
        class="form-control"
      />
    </div>

    <div>
      <label for="Img" class="form-label">URL Here...</label>
      <input v-model="state.created.imgUrl" type="text" class="form-control" />
    </div>
    <button class="btn btn-info mt-2">Create</button>
  </form>
</template>


<script>
import { reactive } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    const state = reactive({
      created: {},
    });
    return {
      state,
      async createPost() {
        try {
          logger.log(state.created);
          await postsService.createPost(state.created);
        } catch (error) {
          logger.log(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>