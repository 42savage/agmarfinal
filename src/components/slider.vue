<template>
<div class="owlOverlay" v-if="images.length > 0">
<carousel class="main_carousel_container" 
  :autoplay="false" 
  :loop="true" 
  :center="true" 
  :items="1" 
  :dotsContainer="'.dotsContainer'" 
  :nav="true"
  @changed="changed"
  :navContainer="'.navContainer'"
  :navText="['KONTAKT', 'OFERTA']"
>
      <!-- <div class="slider_item_wrapper" v-for="img in images" :key="img.id" :style="`background-image: ${img.style}, url(${img.url})`"> -->
        <!-- <div class="first"><h1 class="slider_heading">{{img.heading_text}}</h1></div>
        <div class="second"><button class="slider_button">{{img.button_text}}</button></div> -->
        <div class="slider_item_wrapper" :style="{'background-image': `url(${require('@/assets/image1.jpg')})`}">
          <div class="first"><h1 class="slider_heading">Heading text here</h1></div>
          <div class="second"><button class="slider_button">button text</button></div>
        </div>
        <div class="slider_item_wrapper" :style="{'background-image': `url(${require('@/assets/image1.jpg')})`}">
          <div class="first"><h1 class="slider_heading">Heading text here</h1></div>
          <div class="second"><button class="slider_button">button text</button></div>
        </div>
        <div class="slider_item_wrapper" :style="{'background-image': `url(${require('@/assets/image1.jpg')})`}">
          <div class="first"><h1 class="slider_heading">Heading text here</h1></div>
          <div class="second"><button class="slider_button">button text</button></div>
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
    data(){
      return{
        page: 0,
      }
    },
    computed:{
    ...mapState({
        images: state => state.firebase_images.carouselImages,
    })
  },
  methods:{
    ...mapMutations(['bindImages']),
    changed(data){
      this.page = data.page.index;
      // console.log(data)
      data.relatedTarget.settings.navText[0] = 'test';
    },
  },
  mounted(){
    this.bindImages();
  }
}
</script>

<style lang="scss">
.owlOverlay{
  position: relative;
}
.main_carousel_container{
    width: 100%;
    height: 100vh;
}
.slider_item_wrapper{
    width: 100%;
    height: 600px;
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
.owl-next::after{
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
@media (min-width:1440px){
  .owlOverlay{
    padding: 130px 100px 0 100px;
    width: 100%;
  }
  .main_carousel_container{
    width: 100%;
    height: 720px;
  }
  .slider_item_wrapper{
        height: 720px;
  }
  .first{
    justify-content: flex-start;
    .slider_heading{
      margin: 0 72px;
      font-size: 42px;
      font-weight: lighter;
    }
  }
  .second{
    justify-content: flex-start;
    align-items: flex-start;
    .slider_button{
          margin: 24px 72px;
    }
  }
  .navContainer{
    bottom: 0;
    left: calc(100% - 200px);
    width: 100px;
    .owl-prev, .owl-next{
      width: 50%;
      color: transparent;
      font-size: 0;
    }
  }
  .dotsContainer{
    bottom: calc(50% - 106px);
    left: calc(100% - 140px);
    width: auto;
    flex-direction: column;
  }
  .owl-prev::before{
    background: url('../assets/next.png') no-repeat;
    background-size: 20px;
    background-position: center;
    transform: rotate(180deg);
}
}
</style>