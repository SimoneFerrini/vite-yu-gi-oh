<script>


export default{
  data(){
    return{
        logo: "./img/yugiohLogo.png",
        linksList: ["Cards", "Shop", "Contact Us", "Info"],
        activeIndex: 0,
    }
  },

  methods:{
    changeIndex(index){
        this.activeIndex = index;
    }
  }

  
}
</script>

<template>
  <nav>
    <div class="my-container">
        <ul>
            <li v-for="(link, index) in linksList" :class="activeIndex == index ? 'active' : ' ' " @click="changeIndex(index)"> {{ link }}</li>
        </ul>
    </div>
</nav>
</template>

<style lang="scss" scoped>
    nav{
        background-image: url("./img/yugiohLogo.png");
            background-size: cover;
            background-position-y: 20%;

            height: 250px;
        

        .my-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;

            height: 100%;

            padding: 1em 0;

        ul{
            list-style: none;

            width: 50%;


            display: flex;
            flex-direction: row;
            justify-content: space-between;

            li{
                color: white;
                font-size: 1.5em;
                font-weight: bold;

                border: 3px solid white;
                background-color: rgba(0, 0, 0, 0.312);

                padding: 3px 7px;

                
            }

            .active{
                border: 3px solid dodgerblue;
                color: dodgerblue;
            }
        }
            

        }
     }

    
</style>