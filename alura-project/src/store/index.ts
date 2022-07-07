import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface IEstado {
    projetos: IProjeto[];
}

export const key: InjectionKey<Store<IEstado>> = Symbol();


export const store = createStore<IEstado>({
    state: {
        projetos: []
    }, mutations: {
        'ADICIONA_PROJETO'(state, nomeProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as IProjeto;
            state.projetos.push(projeto);
        }
    }
});