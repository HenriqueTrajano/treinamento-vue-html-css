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
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome do Projeto
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>
                        {{projeto.id}}
                    </td>
                    <td>
                        {{projeto.nome}}
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import IProjeto from "@/interfaces/IProjeto";
import { useStore } from "@/store";

export default defineComponent({
    name: 'ProjetosView',
    data () {
        return {
           nomeProjeto: ''
        }
    },
    methods: {
        salvarProjeto() {
            this.store.commit('ADICIONA_PROJETO', this.nomeProjeto);
            this.nomeProjeto = '';
        }
    }, 
    setup () {
        const store = useStore();
        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>