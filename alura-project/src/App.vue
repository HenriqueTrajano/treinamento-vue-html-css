<template>
  <!-- :class="{'modo-escuro': modoEscuroAtivo}"-->
  <main
    class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo}" 
  >
    <div class="column is-one-quarter">
      <BarraLateral @alterarEstilizacao="trocarEstilizacao" />
    </div>
    <div class="column in-three-quarter conteudo">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import ITarefa from "./interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  methods: {
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
