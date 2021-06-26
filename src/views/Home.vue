<template>
    <div class="home">
        <div class="header">
            <h2 class="title"> Hola <b> Usuario! </b> </h2>
            <div class="input">
              <input type="text" placeholder="Encuentra lo que buscas">
              <div class="icon-input">
                  <i class='bx bx-search-alt'></i>
              </div>
            </div>
            <div>
              <HomeCard/>
            </div>

        </div>
        <div class="scroll-menu">
          <div class="scroll-content">
            <div class="avatar" v-for="(item, i) in 7" :key="i">
              <i class='bx bxs-pizza'></i>
            </div>
          </div>
        </div>
        <h2> Más Populares </h2>
        <div class="scroll-menu">
          <div class="scroll-content">
            <!-- <div class="top-products"> -->
              <TopProducts/>
            <!-- </div> -->
          </div>
        </div>      
    </div>
</template>

<script>

import TopProducts from "../components/HomeView/TopProducts.vue"
import HomeCard from "../components/HomeView/HomeCard.vue"
export default {

  components:{
    HomeCard,
    TopProducts
  },

  name: 'Home',
}
</script>

<style lang="less">
  h2 {
    font-weight: 400;
  }

  .home {
    margin: 20px;

    .scroll-menu{
      margin-top: 10px;

      .scroll-content{
        display: flex;
        overflow-y: auto;

        .avatar{
          background-color: rgb(240, 240, 240);
          padding: 20px;
          border-radius: 10px;
          margin: 5px;

          i{
            color: rgb(255, 172, 17);
          }
        }
      }
    }
  }

  .header {
    .input {
      display: flex;
      position: relative;
      align-items: center;
      margin-top: 15px;

        input{
          width: 100%;
          padding: 10px;
          border: 0px;
          outline: none;
          padding: 10px;
          padding-left: 30px;
          border-radius: 10px;
          background-color: rgb(230, 230, 230);
        }

        .icon-input {
          position: absolute;
          margin-left: 10px;
        }
    }

    .title {
      font-weight: 350;
  }
  }
</style>
