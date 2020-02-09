<template>
  <nav class="main_nav_container">
      <div class="logo_wrapper">
          <h1 class="logo_big">agmar</h1>
          <h3 class="logo_small">meble kuchenne.</h3>
      </div>
      <button class="hamburger_button" @click="showNav = !showNav">
          <div :class="{close_nav: showNav}" class="ham_item"></div>
          <div v-if="!showNav" class="ham_item"></div>
          <div :class="{close_nav: showNav}" class="ham_item"></div>
      </button>
      <transition name="fade">
      <ul class="items_wrapper" v-show="showNav">
          <li class="single_link"><a v-scroll-to='".home_container"' @click="showNav = !showNav" class="link">Home</a></li>
          <li class="single_link"><a v-scroll-to='".about_container"' @click="showNav = !showNav" class="link">O firmie</a></li>
          <li class="single_link"><a v-scroll-to='".realistaions_container"' @click="showNav = !showNav" class="link">Realizacje</a></li>
          <li class="single_link"><a v-scroll-to='".offer_container"' @click="showNav = !showNav" class="link">Oferta</a></li>
          <li class="single_link"><a v-scroll-to='".contact_container"' @click="showNav = !showNav" class="link">Kontakt</a></li>
      </ul>
      </transition>
  </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return{
            showNav: false
        }
    },
}
</script>

<style lang="scss">

.main_nav_container{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 11;
    padding: 34px;
}
.items_wrapper{
    list-style: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(7, 88, 88);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.logo_wrapper{
    z-index: 13;
}
.logo_big{
    text-transform: uppercase;
    color: white;
    font-size: 24px;
}
.logo_small{
    color: white;
    font-size: 12px;
}
.hamburger_button{
    background: none;
    border: none;
    z-index: 13;
    &:focus{
        outline: none;
    }
}
.ham_item{
    width: 40px;
    height: 4px;
    background: white;
    margin: 4px 0;
    transition: 0.1s;
}
.link{
    color: white;
    font-size: 40px;
    text-transform: uppercase;
}
.close_nav:nth-child(1){
    transform: rotate(45deg) translate(5px);
}
.close_nav:nth-child(2){
    transform: rotate(-45deg) translate(5px);
}
@media (min-width:1440px){
   .main_nav_container{
        padding: 32px 100px;
   }
   .logo_big{
       font-size: 32px;
   }
   .logo_small{
       font-size: 16px;
   }
   .logo_big, .logo_small{
       color: black;
   }
    .hamburger_button{
        display: none;
   }
    .items_wrapper{
        display: flex !important;
        position: relative;
        height: auto;
        width: auto;
        flex-direction: row;
        background: none;
        .single_link{
            margin: 0 24px;
            &:last-child{
                margin-right: 0;
            }
        }
        .link{
            color: black;
            font-size: 15px;
        }
    }
}
</style>