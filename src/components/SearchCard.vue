<script>
import {store} from '../store';


export default {
    name:"SearchCard",
    data(){
        return{
            
            store,
        }
    },
}
</script>

<template> 
    <div class="search-bar">
        <input v-model="store.APIsearch" @keyup.enter="$emit('search')" type="text" placeholder="Enter a card name">
        <button @click="$emit('search')">Search</button>
    </div>
</template> 

<style lang="scss" scoped>
    .search-bar{
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 1em;

        width: 60%;
        margin: 0 auto;
        padding: 1em;
        border-radius: 15px;
        background-color: #333333;
        border: 1px solid orange;

        button{
            padding: 4px 8px;
            border-radius: 15px;
            border: 1px solid white;
        }
    }
</style>