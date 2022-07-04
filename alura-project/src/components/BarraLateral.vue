<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="imagem logo do projeto" />
    </h1>
    <button class="button" @click="alterarEstilizacao">
      {{ textoButao }}
    </button>
  </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: [
      'alterarEstilizacao'
    ],
    data () {
      return {
        modoEscuroAtivo: false
      }
    },
    methods: {
      alterarEstilizacao () {
        this.modoEscuroAtivo = !this.modoEscuroAtivo;
        this.$emit('alterarEstilizacao', this.modoEscuroAtivo);
      }
    },
    computed: {
      textoButao() {
        if (this.modoEscuroAtivo) {
          return "Desativar o Modo Escuro";
        } else {
          return "Ativar o Modo Escuro";
        }
      }
    }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>