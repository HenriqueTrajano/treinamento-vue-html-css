<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <!-- @submit.prevent ==> Ja manda aquela evitada no comportamento padrao que eh carregar a pag -->
        <form @submit.prevent="salvarProjeto">
            <div class="field">
                <label for="nome-projeto" class="label">
                    NOME DO PROJETO
                </label>
                <input type="text" class="input" v-model="nomeProjeto" id="nome-projeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: 'FormularioMain',
    data () {
        return {
           nomeProjeto: ''
        }
    },
    methods: {
        salvarProjeto() {
            this.store.commit('ADICIONA_PROJETO', this.nomeProjeto);
            this.nomeProjeto = '';
            this.$router.push('/projetos');
        }
    }, 
    setup () {
        const store = useStore();
        return {
            store
        }
    }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>