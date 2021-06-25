<template>
    <div class="card-container">
          <div class="li"  :style="state ? 'border-color: red' : 'border-color: blue'">{{ titulo }}</div>
          <div class="acciones">
            <button @click="$emit('update')" class="buttonListo-acciones">Listo</button>
            <button @click="$emit('delete')" class="buttonD-acciones">D</button>
          </div>
    </div>
</template>

<script>

export default {
    name: "Card",
    props: {
      titulo: { type: String, default:'' },
      state: { type: Boolean, default:'false' }
    },
    data() {
      return {
        activeColor: 'red'
      }
    },
}
</script>

<style lang="less">

      .card-container{
        display: flex;
        justify-content: space-between;
        height: 100%;
        background-color: rgb(209, 209, 214);
        margin: 0.5rem;
        padding: 0.25rem;

        .li {
            border-left-style: ridge;
            list-style-type: none;
            position: relative;
            padding: 1.25rem;
        }

        .acciones {
          height: 100%;
          display: flex;
          align-items: center;

          .buttonD-acciones {
              background-color: red; 
              border: none;
              color: white;
              padding: 0.75rem;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
          }

          .buttonListo-acciones {
              background-color: green; 
              border: none;
              color: white;
              padding: 0.75rem;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
          }
        }

        
      }
    //}
</style>
