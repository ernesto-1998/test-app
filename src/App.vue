<template>
  <div id="app">

    <div class="navbar-container">

      <div class="navbar-content">

        <router-link to="/">
          <i class='bx bx-home-smile'></i>
        </router-link>
        <router-link to="/Card">
          <i class='bx bx-task' ></i>
        </router-link>
        <router-link to="/Contact">
          <i class='bx bxs-contact' ></i>
        </router-link>
        <router-link to="/Redes">
          <i class='bx bxl-facebook-square' ></i>
        </router-link>

      </div>

    </div>
    
    <router-view />

  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="less">

  .navbar-container{
    width: 100%;
    position: fixed;
    bottom: 0;

    .navbar-content{
      display: flex;
      padding: 20px;
      justify-content: space-between;

      a{
        color: grey;
        &.router-link-exact-active {
          color: red;
        }
      }
    }
  }

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px;
  padding: 0px;
}
</style>
