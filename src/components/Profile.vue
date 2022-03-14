<template>
  <div>profile.name</div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { onMounted } from "@vue/runtime-core";
import { profileService } from "../services/ProfileService";
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