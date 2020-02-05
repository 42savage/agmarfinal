<template>
  <div class="gallery_container">
    <navigation/>
    some text here
    <div class="grid-item" v-for="img in images" :key="img.id" ><img  :src="img.url" :alt="img.name"></div>
  </div>
</template>

<script>
import navigation from '../components/navigation.vue';
import { mapState, mapMutations } from 'vuex';
export default {
  components:{
    navigation
  },
  computed:{
    ...mapState({
      //name: state=> state.module_name.component_state_name
      images: state=> state.realisations.realisationsBest
    })
  },
  methods:{
    ...mapMutations(['bindRealisationsBest'])
  },
  mounted(){
    this.bindRealisationsBest();
  }
}
</script>

<style scoped lang="scss">
.grid-item{
  width: 100%;
  padding: 0 34px;
  img{
    width: 100%;
  }
}
.main_nav_container{
  position: fixed;
  background: rgba(0, 0, 0, 0.233);
}


</style>