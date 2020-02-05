<template>
  <div class="modal_container">
    <button @click="showImage" class="closeModal">
      <div></div>
      <div></div>
    </button>
      <img v-if="currentImage" :src="currentImage">
      <iframe v-else width="560" height="315" src="https://www.youtube.com/embed/gh0Krs3FIl4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'fullImage',
    methods:{
      ...mapActions(['showImage'])
    },
    computed:{
      ...mapState({
        currentImage: state=> state.realisations.currentImage
      })
    }
}
</script>

<style scoped lang="scss">
.modal_container{
  width: 100vw;
  z-index: 100;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(24, 24, 24, 0.822);
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 100%;
}
.closeModal{
  position: absolute;
  right: 34px;
  top: 34px;
  background: none;
  border: none;
  div{
    background: white;
    width: 40px;
    height: 4px;
  }
  div:nth-child(1){
     transform: rotate(45deg) translateY(2px);
  }
  div:nth-child(2){
      transform: rotate(-45deg) translateY(-2px);
  }
}
</style>