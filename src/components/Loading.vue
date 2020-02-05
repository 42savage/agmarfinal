<template>
  <div class="loading_wrapper">
      <h1>Loading<span class="d1">.</span><span class="d2">.</span><span class="d3">.</span></h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { TweenMax, Expo } from "gsap";
export default {
    name: 'Loading',
    computed:{
    ...mapState({
        images: state => state.carousel.carouselImages,
    })
  },
    mounted(){
        if(this.images.length == 0){
           TweenMax.to(".loading_wrapper", 1.6, {
                delay: 1,
                top: "-110%",
                ease: Expo.easeInOut
            });
        }
    }
}
</script>

<style scoped lang="scss">
.loading_wrapper{
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-size: 46px;
    color: black;
}
</style>