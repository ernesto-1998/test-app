<template>
  <div class="top-products" :key="i" v-for="(item, i) in productosPopulares">
    <div class="top-products-img">
      <img width="100px" :src="item.imagen" />
    </div>

    <div class="top-products-text">
      <div class="top-products-title">
        {{ item.nombre }}
      </div>
      <div class="top-products-price">
        {{ item.precio }}
      </div>
    </div>
    <i class="bx bx-plus-medical"></i>
  </div>
</template>

<script>
export default {
  name: "TopProducts",

  data() {
    return {
        productosPopulares:[
        {"nombre": "Malteada de Maracuya", "precio": "$3.50", "imagen": "https://www.vips.com.mx/img/2019/platillosdic/malteada-cookies-cream.png" },
        {"nombre": "Papas locas", "precio": "$1.50", "imagen": "https://pngimg.com/uploads/fries/fries_PNG97888.png" },
        {"nombre": "Ensala Caesar", "precio": "$6.50", "imagen": "https://i.pinimg.com/originals/66/1e/e6/661ee628d8384abb2367b9d256557a17.png" }
    ],
    }
  },

};
</script>

<style lang="less">

.top-products {
  min-width: 150px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;

    .top-products-img{
        img{
            width: 100%;
        }
    }
    .top-products-text{
        margin-top: 10px;

        .top-products-title{
            color: rgba(47,47,47);
        }

        .top-products-price{
            color: rgba(255, 131, 62);
        }
    }

  i {
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: green;
    padding: 10px;
    color: white;
    border-radius: 50px;
    margin: 5px;
  }
}
</style>
