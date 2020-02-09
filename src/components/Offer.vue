<template>
  <div class="offer_container">
      <Indicator title="Zapoznaj się z naszą ofertą" counter="03" content=" Każdy mebel wychodzący z naszego warsztatu cechuje się solidnym wykonaniem.
        Nasze produkty tworzone są z wysokiej jakości materiałów i systemów."/>
        <div class="categories">
          <div v-for="icon in icons" class="single_category" :key="icon.id" :style="`background-image: ${icon.style}, url(${icon.url})`">
            <h4>{{icon.name}}</h4>
          </div>
        </div>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'Offer',
    components:{
        Indicator
    },
    computed:{
      ...mapState({
        icons: state=> state.offerIcons.offerIcons
      })
    },
    methods:{
      ...mapMutations(['bindOfferIcons'])
    },
    mounted(){
      this.bindOfferIcons();
    }
}
</script>

<style scoped lang="scss">
.categories{
  width: 100%;
  padding: 0 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
}
.single_category{
  width: 146px;
  height: 146px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  background-size: cover;
  background-position: center;
  h4{
    padding: 12px;
  }
}

</style>