import {reactive} from 'vue';

export const store = reactive({
    cardsListLoad:[],
    
    cardsList:[],

    APIlink: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',

    APIname: '&fname=',

    APIsearch:'',
});