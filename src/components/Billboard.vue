<template>
  <div>
    <img :src="billboard.tall" alt="billboard" />
    <p>{{ billboard.title }}</p>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  props: {
    billboard: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      billboards: computed(() => AppState.billboards),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>