<template>
  <!-- :class="{'modo-escuro': modoEscuroAtivo}"-->
  <main
    class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo}" 
  >
    <div class="column is-one-quarter">
      <BarraLateral @alterarEstilizacao="trocarEstilizacao" />
    </div>
    <div class="column in-three-quarter conteudo">
      <FormularioInit @salvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaVrau
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <BoxAmarela v-if="listaVazia">
          Amigo hoje vc ta no crime em...
        </BoxAmarela>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import FormularioInit from "@/components/FormularioInit.vue";
import TarefaVrau from "@/components/TarefaVrau.vue";
import ITarefa from "./interfaces/ITarefa";
import BoxAmarela from "./components/BoxAmarela.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioInit,
    TarefaVrau,
    BoxAmarela,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
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
    trocarEstilizacao(modoEscuroStatus: boolean) {
      this.modoEscuroAtivo = modoEscuroStatus;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
