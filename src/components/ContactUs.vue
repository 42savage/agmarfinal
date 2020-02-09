<template>
  <div class="contact_container">
      <Indicator title="Skontaktuj się z nami" content=" XXI wiek, wiek internetu, facebooka, wszechobecnej telefoni. 
    Wybierz najwygodniejszą dla ciebie forme komunikacji i skontaktuj się z nami" counter="04" />
    <div class="contact_box">
        <div class="phone">
            <h3 class="heading">Telefonicznie</h3>
            <p class="sub">123-456-789</p>
        </div>
        <div class="mail">
            <h3 class="heading">Mailowo</h3>
            <p class="sub">dynia@zdupywyjety.pl</p>
        </div>
    </div>
  </div>
</template>

<script>
import Indicator from '../components/Indicator';
export default {
    name: 'ContactUs',
    components:{
        Indicator
    }
}
</script>

<style scoped lang="scss">
.contact_box{
    padding: 34px;
    background: linear-gradient(0deg,#00888d,rgba(0,0,0,.7)), url('../assets/contact.jpg');
    background-size: cover;
    background-position: center;
}
.heading, .sub{
    color: white;
}
</style>