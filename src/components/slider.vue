<template>
<div class="owlOverlay" v-if="images.length > 0">
<carousel class="main_carousel_container" 
  :autoplay="false" 
  :loop="true" 
  :center="true" 
  :items="1" 
  :dotsContainer="'.dotsContainer'" 
  :nav="true"
  :navContainer="'.navContainer'"
  :navText="['KONTAKT', 'OFERTA']"
>
      <div class="slider_item_wrapper" v-for="img in images" :key="img.id" :style="`background-image: ${img.style}, url(${img.url})`">
        <div class="first"><h1 class="slider_heading">{{img.heading_text}}</h1></div>
        <div class="second"><button class="slider_button">{{img.button_text}}</button></div>
    </div>
</carousel>
<div class="dotsContainer"></div>
<div class="navContainer"></div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import carousel from 'vue-owl-carousel'
export default {
    name: 'Slider',
    components: { carousel },
    computed:{
    ...mapState({
        images: state => state.firebase_images.carouselImages,
    })
  },
  methods:{
    ...mapMutations(['bindImages'])
  },
  mounted(){
    this.bindImages();
  }
}
</script>

<style lang="scss">
.main_carousel_container{
    width: 100%;
    height: 100vh;
}
.slider_item_wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover !important;
    background-position: center !important;
}
.slider_heading{
  margin: 0 33px 0 34px;
  font-size: 61px;
  font-weight: bold;
  line-height: 81.7%;
  text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  color: white;
}
.slider_button{
  background: none;
  border: 2px solid white;
  width: 160px;
  height: 40px;
  color: white;
  text-transform: uppercase;
}
.first{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 60%;
}
.second{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
}
.dotsContainer{
  width: 100%;
  position: absolute;
  // display: none;
  bottom: 70px;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  button{
    width: 12px;
    height: 12px;
    border: none;
    margin: 6px;
    border-radius: 20px;
    &:focus{
      outline: none;
    }
  }
  .active{
    background: white;
  }
}
.navContainer{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  div{
    width: 50%;
    height: 52px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
  }
}
.owl-prev::before{
  content: '';
  background: url('../assets/phone.png') no-repeat;
  position: absolute;
  left: 15px;
  bottom: 0;
  margin: auto;
  top: 0;
  width: 25px;
  height: 25px;
}
.owl-prev::after{
  content: '';
  background: url('../assets/next.png') no-repeat;
  background-size: 65%;
  background-position: center;
  position: absolute;
  right: 15px;
  bottom: 0;
  margin: auto;
  top: 0;
  width: 25px;
  height: 25px;
}
</style>