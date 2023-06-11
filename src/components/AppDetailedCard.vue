<script>
import store from '../store';
export default {
    props: {
        cardImg: {
            type: String,
            required: true,
        },
        cardTitle: {
            type: String,
            required: true,
        },
        cardOverview: {
            type: String,
            required: true,
        },
        cardCast: {
            type: Array,
            required: true,
        },
        maxRank: {
            type: Number,
            required: true,
        },
        cardLang: {
            type: String,
            required: true,
        },
        cardOriginalTitle: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            store,
        }
    },

    methods: {
        resetCurrentCard() {
            this.store.currentCard = undefined;
            console.log('current id from x:', this.store.currentCard)
        }
    }
}

</script>

<template>
    <div class="detailed-card">
        <div class="img-wrapper">
            <img :src="cardImg" alt="">
        </div>
        <div class="text-wrapper">
            <div class="Btitle">
                <h1>{{ cardTitle }}</h1>
                <div class="language">
                    <img :src="cardLang" alt="">
                </div>
            </div>
            <div class="original-title">
                <span class="text-title">Titolo originale:</span>
                <h3> {{ cardOriginalTitle }}</h3>
            </div>
            <p class="description">
                <span class="text-title">Trama:</span> {{ cardOverview }}
            </p>
            <div class="description">
                <span class="text-title">Cast:</span>
                <ul class="cast-wrapper">
                    <li v-for="member in cardCast">
                        {{ member.name }}
                    </li>
                </ul>
            </div>
            <div class="description">
                <span class="text-title">Valutazione:</span>
                <div class="ranking">
                    <font-awesome-icon icon="fa-solid fa-star" :class="['rank-icon', n <= maxRank ? 'full' : '']"
                        v-for="n in 5" />
                </div>
            </div>
        </div>
        <div class="btn-esc" @click="resetCurrentCard()">Chiudi</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables' as *;

.detailed-card {
    background-color: $main-white;
    color: $primary-color;
    box-shadow: 10px 5px 20px $primary-color;
    position: relative;


    .img-wrapper {
        width: 98.5%;
        border-radius: 20px;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .Btitle {
        display: flex;
        align-items: center;
        padding-bottom: 20px;

        .language img {
            margin-left: 20px;
            width: 30px;
            border-radius: 50%;
            aspect-ratio: 1/1;
            object-fit: cover;
            object-position: center;
        }
    }

    .original-title {
        display: flex;
        align-items: center;
        padding-bottom: 10px;

        span {
            margin-right: 5px;
        }
    }

    .text-wrapper {
        padding: 20px;
        width: 189%;
        overflow: auto;

        .description {
            display: flex;
            margin-bottom: 20px;
        }

    }

    .btn-esc {
        position: fixed;
        right: 10px;
        padding: 5px;
        padding-left: 30%;
        font-size: 1rem;
        font-weight: 700;
        color: $main-white;
        cursor: pointer;
        background-color: $main-red;
        bottom: 0;
        width: 64.6%;

    }

    .ranking {
        display: flex;
        gap: 5px;

        .rank-icon {
            color: black;
        }

        .rank-icon.full {
            color: gold;
        }

    }

}

.cast-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0 5px;

    li:not(:last-child)::after {
        content: ',';
    }
}

.text-title {
    font-weight: 700;
    color: $main-red;
    margin-right: 5px;
}
</style>