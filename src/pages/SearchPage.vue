<template>
  <div class="container-fluid bg-primary">
    <div>
      <Search />
    </div>
    <div class="row p-3 justify-content-center" v-for="p in posts" :key="p.id">
      <Post :post="p" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      posts: computed(() => AppState.posts),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>