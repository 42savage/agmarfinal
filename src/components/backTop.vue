<template>
  <button class="btnshw" :class="{ show: showButton }" v-scroll-to='".home_container"'><img alt="icon" src="../assets/next.png"></button>
</template>

<script>
export default {
    name: 'backTop',
    data(){
        return{
            showButton: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy(){
    window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll(){
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if(currentScrollPosition > 900){
                this.showButton = true;
            }
            else{
                this.showButton = false;
            }
  }
}
}
</script>

<style scoped lang="scss">
button{
    display: none;
    justify-content: center;
    align-items: center;
    background: #333333;
    padding: 4px 12px;
    border: none;
    z-index: 5;
    position: fixed;
    right: 34px;
    top: 90%;
    transform: rotate(270deg);
    &:focus{
        outline: none;
    }
}
.show{
    display: flex;
}
</style>