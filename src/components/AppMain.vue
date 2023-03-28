<script>
import {store} from "../store.js";
import axios from "axios";
import ItemCard from "./ItemCard.vue";

export default{
  data(){
    return{

        store,
    }
  },

  created(){
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
        console.log(res);
        console.log(res.data.data);

        this.store.cardsList = res.data.data;

        console.log(res.data.data[0]);
    });
  },

  components:{
    ItemCard,
  }

  
}
</script>

<template>
  <div v-if="store.cardsList.length < 50" >Loading...</div>
  <div class="cards-container" v-else>
    <ItemCard v-for="card in store.cardsList" :Card="card"> </ItemCard>
    
  </div>
  
</template>

<style lang="scss" scoped>

  .cards-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    width: 85%;
    margin: 0 auto;

    padding: 2em 0;
    
  }

</style>