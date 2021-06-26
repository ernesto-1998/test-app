<template>
    <div class="home">
        <div class="header">
            <h2 class="title"> Hi <b> Usuario </b> </h2>
            <div class="input">
              <input type="text" placeholder="Encuentra lo que buscas">
              <div class="icon-input">
                  <i class='bx bx-search-alt'></i>
              </div>
            </div>
        </div>       
    </div>
</template>

<script>

export default {

  name: 'Home',

}
</script>

<style lang="less">
  h2 {
    font-weight: 400;
  }

  .home {
    margin: 20px;
  }

  .header {
    .input {
      display: flex;
      position: relative;

        input{
          width: 100%;
          padding: 10px;
          border: 0;
          outline: none;
          border-radius: 10px;
        }
    }

    .title {
      font-weight: 350;
  }
  }
</style>
