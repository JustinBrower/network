<template>
  <div class="container-fluid p-0 profile-height">
    <div class="d-flex justify-content-start mt-1">
      <div class="d-flex justify-content-start">
        <img class="profile-pic" :src="profile.picture" alt="Profile_Picture" />
      </div>
      <p class="ps-2">| {{ profile.name }}</p>
      <p class="ps-2">| {{ profile.email }}</p>
    </div>
    <div>{{ profile.bio }}</div>
    <div class="row pt-2">
      <div v-if="profile.github != ''" class="col-4 text-center">
        <div class="hover mdi mdi-cat bg-info p-1">
          <a :href="profile.github"></a>
        </div>
      </div>
      <div v-if="profile.linkedin != ''" class="col-4 text-center">
        <div class="hover mdi mdi-handshake bg-info p-1">
          <a :href="profile.linkedin"></a>
        </div>
      </div>
      <div class="col-4 text-center">
        <!-- A tags don't work, they have 0 width and I don't know how to fix it -->
        <a :href="profile.resume">
          <div
            v-if="profile.resume != ''"
            class="hover mdi mdi-file-account bg-info p-1"
          ></div>
        </a>
      </div>
    </div>
    <div class="row">
      <div
        v-if="profile.graduated"
        class="col-6 mdi mdi-48px mdi-school d-flex justify-content-start"
      ></div>
      <div class="col-6 text-center">Class of: {{ profile.class }}</div>
    </div>
  </div>
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
      profile: computed(() => AppState.profile),
    };
  },
};
</script>


<style lang="scss" scoped>
// .profile-height {
//   height: 15vh;
// }

.hover {
  cursor: pointer;
}

.a-tag {
  height: 20px;
  width: 20px;
}

.profile-pic {
  width: 100px;
  height: 100px;
}
</style>