<template>
  <div class="realistaions_container">
      <Indicator title="Realizacje" counter="02" content="Do każdego zamówienia podchodzimy indywidualnie. To czyni nas lidierem wśród Skaryszewskiego rynku stolarskiego." />
      <div class="slider_overlay" v-if="bestImages.length > 0">
      <carousel class="realisations_slider" :dots="false" :autoplay="true" :center="true" :items="2" :navContainer="'.nav_container'">
          <div class="slide" @click="showImage(best)" v-for="best in bestImages" :key="best.id" :style="`background: url(${best.url}) no-repeat center; background-size: 125%`"></div>
      </carousel>
      </div>
      <button class="showMore">Pokaż więcej</button>
  </div>
</template>

<script>
import Indicator from '../components/Indicator';
import carousel from 'vue-owl-carousel';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: 'Realisations',
    components:{
        Indicator,
        carousel,
    },
    methods:{
        ...mapMutations(['bindRealisationsBest']),
        ...mapActions(['showImage'])
    },
    computed:{
        ...mapState({
            //name: state=> state.module_name.component_state_name
            bestImages: state=> state.realisations_best.realisationsBest,
        })
    },
    mounted(){
        this.bindRealisationsBest();
    }

}
</script>

<style scoped lang="scss">
.realistaions_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.realisations_slider{
    width: 100%;
    height: 140px;
    padding: 0 34px;
}
.slide{
    width: 140px;
    height: 140px;
    text-align: center;
}
.slider_navigation{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
}
.slider_overlay{
    width: 100%;
}
.showMore{
    background: none;
    border: 2px solid black;
    width: 115px;
    height: 40px;
    margin: 20px 0;
}

</style>