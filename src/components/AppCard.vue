<script>
import axios from 'axios';
import store from '../store';

export default {
    props: {
        cardImg: {
            type: String,
            required: true,
        },
        filmType: {
            type: String,
            required: true,
        },
        currentCard: {
            type: Object,
            required: true,
        },

    },

    data() {
        return {
            store,
        }
    },

    methods: {
        setCurrentCard(currentCard) {
            this.store.currentCard = currentCard;
            this.fetchCast();
        },

        fetchCast() {
            const mainUrl = 'https://api.themoviedb.org/3';
            let sectionUrl = ''
            if (this.store.currentCard.title !== undefined) {
                sectionUrl = '/movie'
            } else {
                sectionUrl = '/tv'
            }
            const filmId = `/${this.store.currentCard.id}`;
            const CREDITS_CONST = '/credits'
            const apiKey = 'e3cd6481a03529ab44050936077ae72e';

            axios.get(`${mainUrl}${sectionUrl}${filmId}${CREDITS_CONST}`, {
                params: {
                    api_key: apiKey,
                }
            })
                .then((res) => {
                    this.store.currentCast = res.data.cast;
                })
        },
    }
}

</script>

<template>
    <div class="card" @click="setCurrentCard(currentCard)">
        <div class="img-wrapper">
            <img :src="cardImg" alt="" class="poster">
        </div>
        <div class="text-wrapper">
            <h1>Informazioni</h1>
            <h5>Clicca qui</h5>
        </div>
        <h3 class="film-type"> {{ filmType }} </h3>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables' as *;

.card {
    position: relative;
    cursor: pointer;

    * {
        margin-bottom: 5px;
    }

    &:hover .img-wrapper img {
        filter: opacity(0.25) brightness(0.5) saturate(50%);

    }

    &:hover .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
        color: white;
    }

    .img-wrapper {

        .poster {
            width: 100%;
            aspect-ratio: 3/4;
            object-fit: cover;
            object-position: center;
        }
    }

    .text-wrapper {
        position: absolute;
        width: 75%;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .film-type {
        background-color: $main-red;
        color: $main-white;
        font-size: 0.75rem;
        text-transform: uppercase;
        min-width: 100px;
        padding: 10px;
        text-align: center;
        position: absolute;
        bottom: 20px;
        left: 0px;
    }
}
</style>