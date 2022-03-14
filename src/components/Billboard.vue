<template>
  <!-- /No idea why this doesn't show up -->
  <div>
    <img :src="billboards.banner" alt="billboard" />
  </div>
</template>



<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
export default {
  props: {
    billboards: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    logger.log(props.billboards.banner);
    return {
      billboards: computed(() => AppState.billboards),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>