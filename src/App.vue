<template>
    <div id="app">
        <h1> {{ msg }} </h1>
         <div class="bg"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg : "Halloween!!"
        }
    }
}
</script>
<style lang="scss" scoped>
  #app {
    color: #ff0000;
  }
  h1 {
    color: $color;
    transform : translateX(50%);
  }
  .bg {
    width: 500px;
    height: 500px;
    background: url('./images/reinhart-julian-DrjX_e1W6cc-unsplash.jpg') bottom center / cover no-repeat;
  }
</style>