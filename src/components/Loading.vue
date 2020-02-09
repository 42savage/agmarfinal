<template>
  <transition name="slideUp">
      <div v-if="this.images.length == 0" class="loading_wrapper">
        <h1>Meble Agmar</h1>
        <h3>Stwórz kuchnie twoich marzeń</h3>
      </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Loading',
    data(){
        return{
            showLoading: true
        }
    },
    computed:{
    ...mapState({
        images: state => state.carousel.carouselImages,
    })
  },
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h1{
    font-size: 46px;
    color: black;
}
.slideUp-enter-active, .slideUp-leave-active {
  transition: transform 0.8s ease-in;
}
.slideUp-enter, .slideUp-leave-to /* .slideUp-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
}
</style>