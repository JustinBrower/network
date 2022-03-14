<template>
  <header>
    <Navbar />
  </header>
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
export default {
  name: "App",
  setup() {
    onMounted(async () => {
      try {
        await billboardsService.getBillboards();
      } catch (error) {}
    });
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
