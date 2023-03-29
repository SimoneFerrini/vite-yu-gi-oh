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

    <span> Le carte visualizzate sono: {{ store.cardsList.length }}</span>

</template> 

<style lang="scss" scoped>
 
</style>