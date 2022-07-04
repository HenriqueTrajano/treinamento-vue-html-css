<template>
  <button class="button" @click="clicadozada" :disabled="desabilitado">
    <span class="icon">
      <i :class="`fas fa-${iconeButaoNome}`"></i>
    </span>
    <span>{{ textoButao }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoFormazada",
  props: {
    iconeButaoNome: {
      type: String,
      default: 'circle-question',
    },
    textoButao: {
        type: String,
        default: 'Nao sei',
    },
    desabilitado: {
        type: Boolean,
        default: false,
    }
  },
  emits: [
    'butaoClicado'
  ],
  methods: {
    clicadozada () : void {
        this.$emit("butaoClicado");
    }
  }
});
</script>
