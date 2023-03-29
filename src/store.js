import {reactive} from 'vue';

export const store = reactive({
    cardsList:[],

    APIlinkFifty: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',

    APIlink: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',

    APIname: '?name=',

    APIsearch:'',
});