<template>
  <div class="home_container">
    <Navigation/>
    <Slider/>
    <Test/>
  </div>
</template>

<script>
import Navigation from '../components/navigation.vue';
import Slider from '../components/slider.vue';
import Test from '../components/test.vue';
export default {
  name: 'home',
  components: {
    Navigation,
    Slider,
    Test
  },
}
</script>
<style lang="scss" scoped>
  .home_container{
    width: 100%;
    height: 100vh;
  }
</style>
