<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulario bonitao">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa voce deseja iniciar?"
          v-model="descricaozada"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TemporizadorForm @temporizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TemporizadorForm from "./TemporizadorForm.vue";
import { useStore } from 'vuex';

// pode ou colocar o index no final
import { key } from '@/store/index';

export default defineComponent({
  components: { TemporizadorForm },
  name: "FormularioInit",
  emits: [
    'salvarTarefa'
  ],
  data () {
    return {
      descricaozada: '',
      idProjeto: '' 
    }
  },
  methods: {
    // Objeto literal passado seria uma tarefa
    finalizarTarefa(tempo: number): void {
      this.$emit("salvarTarefa", {
        duracaoSegundos: tempo,
        descricao: this.descricaozada,
        projeto: this.projetos.find(proj => proj.id === this.idProjeto)
      });
      this.descricaozada = '';
    }
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos)
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

