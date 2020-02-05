<template>
  <div class="offer_container">
      <Indicator title="Zapoznaj się z naszą ofertą" counter="03" content=" Każdy mebel wychodzący z naszego warsztatu cechuje się solidnym wykonaniem.
        Nasze produkty tworzone są z wysokiej jakości materiałów i systemów."/>
        <div class="categories">
          <div class="box">
            <h4>Fronty MDF</h4>
          </div>
          <div class="box">
            <h4>Fronty Drewniane</h4>
          </div>
          <div class="box">
            <h4>Szkło grafika</h4>
          </div>
          <div class="box">
            <h4>Systemy</h4>
          </div>
          </div>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';
export default {
    name: 'Offer',
    components:{
        Indicator
    }
}
</script>

<style scoped lang="scss">
.categories{
  width: 100%;
  height: 360px;
  padding: 0 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.box{
  width: 50%;
}
</style>