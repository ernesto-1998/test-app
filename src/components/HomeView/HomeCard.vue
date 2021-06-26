<template>
    <div class="combo-header">
        <div class="text">
            <h3> Combo gratis </h3>
            <p> Burguer + Coca cola para nuevos clientes </p>
        </div>
        <div class="img">
            <img src="https://images.rappi.com.ec/products/49628-1579207396918.png?d=128x90" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeCard",
}
</script>

<style lang="less">
    .combo-header {
        background-color: rgb(33, 175, 33);
        color: white;
        padding: 20px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        margin-top: 20px;

        .img{
            width: 50%;
            margin-bottom: 15px;

            img{
                width: 100%;
                object-fit: cover;
            }
        }

        .text{
            width: 50%;
            h3{
                font-weight: 500px;
            }

            p{
                font-weight: 300px;
            }            
        }
    }
</style>