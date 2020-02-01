<template>
  <div class="home_container">
    <Navigation/>
    <Slider/>
    <Info/>
    <About/>
  </div>
</template>

<script>
import Navigation from '../components/navigation.vue';
import Slider from '../components/slider.vue';
import Info from '../components/Info.vue';
import About from '../components/About.vue';
export default {
  name: 'home',
  components: {
    Navigation,
    Slider,
    Info,
    About
  },
}
</script>
<style lang="scss" scoped>
  .home_container{
    width: 100%;
    height: 100vh;
  }
</style>
