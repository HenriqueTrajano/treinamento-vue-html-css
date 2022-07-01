<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column in-three-quarter">
      <FormularioInit />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from '@/components/BarraLateral.vue';
import FormularioInit from '@/components/FormularioInit.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioInit
  }
});
</script>

<style>

</style>
