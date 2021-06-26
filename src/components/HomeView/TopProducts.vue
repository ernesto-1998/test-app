<template>
  <div class="top-products">
    <div class="top-products-img">
      <img width="100px" src="https://www.vips.com.mx/img/2019/platillosdic/malteada-cookies-cream.png" alt="" />
    </div>

    <div class="top-products-text">
      <div class="top-products-title">
        Malteada de Maracuya
      </div>
      <div class="top-products-price">
        $3.50
      </div>
    </div>
    <i class="bx bx-plus-medical"></i>
  </div>
</template>

<script>
export default {
  name: "TopProducts",
};
</script>

<style lang="less">

.top-products {
  max-width: 150px;
  position: relative;
  padding: 10px;
  border-radius: 10px;

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
