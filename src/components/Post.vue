<template>
  <div class="post-size bg-light justify-content-center">
    <img
      class="profile-pic pe-2"
      :src="post.creator.picture"
      alt="profile_picture"
    />
    <p @click="GoTo('Profile')">{{ post.creator.name }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
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
      setActive() {
        postsService.setActive(props.post);
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-pic {
  width: 100px;
  height: auto;
}
.post-size {
  height: 25vh;
  width: 100vh;
}
</style>