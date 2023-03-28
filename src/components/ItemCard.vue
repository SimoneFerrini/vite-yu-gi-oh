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
            <img :src="Card.card_images[0].image_url" alt="cardImg">
        </div>
        <div class="description">
            <span>Name: {{ Card.name }}</span>
            <span>Type:  {{ Card.type }}</span>
            <!-- <span>Price: {{ Card.card_sets[0].set_price}} $</span> -->
        </div>
    </div>
</template> 

<style lang="scss" scoped>
    
    .card{
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: white;

        margin-bottom: 1em;

        width: calc(100% / 5 - 15px / 5 * 4);

        .img-container{
            width: 100%;

            img{
                width: 100%;
            }
        }

        .description{
            display: flex;
            flex-direction: column;
        }

    }

</style>