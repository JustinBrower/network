<template>
  <div>
    <img :src="post.creator.picture" alt="Profile_Picture" />
  </div>
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
  setup(props) {
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>