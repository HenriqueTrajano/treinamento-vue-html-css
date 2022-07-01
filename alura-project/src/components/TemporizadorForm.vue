<template>
    <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <CronometroComplet :tempoSegundos="tempoSegundos" />
        <button class="button" @click="iniciarCrono">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
          <span>play</span>
        </button>
        <button class="button" @click="finalizarCrono">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
          <span>stop</span>
        </button>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroComplet from "./CronometroComplet.vue";

export default defineComponent({
    name: 'TemporizadorForm',
    components: {
    CronometroComplet
  },
  data () {
    return {
      tempoSegundos: 0,
      idCronometro: 0
    }
  },
  methods: {
    iniciarCrono () {
      this.idCronometro = setInterval(() => {
        this.tempoSegundos +=1;
      }, 1000);
      console.log("start");
      
    },
    finalizarCrono () {
      clearInterval(this.idCronometro);
    }
  }
})
</script>
