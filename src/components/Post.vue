<template>
  <div class="post-size bg-light justify-content-center">
    <router-link
      :to="{ name: 'Profile', params: { creatorId: post.creatorId } }"
    >
      <img
        class="profile-pic pe-2"
        :src="post.creator.picture"
        alt="profile_picture"
      />
      <p>{{ post.creator.name }}</p>
    </router-link>
    <p>{{ post.body }}</p>
    <div class="d-flex justify-content-end pe-4">
      <p class="mdi mdi-heart pe-1"></p>
      <p>{{ post.likes.length }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {},
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