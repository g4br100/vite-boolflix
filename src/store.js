import { reactive } from 'vue'

const store = reactive({
    onlyFilmList: [],
    onlyTvList: [],
    filmQuery: 'Batman',
    currentCard: undefined,
    currentCast: [],
})

export default store 