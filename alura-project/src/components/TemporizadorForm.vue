<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroComplet :tempoSegundos="tempoSegundos" />

    <BotaoFormazada @butaoClicado="iniciarCrono" iconeButaoNome="play" textoButao="play" :desabilitado="cronometroRodando"/>
    <BotaoFormazada @butaoClicado="finalizarCrono" iconeButaoNome="stop" textoButao="stop" :desabilitado="!cronometroRodando"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BotaoFormazada from "./BotaoFormazada.vue";
import CronometroComplet from "./CronometroComplet.vue";

export default defineComponent({
  name: "TemporizadorForm",
  emits: [
    'temporizadorFinalizado'
  ],
  components: {
    CronometroComplet,
    BotaoFormazada,
  },
  data() {
    return {
      tempoSegundos: 0,
      idCronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciarCrono() {
      this.cronometroRodando = true;
      this.idCronometro = setInterval(() => {
        this.tempoSegundos += 1;
      }, 1000);
    },
    finalizarCrono() {
      this.cronometroRodando = false;
      clearInterval(this.idCronometro);
      this.$emit('temporizadorFinalizado', this.tempoSegundos);
      this.tempoSegundos = 0;
    },
  },
});
</script>
