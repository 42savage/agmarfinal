<template>
  <div class="home_container">
    <Navigation/>
    <Slider/>
  </div>
</template>

<script>
import Navigation from '../components/navigation.vue';
import Slider from '../components/slider.vue';
export default {
  name: 'home',
  components: {
    Navigation,
    Slider
  },
}
</script>
<style lang="scss" scoped>
  .home_container{
    width: 100%;
    height: 100vh;
  }
</style>
