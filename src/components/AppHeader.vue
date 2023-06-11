<script>
import store from '../store';
import AppSearchBar from './AppSearchBar.vue';
export default {
    components: {
        AppSearchBar,
    },

    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <h1>BOOLFLIX</h1>
                <AppSearchBar />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables' as *;

.header {
    width: 100%;
    background-color: $primary-color;
    color: $main-white;
    position: fixed;
    top: 0;
    z-index: 10000000;
}

.container {


    .row {
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
    }
}

h1 {
    width: 75px;
    margin-right: auto;
    color: $main-red;
}
</style>