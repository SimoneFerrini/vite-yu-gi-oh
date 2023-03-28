<script>

export default {
    data(){
        return{
            
        }
    },

    props:{
        Card: Object,
    }
}
</script>

<template> 
    <div class="card">
        <div class="img-container">
            <img :src="Card" alt="cardImg">
        </div>
        <div class="description">
            
        </div>
    </div>
</template> 

<style lang="scss" scoped>
    
    .card{
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: white;

        width: calc(100% / 6 - 10px / 6 * 5);

    }

</style>