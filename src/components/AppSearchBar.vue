<script>
import store from '../store';

export default {
    data() {
        return {
            store,
            currentQuery: '',
        }
    },

    methods: {
        setQuery() {
            if (this.currentQuery.trim() !== '') {
                this.store.filmQuery = this.currentQuery;
                console.log('query set:', this.store.filmQuery);
                this.currentQuery = '';
            } else {
                this.currentQuery = '';
                alert('Inserisci una richiesta valida')
            }
        }
    },
}

</script>

<template>
    <div class="searchbar">
        <input type="text" placeholder="Ricerca..." v-model="currentQuery" @keyup.enter="setQuery()">
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables' as *;

.searchbar {

    input {
        padding: 10px;
        background-color: white;
        border-radius: 7px;
        width: 300px;
        margin: 20px;
    }

}
</style>