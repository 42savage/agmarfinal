<template>
  <div class="home_container">
    <fullImage v-if="imageState"/>
    <Loading/>
    <Navigation/>
    <Slider/>
    <Info/>
    <About/>
    <Realisations/>
    <Offer/>
    <ContactUs/>
    <Footer/>
    <backTop/>
  </div>
</template>

<script>
import Navigation from '../components/navigation.vue';
import Slider from '../components/slider.vue';
import Info from '../components/Info.vue';
import About from '../components/About.vue';
import Loading from '../components/Loading.vue';
import Realisations from '../components/Realisations.vue';
import Offer from '../components/Offer.vue';
import fullImage from '../components/fullImage.vue';
import ContactUs from '../components/ContactUs.vue';
import Footer from '../components/Footer.vue';
import backTop from '../components/backTop.vue';
import { mapState } from 'vuex';
export default {
  name: 'home',
  components: {
    Navigation,
    Slider,
    Info,
    About,
    Loading,
    Realisations,
    Offer,
    fullImage,
    ContactUs,
    Footer,
    backTop
  },
  computed:{
    ...mapState({
      imageState: state=> state.realisations.imageState
    })
  }
}
</script>
<style lang="scss" scoped>
  .home_container{
    width: 100%;
    height: 100vh;
  }
</style>
