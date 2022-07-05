<template>
      <FormularioInit @salvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaVrau
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <BoxAmarela v-if="listaVazia">
          Amigo hoje vc ta no crime hoje, nao fez nada...
        </BoxAmarela>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioInit from "@/components/FormularioInit.vue";
import TarefaVrau from "@/components/TarefaVrau.vue";
import ITarefa from "@/interfaces/ITarefa";
import BoxAmarela from "@/components/BoxAmarela.vue";

export default defineComponent({
  name: "TarefasView",
  components: {
    FormularioInit,
    TarefaVrau,
    BoxAmarela,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>