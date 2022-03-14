<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

    <div class="row text-center p-3">
      <form @submit.prevent="editAccount">
        <label class="p-1" for="bio">Bio </label>
        <input type="text" name="bio" />
        <label class="p-1" for="email">Email</label>
        <input type="text" name="email" />
        <label class="p-1" for="image">Image</label>
        <input type="text" name="image" />
        <div class="p-2 text-center">
          <button class="btn btn-info">Edit Profile</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account),
      async editAccount() {
        await profileService.editAccount();
      },
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}

.hover {
  cursor: pointer;
}
</style>
