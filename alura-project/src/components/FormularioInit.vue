<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario bonitao">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa voce deseja iniciar?"
          v-model="descricaozada"
        />
      </div>
      <div class="column">
        <TemporizadorForm @temporizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorForm from "./TemporizadorForm.vue";

export default defineComponent({
  components: { TemporizadorForm },
  name: "FormularioInit",
  emits: [
    'salvarTarefa'
  ],
  data () {
    return {
      descricaozada: '',
    }
  },
  methods: {
    // Objeto literal passado seria uma tarefa
    finalizarTarefa(tempo: number): void {
      this.$emit("salvarTarefa", {
        duracaoSegundos: tempo,
        descricao: this.descricaozada
      });
      this.descricaozada = '';
    }
  }
});
</script>

<style>
  .formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
  }
</style>

