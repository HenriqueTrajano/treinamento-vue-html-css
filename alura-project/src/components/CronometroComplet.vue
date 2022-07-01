<template>
  <section>
    <strong>
      {{ tempoDecorrido }}
    </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CronometroComplet',
  props: {
    tempoSegundos: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido () : string {
      //Poderia usar o sbstring tbm ==> diff 2 param seria e final e nao a qtd
      return new Date(this.tempoSegundos * 1000).toISOString().substr(11,8)
    }
  },
})
</script>

