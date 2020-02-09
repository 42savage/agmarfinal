<template>
  <div class="about_container">
    <Indicator title="Kilka słów o nas" counter="01" content=" Meble AGMAR to firma z dwudziesto letnią tradycją. 
    Charakteryzuję nas specjalne podejście do klienta oraz szeroka oferta. " />
    <div class="content">
      <h3 class="title_boxes">Proces zamówienia to kilka banalnych kroków</h3>
      <p class="check">Z resztą, sprawź sam</p>
    </div>
    <div class="boxes">
    <infoBox contentText=" Pierwszym krokiem jest skontaktowanie się z nami i umówienie na pomiar. " contentHeader="Kontakt" :icon="require('../assets/phone.svg')"/>
    <infoBox contentText=" Następnie o umówionej porze udajemy się do państwa w celu pomiaru i dogadania szczegółów. " contentHeader="Pomiar" :icon="require('../assets/meas.svg')"/>
    <infoBox contentText=" Gdy znamy wymiary zabieramy się za zamówienie potrzebnych nam materiałów i realizacje zamówienia. " contentHeader="Realizacja" :icon="require('../assets/delivery.svg')"/>
    <infoBox contentText=" Ostatni, finalny krok to dostawa i montaż zamówienia " contentHeader="Dostawa" :icon="require('../assets/deliv2.svg')"/>
    </div>
    <h1 class="video-heading">Film przedstawiający prace systemu aventados</h1>
    <button v-if="$mq === 'small'" class="video" @click="showImage">Wideo</button>
    <button v-else class="video" @click="showVideo = !showVideo">Wideo</button>
    <div v-if="showVideo">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gh0Krs3FIl4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import infoBox from '../components/infoBox.vue';
import { mapActions } from 'vuex';
export default {
    name: 'About',
    data(){
      return{
        showVideo: false
      }
    },
    components:{
      Indicator,
      infoBox
    },
    methods:{
      ...mapActions(['showImage'])
    }
}
</script>

<style scoped lang="scss">
.about_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.check{
  margin-bottom: 12px;
}
.content{
  padding: 0 34px;
}
.boxes{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.video-heading{
  font-size: 22px;
  padding: 0 34px;
  text-align: center;
  margin-top: 6px;
}
.video{
  width: 115px;
  height: 40px;
  border: 2px solid black;
  background: none;
  margin: 12px 0;
}
@media(min-width:1440px){
  .boxes{
    flex-direction: row;
  }
  .box_container{
    margin: 96px 6px;
  }
  .title_boxes{
    font-size: 32px;
  }
  .check{
    font-size: 18px;
  }
}
</style>