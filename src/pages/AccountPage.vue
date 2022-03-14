<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

    <div class="row text-center p-3">
      <form @submit.prevent="editAccount">
        <label class="p-1" for="bio">Bio </label>
        <input v-model="editable.bio" type="text" name="bio" />
        <label class="p-1" for="email">Name</label>
        <input v-model="editable.name" type="text" name="name" />
        <label class="p-1" for="image">Image</label>
        <input v-model="editable.picture" type="text" name="image" />
        <div class="p-2 text-center">
          <button class="btn btn-info">Edit Profile</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
import { accountService } from "../services/AccountService";
export default {
  name: "Account",
  setup() {
    const editable = ref({});
    watchEffect(() => {
      editable.value = AppState.account;
    });
    return {
      editable,
      account: computed(() => AppState.account),

      async editAccount() {
        try {
          await accountService.editAccount(editable.value);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
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
