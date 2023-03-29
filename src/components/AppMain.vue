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
    axios.get(this.store.APIlink).then((res) => {

        this.store.cardsList = res.data.data;
    });
  },

  components:{
    ItemCard,
    SearchCard,
  },
  methods:{
    searchCardByName(){
      let newAPIlinks = this.store.APIlink + this.store.APIname + this.store.APIsearch;
      axios.get(newAPIlinks).then((res)=>{
        this.store.cardsList = res.data.data;
      }).catch((err) =>{
        this.store.cardsList = [];
      })
    }
  }

  
}
</script>

<template>
  <div class="main-bg">
   <SearchCard @search="searchCardByName()"></SearchCard> 
   <div v-if="store.cardsList == 0 && store.APIsearch =='' " class="loading" >Loading ...</div>
   <span class="error" v-else-if="store.cardsList.length == 0">Name not found!</span>
   <div class="cards-container">
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

    .error{
      display: flex;
      justify-content: center;
      width: 100%;
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