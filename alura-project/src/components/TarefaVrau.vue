<template>
  <BoxAmarela>
    <div class="columns">
      <div class="column is -7">
        {{ tarefa.descricao || "Tarefa sem descricao" }}
      </div>
      <div class="column">
        <CronometroComplet :tempoSegundos="tarefa.duracaoSegundos" />
      </div>
    </div>
  </BoxAmarela>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import BoxAmarela from "./BoxAmarela.vue";
import CronometroComplet from "./CronometroComplet.vue";

export default defineComponent({
  name: "TarefaVrau",
  components: { CronometroComplet, BoxAmarela },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      require: true,
    },
  },
});
</script>


<style scoped>

</style>