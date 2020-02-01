<template>
  <div class="about_container">
    <Indicator title="Kilka słów o nas" counter="01" content=" Meble AGMAR to firma z dwudziesto letnią tradycją. 
    Charakteryzuję nas specjalne podejście do klienta oraz szeroka oferta. " />
    <div class="content">
      <h3 class="title">Proces zamówienia to kilka banalnych kroków</h3>
      <p class="check">Z resztą, sprawź sam</p>
    </div>
    <div class="boxes">
    <infoBox contentText=" Pierwszym krokiem jest skontaktowanie się z nami i umówienie na pomiar. " contentHeader="Kontakt" :icon="require('../assets/phone.svg')"/>
    <infoBox contentText=" Następnie o umówionej porze udajemy się do państwa w celu pomiaru i dogadania szczegółów. " contentHeader="Pomiar" :icon="require('../assets/meas.svg')"/>
    <infoBox contentText=" Gdy znamy wymiary zabieramy się za zamówienie potrzebnych nam materiałów i realizacje zamówienia. " contentHeader="Realizacja" :icon="require('../assets/delivery.svg')"/>
    <infoBox contentText=" Ostatni, finalny krok to dostawa i montaż zamówienia " contentHeader="Dostawa" :icon="require('../assets/deliv2.svg')"/>
    </div>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import infoBox from '../components/infoBox.vue';
export default {
    name: 'About',
    components:{
      Indicator,
      infoBox
    }
}
</script>

<style scoped lang="scss">
.content{
  padding: 0 34px;
}
.boxes{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>