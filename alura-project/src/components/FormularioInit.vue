<template>
  <div class="box">
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
  data () {
    return {
      descricaozada: '',
    }
  },
  methods: {
    finalizarTarefa(tempo: number): void {
      console.log(tempo);
      console.log(this.descricaozada);
      this.descricaozada = '';
    }
  }
});
</script>

