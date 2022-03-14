<template>
  <div class="d-flex justify-content-center p-1">
    <img :src="account.picture" alt="Profile_Picture" />
  </div>
  <div>{{ account.bio }}</div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>