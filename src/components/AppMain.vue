<script>
import {store} from "../store.js";
import axios from "axios";
import ItemCard from "./ItemCard.vue";
import SearchCard from "./SearchCard.vue";

export default{
  data(){
    return{

        store,
    }
  },

  created(){
    axios.get(this.store.APIlinkFifty).then((res) => {

        this.store.cardsList = res.data.data;

        console.log(res.data.data[0]);
    });
  },

  components:{
    ItemCard,
    SearchCard,
  }

  
}
</script>

<template>
  <div class="main-bg">
   <SearchCard></SearchCard> 
   <div v-if="store.cardsList.length == 0" class="loading" >Loading ...</div>
   <div class="cards-container" v-else>
     <ItemCard v-for="card in store.cardsList" :Card="card"> </ItemCard>
     
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

  .main-bg{
    background-image: url("./img/yugiohbg.png");
    background-size: 25%;

    position: relative;

    padding-top: 1em;

    .loading{
      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: black;
      


    }

  }

  .cards-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    width: 85%;
    margin: 0 auto;

    padding: 2em 0;
    
    
  }

</style>