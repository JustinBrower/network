<template>
  <header>
    <Navbar />
  </header>
  <div class="row">
    <div class="col-6" v-for="b in billboards" :key="b.banner">
      <Billboard :billboards="b" />
    </div>
  </div>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">THE NETWORK</div>
  </footer>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import { billboardsService } from "./services/BillboardsService";
import Pop from "./utils/Pop";
export default {
  name: "App",
  setup() {
    onMounted(async () => {
      try {
        await billboardsService.getBillboards();
      } catch (error) {
        Pop.toast(error.message, "error");
      }
    });
    return {
      billboards: computed(() => AppState.billboards),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
