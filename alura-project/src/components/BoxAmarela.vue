<template>
  <div class="box has-text-weight-bold" :style="estilozadas">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxAmarela",
  data() {
    return {
      estilozadas: {
        background: 'rgb(255 185 43)',
      },
    };
  },
});
</script>


<!-- <style scoped>
.box {
  background: #faf0ca;
}
</style> -->